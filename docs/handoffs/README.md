# Partner handoffs and call notes

Everything the partners have decided about the site, in their own words, lives here: the handoff documents Chris wrote for Claude and the notes from the partner calls. Read the newest one before any site pass, and read this file first, because the documents don't all agree and this is where the current state of each decision is kept.

**Order of precedence:** the newest document wins where two disagree. Where a document and `docs/VOICE.md` or `docs/WORKING_RULES.md` disagree, the document is the decision and the rule file is what needs updating (say so in the report). Where the documents themselves still disagree, the partners decide, not Claude: list it as open below and ask.

## The documents

| Date | File | From | What it is |
|---|---|---|---|
| Oct 6, 2026 | [2026-10-06-website-handoff.md](2026-10-06-website-handoff.md) | Ari's Claude project | Full context of the site at launch: stack, every page, the rules to Oct 6, open items, references. Background; the newer files override its copy and rules. |
| Oct 8, 2026 | [2026-10-08-manifesto-site-pass-v0.md](2026-10-08-manifesto-site-pass-v0.md) | Chris | Manifesto v0.1 and the first copy pass: "There's no such thing as an audience", the proof pair, guardrails. |
| Oct 9, 2026 | [2026-10-09-manifesto-update.md](2026-10-09-manifesto-update.md) | Chris | Manifesto v0.2: the mechanism (feel something real, someone has to go and get it, the camera comes last), the no-actors rule, the boring-world line, the word rules, the end card. |
| Oct 9, 2026 | [2026-10-09-wbr-call-notes.md](2026-10-09-wbr-call-notes.md) | Partner call (Gemini notes, site parts only) | Hero workshop, "boring" out, 01 opens with who we are, What's in a name, red pill for contrarian takes, portfolio benchmarks (Scott Free, Reset). |
| Oct 9, 2026 | [2026-10-09-site-pass-v1-post-wbr.md](2026-10-09-site-pass-v1-post-wbr.md) | Chris | The pass that applies the Oct 9 call: exact copy for the hero, 01, 03, two manifesto beats and the name section; preview-only workflow. |
| Oct 14, 2026 | [2026-10-14-dev-day-call-notes.md](2026-10-14-dev-day-call-notes.md) | Partner call (Gemini notes, site parts only) | Cut the site to three to five core pages, one Work grid, three services, stills and short silent clips over copy, SITREP not a lead magnet, Tony on GitHub. |

The call notes are trimmed to the website, brand and workflow parts. Pricing, leads, insurance, admin and personal conversation were left out because this repo is public; the full notes are in the Google Drive transcripts the originals link to. Chris's chat instructions that weren't written up as documents (Oct 9: Your Voice, Your Power has aired; Tribal Nations is not a field; preview separate from the live repo; the red pill will lead to an external edgy blog) are recorded in `docs/WORKING_RULES.md` and in the log below.

## Decision log (as of Oct 15, 2026)

**Done on the live site**
- Hero: "Hi, welcome to Thrill Wave. We make films you feel." (Oct 9 call; live Oct 11).
- Section 01 opens by saying what we are, a video production company in Phoenix (Oct 9 call; live Oct 11, in Ari's words).
- "Boring" out of the homepage Our clients line and the manifesto heading, now "Blood, sweat and tears built this world." (Oct 9 call; live Oct 11).
- Three services: Story, Production, Editing. Photography and Rentals folded into Production (Tony's Oct 9 notes; agreed Oct 14; live Oct 13).
- Homepage shortened (Ari, Oct 16, 2026): Who we are, What we do, Our work (five featured films, one per row, each a still with a card: client, title, one line on what we made and what we did) and the client logos, Who we work with (client types as text links over the field tiles), Case studies, How we work (the five process steps with SITREP as step three). The separate Our clients, Fields, Process, SITREP, Intel and Team sections came off the homepage; every page stays in the menu. Same day: the film card sits beside the still (below on phones), five case studies on the homepage (Opendoor stays on its page), the homepage field tiles skip the hidden-from-search fields, and corners went down to about 3px.
- Work page is one grid of films with no field sections (Oct 9 and Oct 14 calls; live Oct 15). Addresses renamed to /work, /fields and /clients with redirects (Oct 11).
- Your Voice, Your Power has aired, so the case study's episode guide and screenings stand (Chris, Oct 9).
- The manifesto on About, v0.2 beats (Oct 9; live Oct 9), except where noted below.
- Word rules in `docs/VOICE.md`: our work is a "film", derivatives are "cuts", "video" only in "video production company", filmmakers never videographers, "people" not "audience", the "A Thrill Wave film" end card (Oct 9). Ari added "write real or true, not truth" (Oct 11).

**Decided, not yet on the live site**
- The site condenses to three to five core pages: Who we are, What we do, Our work (one visual grid), client and case study pages, Talk to us. The team section, Process and SITREP, and Intel with its newsletter come out of the main structure (Oct 14; Ari's job, "a later discussion" for the details). When pages go, every old address needs a 301, and `CLAUDE.md`'s list of public pages changes.
- Media mix on the site: about half stills, 40 percent three-to-five-second silent clips, 10 percent or less full films (Chris, Oct 14, agreed). Chris and Tony pick 10 to 20 films and upload them to Vimeo; Tony cuts a new sizzle reel; recognizable faces over generic stills; swap the upscaled faces that no longer look right (Oct 14).
- Copy gets the "Rick Rubin" treatment: subtract until only what's necessary stays (Tony, Oct 9; agreed Oct 14; Ari's job). `docs/VOICE.md` already has the matching rule: one idea, one home.
- The site is written for warm referral traffic, decision-makers confirming we can do the job, not cold leads playing with tools (Chris, Oct 14).
- SITREP is not a public lead-magnet widget; it's bundled into the core packages as the research behind the work. Its positioning and pricing are deferred (Oct 14). On the Process page, a clean loop of the real SITREP screen replaces the static image behind the film; on the SITREP page, a still replaces the moving header (Tony, Oct 9 and 14).
- Tribal Nations is not a field; the ITCA work sits under Government & Public Affairs and Education & research, tribal councils under the Nonprofits & public service client type (Chris, Oct 9). Built on the preview (https://ckuzman.github.io), waiting for a green light.
- Still from the Oct 9 pass and not on live: Dune out of the About manifesto; the What's in a name section on About (after Origin); "boring" out of the Businesses heading and the Builders & makers intro; "its own story is dull"; the FAQ answers that ask for a budget; the Decadence line "sells next year's festival"; the homepage SITREP title "we do our homework" beside "Nobody watches homework"; "casting" in the Production service. All small copy; see the preview branch history.
- Red pill: the button will eventually lead to a separate site or page holding the blog of edgy, contrarian takes, so the main site stays warm and plain (Oct 9 call; Chris, Oct 9). Until then it points at the terminal site. No build yet.
- Newsletter sign-up: hide it or connect it (Ari's Oct 11 note); it still shows and saves nothing.

**Open, and needs a partner decision**
- **Nonfiction and actors.** Chris's Oct 9 handoff made "no actors, we're a nonfiction house" a hard rule and a manifesto beat. Ari replaced it on Oct 11 ("storytellers across forms, not a nonfiction house"; the beat became "We find what's real"). On Oct 14 Ari argued for keeping scripted work and music videos in scope; Chris argued the site should show only the work we want to win, and cited a scripted, choreographed spot with actors as the kind of scripted work that fits. The live voice guide says Ari's version. Decide one line and the manifesto follows it.
- **Section 01's words.** Ari's live paragraph brings back "moves people one at a time, never as a crowd" and "the stories we tell today shape the world we leave tomorrow". Chris rejected the first framing on Oct 9 and his v1 handoff gives a different paragraph. Pick one.
- **Three backdrops or five arenas.** Chris's voice guide grouped fields as athletics, the arts and academics; Ari changed it to art, science, health, commerce and governance (Oct 11). Not discussed on a call.
- **Intel.** Tony wanted the name kept (Oct 9). On Oct 14 Ari proposed taking Intel out of the main structure until a newsletter exists. The Tuesday post task also didn't run on Oct 13; someone should check it's still on.
- **"Believe" in headlines.** The Oct 9 call ruled "believe" out of headlines because of the hero line; the About section is still titled "What we believe." and the homepage button says the same. Keep or rename.
- **Who pushes to the live site.** Chris's rule (Oct 9): all work goes to the separate preview and nothing reaches the live site without an explicit green light in chat. Ari's rule (Oct 11): all three partners push with their own Claude, fetch the latest first. Tony now has access (Oct 14). The partners should pick one, because copy written on either side keeps getting overwritten.
- **Older work on the site.** Tony would show one or two recent projects only; Chris would keep strong older work as stills or short clips because it has won work before; Ari agreed with a mix as long as it's recent and noteworthy (Oct 14). The 10-to-20-film shortlist settles it in practice.

**Guardrails that still hold**
- Decadence 2025 attendance is 50,000, an EDM Maniac estimate, credited that way. Relentless Beats has trusted us "for years" until Chris confirms the decade.
- The rise in ITCA WIC participation is a public USDA number, never a result the film is credited with.
- SITREP is research and a point of view on the site: never "proprietary platform", "open-source intelligence product" or "data-driven".
- No em dashes, no exclamation points, no "agency" for us, no AI in our process, no headcount, no "content" or "campaign", no budget-first talk, no homepage testimonials, no "journalism" or "reporter", no "boring" about anyone's work.

**Housekeeping still open from the Oct 6 handoff:** resubmit the sitemap after the page changes and submit it to Bing; tighten DMARC to quarantine (reminder was Oct 19); transfer the domain from Porkbun to Cloudflare in early December; gather real case study facts and quotes; rename `Ny-eNXzNrtA` on YouTube; compare traffic with the Wix baseline at the end of October.
