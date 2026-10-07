"""On-brand charts for blog posts, written as small, sharp SVG files.

The look (Ari, Oct 6, 2026): clean and modern like the site. Thin bars with
rounded ends on a soft track, one red highlight on black, white and greys,
values beside the bars, no boxes, no gridlines, and the same system font the
post text uses (San Francisco on Apple, Segoe UI on Windows, Roboto on Android).

Usage from a post-writing script:

    import sys; sys.path.insert(0, 'scripts')
    from chart import bar, line
    bar('public/images/blog/<slug>/sensor-sizes.svg',
        labels=['Super 35', 'Full frame', 'LF'], values=[24.9, 36, 36.7],
        unit='mm wide', highlight='Full frame', title='Sensor width')

Then in the post:  ![Sensor width by format](/images/blog/<slug>/sensor-sizes.svg)
                   *Sensor width in mm. Source: manufacturer specs.*

Only chart numbers you can source; put the source in the caption.
"""
from html import escape

INK, SOFT, MUTED, TRACK, BASE, REST, RED = "#000000", "#1c1c1c", "#6b6b70", "#f1f0ee", "#e2e0dc", "#a3a3a8", "#ff0000"
FONT = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
W = 720  # viewBox width; the image scales to the post column


def _svg(h, body, title, w=W):
    t = escape(title or "Chart")
    return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" width="{w}" height="{h}" '
            f'role="img" aria-label="{t}" font-family="{escape(FONT)}">'
            f'<rect width="{w}" height="{h}" fill="#ffffff"/>{body}</svg>')


def _title(title, max_chars=70):
    """Title in bold; wraps onto a second line when the chart is narrow."""
    if not title:
        return "", 0
    lines, cur = [], ""
    for word in title.split():
        if cur and len(cur) + 1 + len(word) > max_chars:
            lines.append(cur)
            cur = word
        else:
            cur = f"{cur} {word}".strip()
    lines.append(cur)
    out = "".join(f'<text x="0" y="{22 + i * 24}" font-size="18" font-weight="700" fill="{INK}" letter-spacing="-0.2">{escape(l)}</text>'
                  for i, l in enumerate(lines))
    return out, 52 + (len(lines) - 1) * 24


def _fmt(v, unit, fmt):
    sep = "" if unit in ("%", "x", "°") else " "
    return f"{fmt.format(v)}{sep}{unit}".strip()


def _col(x, y, w, h, r):
    """A column with rounded top corners and a square foot on the baseline."""
    r = min(r, w / 2, h)
    return (f'M{x:.1f},{y + h:.1f} V{y + r:.1f} Q{x:.1f},{y:.1f} {x + r:.1f},{y:.1f} '
            f'H{x + w - r:.1f} Q{x + w:.1f},{y:.1f} {x + w:.1f},{y + r:.1f} V{y + h:.1f} Z')


def bar(path, labels, values, unit="", highlight=None, title=None, horizontal=True, fmt="{:g}", scale=None):
    """Thin bars in grey, the one that matters in red, values printed beside them.

    Use horizontal (the default) for every comparison, years included: it fills
    the post column with no gaps between bars and reads well on phones. Vertical
    columns are compact and best avoided; use line() for a trend over many points.

    Horizontal: each row is a label and its value on one line, with a slim rounded
    bar on a soft full-width track underneath (the track is 100% for percentages,
    otherwise the largest value, or `scale`). Vertical: slim columns with rounded
    tops on a hairline baseline, value above and label below.
    """
    top = scale or (100 if unit == "%" and max(values) <= 100 else max(values))
    width = W if horizontal else max(300, len(labels) * 96)
    head, y0 = _title(title, 70 if horizontal else int(width / 10.5))
    parts = [head]
    if horizontal:
        row, bh = 50, 8
        for i, (l, v) in enumerate(zip(labels, values)):
            y = y0 + i * row
            hi = l == highlight
            c = RED if hi else REST
            w = max(bh, W * v / top)
            parts.append(f'<text x="0" y="{y + 14}" font-size="15" fill="{SOFT}" font-weight="{600 if hi else 400}">{escape(l)}</text>')
            parts.append(f'<text x="{W}" y="{y + 14}" font-size="15" text-anchor="end" fill="{INK}" font-weight="700">{escape(_fmt(v, unit, fmt))}</text>')
            parts.append(f'<rect x="0" y="{y + 24}" width="{W}" height="{bh}" rx="{bh / 2}" fill="{TRACK}"/>')
            parts.append(f'<rect x="0" y="{y + 24}" width="{w:.1f}" height="{bh}" rx="{bh / 2}" fill="{c}"/>')
        h = y0 + len(labels) * row - 12
    else:
        plot_h, cw = 150, 40
        base = y0 + 26 + plot_h
        slot = width / len(labels)
        for i, (l, v) in enumerate(zip(labels, values)):
            cx = slot * i + slot / 2
            bh = max(6, plot_h * v / top)
            hi = l == highlight
            parts.append(f'<path d="{_col(cx - cw / 2, base - bh, cw, bh, 6)}" fill="{RED if hi else REST}"/>')
            parts.append(f'<text x="{cx:.1f}" y="{base - bh - 10:.1f}" font-size="15" font-weight="700" text-anchor="middle" fill="{INK}">{escape(_fmt(v, unit, fmt))}</text>')
            parts.append(f'<text x="{cx:.1f}" y="{base + 24}" font-size="14" text-anchor="middle" fill="{SOFT if hi else MUTED}" font-weight="{600 if hi else 400}">{escape(l)}</text>')
        parts.append(f'<line x1="0" y1="{base + 0.5}" x2="{width}" y2="{base + 0.5}" stroke="{BASE}" stroke-width="1"/>')
        h = base + 34
    open(path, "w").write(_svg(h, "".join(parts), title, width))


def line(path, x, series, xlabel="", ylabel="", title=None, highlight=None, unit="", fmt="{:g}"):
    """series: {name: [y values]}. The highlighted series is red (2px), others grey;
    names and last values label the line ends, with a faint guide at the top and bottom of the range."""
    head, y0 = _title(title)
    parts = [head]
    ys_all = [v for ys in series.values() for v in ys]
    lo, hi_v = min(ys_all), max(ys_all)
    pad = (hi_v - lo) * 0.12 or 1
    lo, hi_v = lo - pad, hi_v + pad
    left, right, plot_h = 0, W - 150, 200
    top = y0 + 10
    px = lambda i: left + (right - left) * i / max(1, len(x) - 1)
    py = lambda v: top + plot_h * (1 - (v - lo) / (hi_v - lo))
    for gy in (top, top + plot_h):
        parts.append(f'<line x1="{left}" y1="{gy}" x2="{right}" y2="{gy}" stroke="{TRACK}" stroke-width="1"/>')
    for name, ys in series.items():
        hi = name == highlight or len(series) == 1
        c = RED if hi else REST
        d = " ".join(f'{"M" if i == 0 else "L"}{px(i):.1f},{py(v):.1f}' for i, v in enumerate(ys))
        parts.append(f'<path d="{d}" fill="none" stroke="{c}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>')
        ex, ey = px(len(ys) - 1), py(ys[-1])
        parts.append(f'<circle cx="{ex:.1f}" cy="{ey:.1f}" r="4.5" fill="{c}" stroke="#ffffff" stroke-width="2"/>')
        parts.append(f'<text x="{ex + 12:.1f}" y="{ey + 5:.1f}" font-size="14" fill="{SOFT if hi else MUTED}" font-weight="{700 if hi else 400}">{escape(name)} {escape(_fmt(ys[-1], unit, fmt))}</text>')
    for i, lab in enumerate(x):
        if i in (0, len(x) - 1) or len(x) <= 8:
            parts.append(f'<text x="{px(i):.1f}" y="{top + plot_h + 24}" font-size="13" text-anchor="{"start" if i == 0 else "end" if i == len(x) - 1 else "middle"}" fill="{MUTED}">{escape(str(lab))}</text>')
    h = top + plot_h + 36
    if xlabel:
        parts.append(f'<text x="{right}" y="{h}" font-size="13" text-anchor="end" fill="{MUTED}">{escape(xlabel)}</text>')
        h += 10
    open(path, "w").write(_svg(h, "".join(parts), title))
