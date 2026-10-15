# Thrill Wave: manifesto site pass, v0

Handoff from Chris Kuzman, Oct 8, 2026. For Claude Code working in `arieverett/thrill-wave-website-wix-replicate`.

## What this is

Chris owns positioning and copy for Thrill Wave. He has started a company manifesto that he'll negotiate with Ari and Tony over the next few weeks. This pass puts a first version of it on the live site to see how it reads in place. Treat it as a draft that will change. Nothing on the current site is precious.

Scope is copy and positioning only. Ari owns design and Tony owns film curation, so leave those alone (see "Don't touch").

Pushing to `main` (live) is approved by Chris for this pass. Before you change anything, tag the current state so it's one command to roll back:

```bash
git tag pre-manifesto-v0 && git push origin pre-manifesto-v0
```

## Read first

1. `CLAUDE.md`, `docs/VOICE.md`, `docs/AUTO_POST.md`.
2. This file. Where it conflicts with VOICE.md or older notes, this file wins, and you'll update VOICE.md to match (section 6).

## 1. The position, in one page

**The hard truth we lead with:** there's no such thing as an audience. There are only people. Marketing thinks in segments, demographics and personas, and no one has ever been moved as a demographic. People are moved one at a time, by someone they recognize. So we make each film for one person, and the crowd recognizes itself.

**The method:** every organization changes someone's life. A tribal council, a bank, a festival, a clinic: somewhere the work lands on a person. Before we film, we find out whose life it is and what it means to them (that's what SITREP is for). Then we argue for the version of the film worth making, we let people speak for themselves, and we put our name on it.

**The ethic:** there's no neutral film. Every cut is a choice about what to keep and what to leave out, and we'd rather be honest about our point of view than pretend we don't have one. We take a side and say whose. We don't lecture, we don't trick anyone and we don't claim what we can't show. The people in the frame should recognize themselves.

**The promise to clients ("the Thrill Wave treatment"):** you don't hire a few people with cameras, you get a way of working. Every project has a safe version and a good version, and we'll push for the good one and tell you why. We take every project seriously, an aftermovie as much as a docuseries, because to the person it's for, it matters just as much. We don't put our name on anything we don't mean.

**The proof (always as a pair):**
- *Your Voice, Your Power* (ITCA Native Vote): briefed as an educational series on how government works. We argued that nobody watches homework, and ITCA trusted us. Each of the ten episodes follows a person and a human theme instead of a civics lesson.
- *Decadence* aftermovies (Relentless Beats): some fans buy tickets months ahead and build their year around two nights at Phoenix Raceway. We cut the aftermovie for them, not for a demographic. Relentless Beats has trusted us with these for years and barely needs to brief us now.
- Together they show the treatment is an approach, not a genre: the most serious film and the most fun one both start from one person.

## 2. Copy changes, page by page

Exact copy is given where it matters. Elsewhere, write to the position above in the site voice. Keep every existing rule in VOICE.md except the ones section 6 changes.

### Home (`src/pages/index.html`, `content/home.json`)

- **Meta description:** "Thrill Wave is a video production company in Phoenix. We make films for people, not audiences, and we sign every one." (check it stays under about 140 characters)
- **Hero typewriter line:** "Hi, welcome to Thrill Wave. We make films for people, not audiences." Keep the two pills and everything else in the hero as is. If the new line breaks the typing animation's layout at phone width, fall back to: "Hi, welcome to Thrill Wave. We make films for people."
- **01 Who we are.** Title: "There's no such thing as an audience." Body:

  > There are only people. Every brief we read names a target audience, and no one in it has ever been moved as a demographic. People are moved one at a time, by someone they recognize. So we make every film for one person, and the crowd recognizes itself. We're a video production company in Phoenix, and that's how we work on everything, from a docuseries to a festival aftermovie. Here's what it looks like:

  The reel stays where it is. Button: "More about us".
- **Who we serve intro:** "Every organization changes someone's life. A clinic, a law firm, a tribal council, a festival: somewhere, the work lands on a person. Our job is to find out whose life it is and put them on screen. Here's who we work with most:"
- **Fields intro:** keep the athletics, arts and academics idea, and end on the person: the setting changes, and there's always one person at the center of it. Close with a colon lead-in to the carousel.
- **Process section ("How we work" promises):** rewrite the three promises to match the treatment: find the person first; argue for the good version; put our name on it. One full sentence each.
- **Team section** title "Your friendly neighborhood filmmakers." stays.
- Leave the other sections' copy unless a line now contradicts the position.

### About (`src/pages/about.html`)

- Replace the "What guides us" section (mission, vision, charter) with a new section titled **"What we believe."** Keep the existing values section; put the new one directly before it so the page reads origin, team, beliefs, values.
- Use the manifesto text in section 3 as written. Ask Chris before trimming it.
- Keep "We protect the people we film" from the old charter: fold it into the last beat if it fits, or keep it as a line under the manifesto.
- Hero lede: rewrite toward the position in one or two sentences; keep "Made of people, for people." as the headline (it already fits).

### Process (`src/pages/process.html`, `content/home.json` process steps)

- Retitle the steps section "The Thrill Wave treatment." Keep the five step names (Idea, Discovery, SITREP, Production, Completion) and rewrite each line to show the stance at that stage:
  - **Idea:** bring us a brief, a hunch or a blank page, and we'll read it for what it's really asking.
  - **Discovery:** we find out whose life your work touches and what it means to them.
  - **SITREP:** we research your world until we know the person the story happens to, then bring you a point of view.
  - **Production:** we put them on screen, let them speak for themselves and shoot it like it matters.
  - **Completion:** we cut it for that one person, then plan where it will find everyone else like them.
- Update both the short (homepage) and long (Process page) versions of each step.

### SITREP (`src/pages/sitrep.html`)

- Light touch. Add the question SITREP answers near the top, in a full sentence: every SITREP starts with one question, whose life does this change?
- Leave the three ITCA proofs and the demo as they are.

### Shared ending (`{{start_project}}`)

- Text: "Tell us what you're working on, even if it's only a hunch so far. We'll find out whose story it really is, and then we'll help you tell it. The easiest way to start is to write to us here:" Title and button stay.

### Intel post: "Understanding Your Target Audience and How to Reach It"

- Keep the title, slug, date, author and categories. Rewrite the body to argue the opposite of what the title promises: you've been told to understand your target audience, and the question is wrong. Understand one person.
- Shape: open with the standard advice and why it fails; then a section on why no one is moved as a segment; then research the world, film the person (research finds what's particular, like the WIC finding that the barrier was trust; the film speaks to what's universal, mothers talking to mothers); then the aftermovie example; then a short close with one soft line to `/contact`.
- Embed `{{youtube:QlP7wPaFcVU}}` (Dear Mom) and `{{youtube:pDk121-TCto}}` (Decadence Arizona 2025). Follow AUTO_POST.md for length (700 to 1,200 words), visuals and sources. Use only facts already on the site or verified with a source.

### Not in this pass

Services, Who we serve and field breakout pages, case studies, Work, Contact, FAQ and bios. If you notice a line there that now contradicts the position, list it in your report instead of changing it.

## 3. Manifesto text for About (v0.1, draft)

> **There's no such thing as an audience.** There are only people. Every brief we've read describes a target audience, and no one in a target audience has ever been moved as one. People are moved one at a time, by someone they recognize. So we make every film for one person, and the crowd recognizes itself.
>
> **Every organization changes someone's life.** A tribal council, a bank, a festival, a clinic: somewhere, the work lands on a person. Before we film, we find out whose life it is and what it means to them. Then we put them on screen and let them speak for themselves.
>
> **Nobody watches homework.** Most films that institutions make set out to explain something, and most go unwatched. When a brief asks us to teach, we look for the person the lesson happened to. A series on how government works became ten episodes about the people government touches, and our client trusted us to make it that way.
>
> **We take a side, and we tell you whose.** There's no such thing as a neutral film. Every cut is a choice about what stays and what goes, and a film that claims no point of view is hiding its author. We'd rather show you ours.
>
> **We'll argue for the good version.** Every project has a safe version and a good version. The safe one does what was asked. The good one does what was needed. We'll push for the good one every time, and we'll tell you why. If you want exactly what you asked for, we're probably the wrong crew.
>
> **The best night of someone's year counts too.** Some people wait all year for one night at a festival. When we cut the aftermovie, we cut it for them, with the same care we give our most serious documentary, because to them it matters just as much.
>
> **Our name goes on it.** You don't hire a few people with cameras. You get the Thrill Wave treatment: people who care what happens after the film goes out. We don't put our name on anything we don't mean.

## 4. Guardrails for this pass

- **Don't touch:** CSS, layout, components, nav, the homepage pills, films and film order, `content/portfolio.json`, partner bios, pricing copy, the contact form, structured data (beyond meta descriptions you change), the terminal site and the pill analytics. No new pages.
- **People and facts:** don't name Natalia or describe individual episodes of *Your Voice, Your Power* (no Attorney General or trafficking details) until ITCA okays it. The series hasn't aired, so claim nothing about its audience or results. Use 50,000 for Decadence 2025 attendance (the sourced number). Say Relentless Beats has trusted us "for years," not "for over a decade," unless Chris confirms the longer figure (the site says Thrill Wave was founded in 2018).
- **Word choice:** avoid "audience" except where the copy is arguing against it; say "people." Keep the existing bans: no em dashes or spaced dashes, no "agency" for Thrill Wave, no AI in our process, no headcount or "small", no buzzwords, no "content" or "campaign", no budget-first talk, no homepage testimonials, no "journalism" or "reporter".
- **Voice:** still warm, plain and conversational, with full sentences and colon lead-ins before lists. What's new is that the copy takes sides. Say the bold thing plainly and stop; no hype and no exclamation points.

## 5. Check and publish

1. `npm run check`: 0 errors, and no new warnings for titles or descriptions you changed.
2. Grep your changes for em dashes, spaced dashes and the word "audience".
3. Look at Home, About and Process at laptop and phone widths, especially the hero typewriter and the 01 title.
4. Commit in small, clear steps (one per page) so any single change can be reverted, and push to `main`.

## 6. Update the docs so future work follows the new position

- **`docs/VOICE.md`:** add a short "What we believe" section near the top that summarizes section 1. Add "people" and "person" to "Words we like" and a line saying to avoid "audience." Change "Chill, warm, plain and confident" to "Warm, plain and confident, and willing to take a side." Remove or rewrite any rule that says copy must lead with Thrill Wave serving everyone; the new framing is that every organization changes someone's life and we find whose.
- **`docs/MIGRATION_NOTES.md`:** add a dated line for this pass and the rollback tag.
- The weekly Intel post task reads VOICE.md every Tuesday, so these edits shape the next post. Keep them consistent with section 1.

## 7. Report back

Send Chris:
- a link to every changed page (Home, About, Process, SITREP, the rewritten post);
- a short before and after for each headline or section you rewrote;
- any line elsewhere on the site that now contradicts the position;
- anything you couldn't do within these guardrails, and why.
