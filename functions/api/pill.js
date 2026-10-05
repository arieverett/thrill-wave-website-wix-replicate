// Cloudflare Pages Function: first-party analytics for the homepage red / blue pill easter egg.
//
// POST /api/pill records one anonymous choice in the D1 database bound as TW_ANALYTICS.
// GET  /api/pill returns aggregate stats only when sent:
//   Authorization: Bearer <PILL_STATS_TOKEN>
//
// The table is created lazily, so setup only requires creating a D1 database,
// binding it to the Pages project as TW_ANALYTICS, and setting PILL_STATS_TOKEN.

const SCHEMA = `
CREATE TABLE IF NOT EXISTS pill_events (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  event_id TEXT NOT NULL UNIQUE,
  visitor_id TEXT NOT NULL,
  session_id TEXT NOT NULL,
  choice TEXT NOT NULL CHECK (choice IN ('red', 'blue')),
  first_visit INTEGER NOT NULL CHECK (first_visit IN (0, 1)),
  first_choice INTEGER NOT NULL CHECK (first_choice IN (0, 1)),
  elapsed_ms INTEGER,
  device TEXT,
  referrer_host TEXT,
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  page TEXT NOT NULL DEFAULT '/',
  country TEXT,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX IF NOT EXISTS pill_events_visitor ON pill_events(visitor_id);
CREATE INDEX IF NOT EXISTS pill_events_choice ON pill_events(choice);
CREATE INDEX IF NOT EXISTS pill_events_created ON pill_events(created_at);
`;

async function ensureSchema(db) {
  // D1.exec() is intended for one-shot maintenance and migration work and accepts multiple statements.
  await db.exec(SCHEMA);
}

const text = (value, max = 120) => (typeof value === 'string' ? value.trim().slice(0, max) : '');

export async function onRequestPost({ request, env }) {
  // Analytics must never break a navigation if the binding is temporarily missing.
  if (!env.TW_ANALYTICS) {
    console.error('TW_ANALYTICS D1 binding is not configured; pill event not saved.');
    return empty();
  }

  const origin = request.headers.get('Origin');
  if (origin && origin !== new URL(request.url).origin) return new Response('Forbidden', { status: 403 });

  const length = Number(request.headers.get('Content-Length') || 0);
  if (length > 8192) return new Response('Payload too large', { status: 413 });

  let raw;
  try {
    raw = await request.json();
  } catch {
    return new Response('Invalid JSON', { status: 400 });
  }

  const choice = raw.choice === 'red' || raw.choice === 'blue' ? raw.choice : '';
  const eventId = text(raw.event_id, 80);
  const visitorId = text(raw.visitor_id, 80);
  const sessionId = text(raw.session_id, 80);
  if (!choice || !eventId || !visitorId || !sessionId) return new Response('Invalid event', { status: 400 });

  const db = env.TW_ANALYTICS;
  try {
    await ensureSchema(db);
    const prior = await db.prepare('SELECT 1 FROM pill_events WHERE visitor_id = ? LIMIT 1').bind(visitorId).first();
    const elapsed = Number.isFinite(Number(raw.elapsed_ms))
      ? Math.max(0, Math.min(3600000, Math.round(Number(raw.elapsed_ms))))
      : null;

    await db.prepare(`
      INSERT OR IGNORE INTO pill_events
        (event_id, visitor_id, session_id, choice, first_visit, first_choice, elapsed_ms,
         device, referrer_host, utm_source, utm_medium, utm_campaign, page, country)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).bind(
      eventId,
      visitorId,
      sessionId,
      choice,
      raw.first_visit ? 1 : 0,
      prior ? 0 : 1,
      elapsed,
      text(raw.device, 20),
      text(raw.referrer_host, 180),
      text(raw.utm_source, 100),
      text(raw.utm_medium, 100),
      text(raw.utm_campaign, 160),
      text(raw.page, 180) || '/',
      text(request.cf?.country, 8),
    ).run();
  } catch (error) {
    // Keep the easter egg working even if analytics has a transient failure.
    console.error('Could not save pill analytics event:', error);
  }

  return empty();
}

export async function onRequestGet({ request, env }) {
  const url = new URL(request.url);

  // Safe setup/diagnostic endpoint. It exposes no visitor data.
  if (url.searchParams.get('health') === '1') {
    if (!env.TW_ANALYTICS) {
      return Response.json({ ok: false, binding: 'TW_ANALYTICS', error: 'binding missing' }, {
        status: 503,
        headers: { 'Cache-Control': 'no-store', 'X-Robots-Tag': 'noindex, nofollow' },
      });
    }
    try {
      await ensureSchema(env.TW_ANALYTICS);
      const row = await env.TW_ANALYTICS.prepare('SELECT COUNT(*) AS rows FROM pill_events').first();
      return Response.json({ ok: true, binding: 'TW_ANALYTICS', table: 'pill_events', rows: Number(row?.rows || 0) }, {
        headers: { 'Cache-Control': 'no-store', 'X-Robots-Tag': 'noindex, nofollow' },
      });
    } catch (error) {
      return Response.json({ ok: false, binding: 'TW_ANALYTICS', error: String(error?.message || error) }, {
        status: 500,
        headers: { 'Cache-Control': 'no-store', 'X-Robots-Tag': 'noindex, nofollow' },
      });
    }
  }

  if (!env.TW_ANALYTICS) return new Response('Analytics database not configured.', { status: 503 });

  const auth = request.headers.get('Authorization') || '';
  const expected = env.PILL_STATS_TOKEN || '';
  if (!expected || auth !== `Bearer ${expected}`) return new Response('Not found', { status: 404 });

  const db = env.TW_ANALYTICS;
  await ensureSchema(db);

  const [
    overall,
    firstChoice,
    firstTimeFirstChoice,
    returningFirstChoice,
    switchers,
    decisionTime,
    devices,
    countries,
    referrers,
    campaigns,
    daily,
  ] = await Promise.all([
    db.prepare(`
      SELECT choice, COUNT(*) AS clicks, COUNT(DISTINCT visitor_id) AS unique_visitors
      FROM pill_events GROUP BY choice ORDER BY choice
    `).all(),
    db.prepare(`
      SELECT choice, COUNT(*) AS visitors
      FROM pill_events WHERE first_choice = 1 GROUP BY choice ORDER BY choice
    `).all(),
    db.prepare(`
      SELECT choice, COUNT(*) AS visitors
      FROM pill_events WHERE first_choice = 1 AND first_visit = 1 GROUP BY choice ORDER BY choice
    `).all(),
    db.prepare(`
      SELECT choice, COUNT(*) AS visitors
      FROM pill_events WHERE first_choice = 1 AND first_visit = 0 GROUP BY choice ORDER BY choice
    `).all(),
    db.prepare(`
      SELECT COUNT(*) AS visitors FROM (
        SELECT visitor_id FROM pill_events
        GROUP BY visitor_id HAVING COUNT(DISTINCT choice) > 1
      )
    `).first(),
    db.prepare(`
      SELECT choice, ROUND(AVG(elapsed_ms)) AS avg_ms
      FROM pill_events WHERE elapsed_ms IS NOT NULL GROUP BY choice ORDER BY choice
    `).all(),
    db.prepare(`
      SELECT device, COUNT(*) AS clicks
      FROM pill_events WHERE device <> '' GROUP BY device ORDER BY clicks DESC
    `).all(),
    db.prepare(`
      SELECT country, COUNT(*) AS clicks
      FROM pill_events WHERE country <> '' GROUP BY country ORDER BY clicks DESC LIMIT 12
    `).all(),
    db.prepare(`
      SELECT referrer_host, COUNT(*) AS clicks
      FROM pill_events WHERE referrer_host <> '' GROUP BY referrer_host ORDER BY clicks DESC LIMIT 12
    `).all(),
    db.prepare(`
      SELECT utm_campaign, COUNT(*) AS clicks
      FROM pill_events WHERE utm_campaign <> '' GROUP BY utm_campaign ORDER BY clicks DESC LIMIT 12
    `).all(),
    db.prepare(`
      SELECT date(created_at) AS day, choice, COUNT(*) AS clicks
      FROM pill_events
      WHERE created_at >= datetime('now', '-30 days')
      GROUP BY day, choice ORDER BY day ASC, choice ASC
    `).all(),
  ]);

  return Response.json({
    generated_at: new Date().toISOString(),
    overall: overall.results,
    first_choice: firstChoice.results,
    first_time_first_choice: firstTimeFirstChoice.results,
    returning_first_choice: returningFirstChoice.results,
    switchers: Number(switchers?.visitors || 0),
    average_decision_ms: decisionTime.results,
    devices: devices.results,
    top_countries: countries.results,
    top_referrers: referrers.results,
    top_campaigns: campaigns.results,
    last_30_days: daily.results,
  }, {
    headers: {
      'Cache-Control': 'no-store',
      'X-Robots-Tag': 'noindex, nofollow',
    },
  });
}

function empty() {
  return new Response(null, {
    status: 204,
    headers: { 'Cache-Control': 'no-store' },
  });
}
