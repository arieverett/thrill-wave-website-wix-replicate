# Thrill Wave: site pass v1 (post-WBR, Oct 9, 2026)

Handoff from Chris Kuzman for Claude Code working in `arieverett/thrill-wave-website-wix-replicate`. This follows `thrill-wave-manifesto-site-pass-v0.md` and the Oct 9 update note. Where this file disagrees with either, this file wins.

## What this is

The three partners reviewed the live site in the Oct 9 weekly meeting and made decisions about the homepage hero, section 01, the word "boring", the About page and where contrarian copy lives. This pass applies those decisions. It is copy only. Design, nav, CSS, film curation, bios, pricing, the contact form and structured data (beyond the meta descriptions named below) stay as they are.

## Workflow: preview branch only

The last pass published draft copy straight to the live site, which the partners didn't want. This time:

1. Branch from `main`: `copy/post-wbr-oct-9`.
2. Make every change on that branch and push the branch. Cloudflare Pages gives it a preview URL (`*.thrill-wave-wix.pages.dev`).
3. Do not merge or push to `main`. A partner will say "ship it" in chat when they've looked at the preview.
4. Report back with the preview URL and the before/after list in section 8.

## 1. Decisions from the meeting

- Hero line is "We make films you feel." No contrarian line in the hero. No rotating verbs.
- Section 01 opens with the plain identity statement (video production company in Phoenix, Arizona, makes films for people and organizations), then the point of view. Shorter than what's live.
- The word "boring" comes out everywhere on the site.
- The Dune / Paul Atreides reference comes out everywhere.
- The company name stays, and About gets a "What's in a name" section.
- Contrarian and edgy takes will live behind the red pill (the terminal site), not on the main site. No site build for that yet; just keep the main site's tone warm and plain.
- "Believe" stays out of headlines (it can read political or religious out of context). Fine inside full sentences where the meaning is clear.

## 2. Homepage (`src/pages/index.html`, `content/home.json`)

**Meta description:** "Thrill Wave is a video production company in Phoenix. We make films you feel: real people saying true things, with nothing made up." (keep under about 140 characters)

**Hero typewriter line:** `Hi, welcome to Thrill Wave. We make films you feel.`

**01 Who we are.** Title stays: "There's no such thing as an audience." Body replaces the current paragraph in full:

> We're a video production company in Phoenix, Arizona, and we make films for people and organizations. Not for audiences, because there's no such thing. There are only people, and nothing changes anyone unless they feel something real. So our films are real people saying true things, with no narration, no actors and nothing telling you what to feel. Getting the true thing out of someone is the hard part, and it's the work we do best. Here's some of what we've made:

Reel and "More about us" button stay.

**03 Who we serve.** Intro replaces the current paragraph:

> Blood, sweat and tears built this world. Every organization assumes its own story is dull, from the payments company to the construction crew to the law firm down the hall. Nobody's is. They just haven't let anyone look, and looking is our job. Here's who we work with most:

Businesses tile line (in `content/home.json` > `audiences`): "We find the story every business assumes isn't worth telling, from the bakery down the street to a national company."

Everything else on the homepage stays as it is now, including the Process section ("The camera comes last" in step 04 and the three "How we work" promises).

## 3. About (`src/pages/about.html`)

**Manifesto, first beat.** Keep the heading "There's no such thing as an audience." Replace the body with:

> There are only people, and people take in a story in remarkably similar ways. You don't need to have lived a story to feel it. It just has to be true about being human. So we don't make films for demographics. We make them for the part of people that's the same in everyone.

**Manifesto, boring-world beat.** Heading becomes "Blood, sweat and tears built this world." Body stays as live, except change "Every organization assumes its story is dull" to "Every organization assumes its own story is dull."

**New section: What's in a name.** Add it directly after Origin and before "Who we are." Remove the name sentence that's currently at the end of the Origin paragraph ("Even the name is the point..."), since it moves here. Kicker "Our name", title "What's in a name.", body:

> We've been asked whether "Thrill Wave" fits a company that makes serious documentaries, and for a while we asked ourselves. It fits. A thrill wave is what goes through you when something true hits, and "thrill" comes from an old word meaning to pierce. If we were in the business of logic, we'd have called it Logic Wave. We're in the business of what people feel, and the name says so.

Everything else on About stays, including "The camera is the easy part" and the consent line at the end of the manifesto. List both in the report (section 8) so the partners can confirm them.

## 4. Site-wide sweep

- Grep every page, `content/*.json`, `content/posts/*.md` and `lib/` for "boring", "Dune", "Atreides" and "Arrakis". Remove or rewrite each hit in the voice. The homepage and About hits are covered above; there may be others on Who we serve, the Businesses customer page, or recent posts.
- Grep for "audience" outside the two places that argue against the word (the 01 title and the manifesto's first beat). Replace with "people" where it's describing who a film is for. Leave it in the blog post title "Understanding Your Target Audience and How to Reach It".
- Grep the changed files for em dashes, spaced dashes and exclamation points.

## 5. Word rules (now standing, and they go into docs/VOICE.md)

- "video production company" is the category phrase. Keep it in titles, meta descriptions and the first line of 01. It's the only place "video" describes our own work.
- Everything we author is a "film": the docuseries, the aftermovie, the team film, the explainer.
- Derivatives are "cuts": vertical cuts, 30-second cuts, social cuts. Never stretch "film" over a 9:16 clip.
- "Filmmakers" or "our crew", never "videographers".
- "People", not "audience", except where the copy argues against the word.
- Every finished film carries an end card reading "A Thrill Wave film". Record this in VOICE.md as a delivery rule even though the site doesn't render it.
- Standing bans stay: no em dashes, no "agency" for Thrill Wave, no AI in our process, no headcount or "small", no buzzwords, no "content" or "campaign", no budget-first talk, no homepage testimonials, no "journalism" or "reporter", no exclamation points.

## 6. Facts and people

- Don't name Natalia or describe individual episodes of *Your Voice, Your Power* until ITCA okays it. The series hasn't aired; make no claims about its audience or results.
- Decadence 2025 attendance is 50,000 (sourced). Relentless Beats has trusted us "for years", not "for over a decade", until Chris confirms.
- The WIC participation rise after Dear Mom is a public USDA number, not a result ITCA has attributed to the film. Keep the wording careful.
- SITREP is described on the site as research and a point of view. Never "open-source intelligence product", "proprietary platform" or "data-driven".

## 7. docs/VOICE.md

- Add the word rules from section 5.
- In "How it sounds", make sure the first-line principle is written down: the hero and the first sentence of any page say plainly what we are; the point of view comes after. Contrarian copy belongs further down the page or behind the red pill, never in a hero.
- Add "Don't use 'boring' about any organization or its work" to the Never list.
- The Tuesday Intel post task reads VOICE.md, so keep these edits consistent with the rest of the file.

## 8. Check and report

1. `npm run check` at 0 errors, no new title or description warnings.
2. Look at Home and About at laptop and phone widths, especially the hero typewriter and the new About section.
3. Commit page by page on the branch. Push the branch only.
4. Report to Chris with: the preview URL; a short before/after for the hero, 01, 03, the two manifesto beats and the new name section; every "boring", "Dune" and "audience" hit you changed and where; the two About lines flagged for partner confirmation ("The camera is the easy part" / "Anyone can buy a cinema camera now", and "We ask for consent first"); and anything you couldn't do within these rules.
