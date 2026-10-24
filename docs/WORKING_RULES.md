# Working rules for thrillwave.com

How the Thrill Wave partners like site work done, and the standing decisions behind the site. Read this alongside `CLAUDE.md` and `docs/VOICE.md` before making changes. If this file and the live content disagree about what's on a page, trust the content. If they disagree about a rule, ask before changing it.

**Decision log:** the partners' handoffs and call notes are in `docs/handoffs/`, and `docs/handoffs/README.md` tracks every site decision (done, decided but not built, or open). Read it before a site pass; where it's newer than this file, it wins.

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
- Chris's rule (Oct 9, 2026): all work goes to the separate preview copy of the site (github.com/ckuzman/ckuzman.github.io, shown at https://ckuzman.github.io; git remote `preview`), and nothing reaches the live site without a partner's explicit green light in chat. Ari's rule (Oct 11) is that all three partners push with their own Claude after fetching the latest `main`. The two haven't been reconciled; see the open items in `docs/handoffs/README.md`.
- Anything a partner should approve first goes to a branch, with the Cloudflare preview link. Changes to a partner's bio, byline or films always go to a preview first, so that person sees them before they go live.
- If two partners ask for conflicting changes, don't pick a side. Lay out both requests and let them decide together.
- Design and copy often go through several quick rounds in one sitting. Keep each change small, clear and easy to undo.
- All three partners update this site, often at the same time with their own Claude. Before starting, fetch the latest `main` and check for other branches and recent commits so you don't work on top of a stale copy or redo someone else's change. Touch only the pages, content and code the request needs: no drive-by cleanups, reformatting or "while I'm here" edits in shared files (`site.css`, `lib/`, `content/*.json`). Never touch, rebase, merge or delete someone else's branch, and never force-push. Right before pushing, fetch and rebase onto the latest `main` again; if a conflict touches someone else's work, stop and ask rather than choosing a side.
- Quality over quantity: keep sections and pages concise, and cut the weakest films rather than add more.
- Odd-numbered lists are preferred (for example, three services).
- Keep fast code and SEO/AEO in mind in every change.
- After new pages go live, remind the partners to resubmit the sitemap in Google Search Console.

## Standing rules

**Words and positioning**

1. Never call Thrill Wave an agency (marketing, ad or creative). It's a video production company. Agencies can be clients.
2. Never use "content" or "campaign". Everything we make is a "film", and its derivatives are "cuts" (vertical cuts, 30-second cuts, social cuts). "Video" describes our own work only in the category phrase "video production company" (titles, meta descriptions, the Google Business Profile, the first line of the homepage). We're filmmakers or our crew, never videographers (Oct 9, 2026). Full word rules are in `docs/VOICE.md`.
3. Never mention AI in Thrill Wave's own process. A post that touches AI puts people first.
4. Never mention headcount or call Thrill Wave small, tiny, lean or scrappy. Say "we", "our founders", "our crew" or "our team".
5. No agency or big-business jargon, buzzwords or sales pitching. Warm and conversational, like sandwich.co, and willing to take a side; nothing like lookstudios.co.
6. Every page reads like an elevator pitch that flows top to bottom toward reaching out, in full sentences, with a colon lead-in before every list, grid or set of films.
7. Use a documentary reporting approach and vocabulary (report, sources, facts, in their own words), but never name journalism, journalists or reporters.
8. Our fields span five arenas: art, science, health, commerce and governance (Oct 11, 2026; replaces athletics, the arts and academics). Fields copy can lean on that.
9. Thrill Wave reads as dependable and true, never fleeting or mercenary. Avoid lines like "We go wherever the story is."
10. Copy shows complex things made simple, effective and beautiful.
11. Copy about who we serve starts from the idea that every organization changes someone's life, and our job is to find whose (manifesto draft, Oct 8, 2026; this replaces the Oct 5 rule that the copy first says Thrill Wave serves everyone). Then it names the recurring ones.
12. Don't claim a founder leads every project.
13. No em dashes or spaced dashes, and no exclamation-point hype.

**Content and curation**

14. Thrill Wave is a house of great storytellers, not a nonfiction house (Ari, Oct 11, 2026). We make artful, meaningful work in many forms: documentaries, short and feature films, music videos, editorial, education, awareness, news and PR, and films for products and services that do some good. Some of it is fiction or scripted, with an artful angle on human experience and expression. Real people and real stories are the baseline for why we make what we make, not a limit on the form, so never call Thrill Wave "nonfiction only" or promise "no actors" or "no scripted scenes" across all our work. When copy talks about emotion, it shows how we find it (listening, research, craft) rather than promising to manufacture it. Every film ends on a card that reads "A Thrill Wave film" (Chris, Oct 9, 2026).
15. No client testimonials or quotes on the homepage. Client quotes appear sparingly, where they mean something, on case study, customer and field pages.
16. Show only the best work: a few strong films per field with no repeats, and clean stills, never thumbnails with text on them.
17. Images are always real photos. Never use AI-generated images, illustrations or busy stock. Our own set photos come first, then frames from our films, then Unsplash (free license only). On Unsplash, only use photos whose page shows a real camera model, and skip anything tagged or described as AI-generated, a render or an illustration.

**Services and pricing**

18. Three services (Story, Production, Editing; Photography and Rentals folded into Production on Oct 13, 2026: stills are part of the shoot, and our kit and crew can step in wherever a client needs a hand), six customer types and eleven fields (Tribal Nations came out on Oct 14, 2026), as listed in `content/home.json`. "Photography", not "Commercial photography".
19. Never ask for a client's budget first (the contact form has no budget or timeline fields). Pricing is top-down: what the film needs to do and the timeline, then a fair number. Price questions point people to message us, not to an FAQ.

**Design**

20. Buttons stay lean: labels of 3 to 5 words, never stretched to fill a column. Long lists of links are a slim line of text links separated by dots, not rows of buttons.
21. One accent color, pure red #FF0000, on black and white. Red fades into black, not white.
22. Paragraph text runs the full width of its column on every screen. Only headlines may be capped (`npm run check` enforces this).
22a. The homepage is all black (Ari, Oct 13, 2026), with the same gap between every section after the hero, and each section should fit about one screen on a laptop or phone. Paragraphs on black use the off-white `--on-dark-text`; headings stay pure white.
22b. Homepage carousels and step-throughs share one pattern (Oct 13, 2026): thin "story bars" above them with a red highlight that glides between positions (tap, click or slide along the bars to move), plain shadowed chevrons with no circle, swipe on phones and click-and-drag on laptops. Every photo tile on black gets the same 10% white hairline as the Fields tiles. Corners are small (about 3px on tiles; Oct 16, 2026, halved again from the Oct 13 5px).

**Decisions from Chris's Oct 9, 2026 chat (not in a document)**

- *Your Voice, Your Power* has aired everywhere: the case study's episode guide and screenings stand. Still claim nothing about viewers or results we haven't sourced.
- Tribal Nations is not a field; it's who we work with. The ITCA work belongs under Government & Public Affairs and Education & research, and tribal councils under the Nonprofits & public service client type. Built on the preview, waiting for a green light.
- The blog stays named Intel (Tony, Oct 9). Ari proposed on Oct 14 that it leaves the main site structure until a newsletter exists; open.
- The homepage's red pill button will eventually lead to a separate site or page holding the blog of edgy, contrarian takes, so the main site stays warm and plain. Until then it points at terminal.thrillwave.com; don't repurpose it.

**Decisions from Chris's Oct 21, 2026 homepage brief (`docs/handoffs/2026-10-21-homepage-copy-brief.md`)**

- The homepage copy follows the brief. On the live site the brief's words sit in Ari's existing layout (the hero, section 01, the About lede and manifesto, the closing block; Oct 24, 2026); the brief's full nine-block homepage is on the preview and comes to live with Ari's design pass and Tony's reel. The copy is frozen until mid-January 2027 (add a client quote, add a caption, fix a fact; nothing else). The position: "We make films about hard subjects and hard places for organizations that can't afford to get it wrong." The brief's writing rules apply on that page and win over rules 4, 6, 9 and 15 above where they differ ("Three partners" is on the page, no colon lead-ins, "We work anywhere" in the hero, client quotes on the homepage once two exist). Research is "homework" on the homepage; SITREP isn't named there. The brief is for the homepage only: the rest of the site stays, with its menu (Chris, in chat, Oct 21). Wix is out; the site is built here.

**Terminal site**

23. Keep terminal.thrillwave.com out of search (noindexed) as an easter egg.
24. Games, their menus and popups never need scrolling.
25. If a visitor's phone is on silent, no sound plays anywhere on the terminal site.
