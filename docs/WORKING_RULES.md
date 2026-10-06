# Working rules for thrillwave.com

How the Thrill Wave partners like site work done, and the standing decisions behind the site. Read this alongside `CLAUDE.md` and `docs/VOICE.md` before making changes. If this file and the live content disagree about what's on a page, trust the content. If they disagree about a rule, ask before changing it.

## Who asks for changes

Thrill Wave's three co-founders ask for changes in plain English:

- **Ari Everett** (Producer) leads the website work and owns this repo.
- **Tony Swann** (Director/DP) leads production, post and creative.
- **Chris Kuzman** (Strategy) leads strategy and the SITREP research.

All three can change this site. Only Ari works on the terminal site (`thrill-wave-website-terminal`), so terminal requests from Tony or Chris go to Ari.

## How to work

- Keep explanations non-technical, and say what changed on the live site.
- After every major change, share a link to the changed page.
- Run `npm run check` (0 errors) before every push, and look at the page at laptop and phone widths.
- Anything a partner should approve first goes to a branch, with the Cloudflare preview link. Changes to a partner's bio, byline or films always go to a preview first, so that person sees them before they go live.
- If two partners ask for conflicting changes, don't pick a side. Lay out both requests and let them decide together.
- Design and copy often go through several quick rounds in one sitting. Keep each change small, clear and easy to undo.
- Quality over quantity: keep sections and pages concise, and cut the weakest films rather than add more.
- Odd-numbered lists are preferred (for example, five services).
- Keep fast code and SEO/AEO in mind in every change.
- After new pages go live, remind the partners to resubmit the sitemap in Google Search Console.

## Standing rules

**Words and positioning**

1. Never call Thrill Wave an agency (marketing, ad or creative). It's a video production company. Agencies can be clients.
2. Never use "content" or "campaign". Avoid describing the work as "videos" or "commercials" where a better word fits: the films educate, tell stories and connect people.
3. Never mention AI in Thrill Wave's own process. A post that touches AI puts people first.
4. Never mention headcount or call Thrill Wave small, tiny, lean or scrappy. Say "we", "our founders", "our crew" or "our team".
5. No agency or big-business jargon, buzzwords or sales pitching. Chill and conversational, like sandwich.co, and nothing like lookstudios.co.
6. Every page reads like an elevator pitch that flows top to bottom toward reaching out, in full sentences, with a colon lead-in before every list, grid or set of films.
7. Use a documentary reporting approach and vocabulary (report, sources, facts, in their own words), but never name journalism, journalists or reporters.
8. Stories live against three backdrops: athletics, the arts and academics. Fields copy can lean on that.
9. Thrill Wave reads as dependable and true, never fleeting or mercenary. Avoid lines like "We go wherever the story is."
10. Copy shows complex things made simple, effective and beautiful.
11. Copy about who we serve says first that Thrill Wave serves everyone and their communities, then names the recurring ones.
12. Don't claim a founder leads every project.
13. No em dashes or spaced dashes, and no exclamation-point hype.

**Content and curation**

14. No client testimonials or quotes on the homepage. Client quotes appear sparingly, where they mean something, on case study, customer and field pages.
15. Show only the best work: a few strong films per field with no repeats, and clean stills, never thumbnails with text on them.
16. Images are always real photos. Never use AI-generated images, illustrations or busy stock. Our own set photos come first, then frames from our films, then Unsplash (free license only). On Unsplash, only use photos whose page shows a real camera model, and skip anything tagged or described as AI-generated, a render or an illustration.

**Services and pricing**

17. Five services (Story, Production, Editing, Photography, Rentals), six customer types and twelve fields, as listed in `content/home.json`. "Photography", not "Commercial photography".
18. Never ask for a client's budget first (the contact form has no budget or timeline fields). Pricing is top-down: what the film needs to do and the timeline, then a fair number. Price questions point people to message us, not to an FAQ.

**Design**

19. Buttons stay lean: labels of 3 to 5 words, never stretched to fill a column. Long lists of links are a slim line of text links separated by dots, not rows of buttons.
20. One accent color, pure red #FF0000, on black and white. Red fades into black, not white.
21. Paragraph text runs the full width of its column on every screen. Only headlines may be capped (`npm run check` enforces this).

**Terminal site**

22. Keep terminal.thrillwave.com out of search (noindexed) as an easter egg.
23. Games, their menus and popups never need scrolling.
24. If a visitor's phone is on silent, no sound plays anywhere on the terminal site.
