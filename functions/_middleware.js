// One address for the whole site: www.thrillwave.com -> thrillwave.com, same path, permanent (301).
// Wix used www for years, so Google still treats some www pages as the "real" ones (Search Console:
// "Google chose different canonical than user", Oct 11, 2026). This makes the redirect part of the site
// itself, so it holds even if a dashboard rule is missing. Every other request passes straight through.
export async function onRequest({ request, next }) {
  const url = new URL(request.url);
  if (url.hostname === 'www.thrillwave.com') {
    url.hostname = 'thrillwave.com';
    url.protocol = 'https:';
    return Response.redirect(url.toString(), 301);
  }
  return next();
}
