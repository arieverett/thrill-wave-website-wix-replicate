# Thrill Wave and thrillwave.com: full context for a new Claude project

Compiled on Oct 6, 2026 from the "Thrill Wave" project in Ari's personal Claude account. It's meant to be the first document in a new project in the Thrill Wave team account, so work on the website can pick up exactly where it left off.

---

## 0. Read this first (notes for Claude)

**What this covers:** everything about Thrill Wave's website work: thrillwave.com, the hidden terminal site at terminal.thrillwave.com, the red/blue pill analytics, the brand voice, and every standing decision made between the Wix migration (Sept 27, 2026) and today (Oct 6, 2026), plus the background those decisions rest on.

**Who you're working with:** Thrill Wave's three co-founders, Ari Everett, Tony Swann and Chris Kuzman. Ari leads the website work, and all three ask Claude for site changes in plain English, so keep explanations non-technical.

**Source of truth, in order:**
1. The live repo `arieverett/thrill-wave-website-wix-replicate`, especially `CLAUDE.md`, `docs/VOICE.md`, `docs/AUTO_POST.md`, `docs/MIGRATION_NOTES.md` and `content/*.json`. It changes every week (a new blog post goes up every Tuesday), so read it before making changes.
2. The standing rules in sections 4 and 5 of this file, set during the website work.
3. Thrill Wave planning documents from February to April 2026. They were written before the fall 2026 rebrand, so use them as background only (see 5.7).

If this file and the repo disagree about what's on a page, trust the repo. If they disagree about a rule or preference, ask before changing it.

**How this file was built:** from the old project's saved notes and documents, the four website repos (including all 333 commits of the main site's history), the Thrill Wave Google Drive, the October marketing plan doc and the account's scheduled tasks. The old chat transcripts themselves couldn't be opened directly, but the decisions from them were saved as notes and in the repo, and they're all captured here.

**Left out on purpose:** anything that isn't about the website, including personal details and individual leads' contact details.

---

## 1. Short version to paste into the new project's instructions

```
You're helping the Thrill Wave co-founders (Ari Everett, Tony Swann and Chris Kuzman) run and improve thrillwave.com, the site of their video production company in Phoenix, AZ. Read the "Thrill-Wave-Website-Handoff-2026-10-06.md" document in this project first.

- The live site is the GitHub repo arieverett/thrill-wave-website-wix-replicate (static HTML/CSS/JS built by build.mjs, hosted on Cloudflare Pages; a push to main goes live). Read its CLAUDE.md, docs/VOICE.md and docs/AUTO_POST.md before changing anything.
- The partners make changes by asking in plain English, so keep explanations non-technical. Run `npm run check` (0 errors) before every push, check laptop and phone widths, and after every major change share a link to the changed page.
- Voice: a production company that cares about story, craft, tech and most of all people. Chill, warm, plain, conversational, full sentences, a colon lead-in before every list. Brief like sandwich.co, nothing like lookstudios.co.
- Never: call Thrill Wave an agency; mention AI in our process; mention headcount or call us small; use buzzwords, "content" or "campaign"; use em dashes; ask for a client's budget first; put testimonials on the homepage; name journalism or reporters (the approach is welcome, the words aren't).
- Brand: black and white with one pure red accent (#FF0000), League Spartan headings, Montserrat body. Buttons are lean pills with labels of 3 to 5 words at most.
- Fast code and SEO/AEO matter in everything. Quality over quantity.
```

---

## 2. Quick reference

| Item | Detail |
|---|---|
| Company | Thrill Wave LLC, a video production company in Phoenix, Arizona, founded 2018 |
| Website | https://thrillwave.com (the canonical address, without www; www.thrillwave.com 301s to it) |
| Hidden easter egg site | https://terminal.thrillwave.com (noindexed; reached from the homepage's "Take the red pill" button) |
| Private dashboard | https://thrillwave.com/rabbithole (unlisted, behind a key screen) |
| Phone | (480) 766-9585, call or text. 480-269-7155 is outdated; never use it |
| Email | hi@thrillwave.com (a Google Group that reaches all three partners). admin@thrillwave.com is also a group. Ari's own address: ari@thrillwave.com |
| Mailing address | Thrill Wave's mail goes to a PO box. It's a mailbox, not an office, so it never goes on the website (decided Sept 30, 2026) |
| Booking | Calendly "30 Minute Video Consult" hosted by Chris: https://calendly.com/christhrillwave/30-minute-meeting-clone (embedded on /contact) |
| Main site repo | https://github.com/arieverett/thrill-wave-website-wix-replicate (public; Ari has noted making it private) |
| Terminal site repo | https://github.com/arieverett/thrill-wave-website-terminal (public) |
| Pill analytics repo | https://github.com/arieverett/thrill-wave-website-pill-analytics (public on purpose, as a standalone showcase of the feature) |
| Hosting | Cloudflare Pages (the Pages flow, not Workers). Build `npm run build`, output `dist`, Node 22 |
| Domain | Registered at Porkbun with auto-renew deliberately off (expires May 2028), because Ari plans to transfer it to Cloudflare about 60 days after Oct 1, 2026. DNS is on Cloudflare; DNSSEC is on |
| Email platform | Google Workspace. SPF, DKIM and DMARC (p=none) set up Sept 28, 2026 |
| Analytics | Cloudflare Web Analytics (on since Sept 28), Google Search Console domain property (verified Sept 28; sitemap submitted Oct 1), first-party pill analytics in Cloudflare D1 |
| Leads | The /contact form posts to `/api/contact`, which forwards to a Google Apps Script that emails hi@thrillwave.com and adds a row to the "Website Leads" Google Sheet in the Thrill Wave shared drive |
| Socials on the site | Instagram, TikTok and X: @thrillwave_. YouTube: @Thrillwave. LinkedIn: /company/thrillwave. Vimeo (vimeo.com/thrillwave) and Facebook (/thrillwaveco) are in the data but hidden on the site |
| Listings | Google Business Profile (the site's structured data matches its service area and hours, Mon to Fri 9 to 5) and Thumbtack (the source of several client quotes on the site) |
| Scheduled tasks (old account) | Weekly Intel post every Tuesday at 8:53am Phoenix time; a one-time DMARC reminder on Oct 19, 2026 (details in sections 8 and 17) |

---

## 3. People and roles

As they appear on the site (About page order: Chris, Tony, Ari; the homepage team block uses the same order):

| Person | On the site | What they do |
|---|---|---|
| Chris Kuzman | "Founder + Strategy"; "Co-Founder, Strategy" | Leads strategy and the SITREP research; spends his days with communications leaders; writes about the craft and the industry; hosts the Calendly consult. He built the SITREP software earlier in 2026 |
| Tony Swann | "Founder + Director"; "Co-Founder, Director/DP" | Director and director of photography; carries every film from first frame to final cut; leads post-production and creative; runs drones, cable cam and high-speed rigs; made the TEC "Case Study Using SITREP" breakdown |
| Ari Everett | "Founder + Producer"; "Co-Founder, Producer/Manager" | Producer: keeps productions and operations running smoothly; builds the website with Claude |

Current site bios (content/site.json), in the site's order. Keep all three the same length, matched by character count (Oct 5, 2026):

- **Chris:** "Chris leads our strategy and our SITREP research, digging into each client's craft, peers and industry before we shoot. He spends his days with communications leaders working through hard problems, and he writes about the craft, the people and the industry. He asks the questions that get to the heart of things, checks the answers against the facts and turns what he finds into the story worth telling."
- **Tony:** "Tony is our director and director of photography, and he carries every film from the first frame to the final cut. He leads with a quiet humility: out front with his boots on the ground when it counts, and a step back when it's someone else's turn to shine. Crews respect him for it, and he always finds the shot. Add a sense of style that's all his own, and you have a director worth watching."
- **Ari:** "Ari spent 12+ years running finance and operations at the biggest companies in the world, including Coca-Cola and Amazon. He runs Thrill Wave the way the best of them run theirs, leading the people, processes and systems behind every film so what ends up on screen is incredible. A lifelong love of tech, art and building great companies is why he helped create Thrill Wave, where all three meet."

The site is built on all three founders' work: most of the films come from Tony's directing and camera work, the SITREP pages show the research tool Chris built, and Ari rebuilt the site itself with Claude.

Team photos: /images/team/ari-everett.webp, tony-swann.webp, chris-kuzman.webp. There are no team photos on the Contact page (Oct 3, 2026).

---

## 4. How to work on the site

- **After every major change to the website, give a link to the changed page** (a standing preference).
- Keep explanations non-technical and say what changed on the live site.
- `npm run check` must report 0 errors before any push. Look at the page at laptop and phone widths.
- For anything the partners should approve first, push to a branch and share the Cloudflare preview URL.
- Changes to a partner's bio, byline or films go to a branch preview first, so that person sees them before they go live.
- If two partners ask for conflicting changes, don't pick a side: lay out both requests and let them decide together.
- Design and copy often go through several quick rounds in one sitting (the homepage hero and the phone menu bar each went through 10+ versions in a morning). Make each change small, clear and easy to undo.
- Quality over quantity: keep sections and pages concise, and cut the weakest films rather than add more.
- Ari likes odd-numbered lists (for example, five services).
- Stay mindful of fast code and SEO/AEO in every change.
- Blog images: simple, uncluttered covers with one real subject (like the vertical anamorphic post's lens on a table). Never AI-generated images. Thrill Wave's own team and set photos come first; otherwise real stock.
- Voice and length reference: Sandwich (sandwich.co), "just a little more" than Sandwich. LOOK Studios is the example of too much.
- When Ari asks you to remember something for later, it usually becomes a line in `docs/MIGRATION_NOTES.md` or a scheduled reminder as well.

---

## 5. Positioning and brand (current, October 2026)

### 5.1 Who Thrill Wave is now

- A **production company** in Phoenix. Call it a "video production company", "production company" or "creative". Never a "marketing agency", "ad agency" or "creative agency". Agencies can be clients.
- **The 2026 rebrand** (alongside the new website): away from being a general marketing and ad agency and toward high-quality, longer-form work: films, episodic docs and docuseries and long-form pieces, made as artists, creatives, directors and producers with strong business sense. Thrill Wave still makes flashy short-form work too.
- **What it cares about:** story, the tech and engineering behind the image, art, and most of all people. Storytelling is a discipline: a way to connect people, teach, make hard things simpler, make things better, reflect and move forward.
- **Ambition:** to be the best video production company in Phoenix, then regionally, nationally and internationally.
- **Clients to win more of:** finance, accounting, law and other high-end professional services firms. Real Estate was taken off the site on Oct 3.
- **Flagship:** "Your Voice, Your Power", a 10-part docuseries on tribal voting made with ITCA Native Vote (Inter Tribal Council of Arizona), which will air on PBS.
- **Brand tagline:** "Stories that move people. Style that lasts." (chosen Sept 29, 2026). The footer line reads: "Thrill Wave is a video production company based in Phoenix, AZ, that makes films of meaningful stories, with style that lasts."
- **The "heart of gold" voice:** Ari loves the voice of the terminal site (a Matrix-style terminal with a warm, generous voice) and wants the main site's copy to pull from it.

### 5.2 The voice guide (docs/VOICE.md, in full, as of Oct 6, 2026)

> **Thrill Wave voice guide.** How every page, post and line on thrillwave.com (and terminal.thrillwave.com) should sound. When in doubt, read sandwich.co out loud, then do the opposite of lookstudios.co.
>
> **Who we are, in one breath.** Thrill Wave is a video production company in Phoenix. We care about story, about the tech and engineering behind the image, about art, and most of all about people. We see storytelling as a discipline: a way to connect people, teach, make hard things simpler to understand, make things better, reflect and move forward. People come to us for our expertise, so we lead. We do the research, we have a point of view, and we guide clients to the story worth telling.
>
> **SITREP.** SITREP is our research. Before we film, we dig deep into the client's craft, their peers, their industry and their sector. Think of it as a third-party R&D department that cares deeply about the story, lines up with the client's goals and helps direct it. It's how we lead. Describe it in plain words. It's research and a point of view, not a product pitch, not a "proprietary software platform", not "data-driven insights". The software we built for it can come up briefly; the research and the point of view are the story.
>
> **Where stories live.** Almost every great story, from Shakespeare to the best documentaries, plays out against one of three backdrops: athletics, the arts or academics (science, medicine, engineering, research, law and governance). Our industries are grouped that way (the site calls them "Fields"; the address stays /industries for search), and copy about them can lean on it: the setting changes, but the human story underneath doesn't.
>
> **How we report.** We work the way good documentary reporting does: we report first, check our sources, follow the facts, let people speak for themselves and never stage what should be felt. Use that approach and terminology (report, sources, facts, on the record, in their own words), but never name it: don't write "journalism", "journalist" or "reporter".
>
> **How it sounds.**
> - Like a conversation. Every page reads like one of us walking someone through it over coffee: a short, clear elevator pitch that flows from the top of the page to the bottom and ends with an invitation to write to us.
> - Chill, warm, plain and confident. Short, precise sentences that explain one thing each, like sandwich.co. A little humor is welcome when it's natural.
> - Full sentences only. No fragments ("Real people. Real stakes."), no slogan stacks, no one-word labels standing in for a thought. Headlines can be short, but body copy is always complete sentences.
> - Explicit, never left to chance. Say what the next thing on the page is. When a paragraph introduces a list, grid, films or cards, end it with a sentence that leads into them, finishing with a colon. Vary it: "Here are a few of the films we've made for them:", "This is what that looks like in practice:", "Here's who we work with most:".
> - Top down, left to right, toward a message. Each section hands off to the next. The page ends by asking the reader to reach out.
> - Humble expertise. Show it through specifics (what we noticed, how we did it, what gear, what changed) rather than claims. "Your friendly neighborhood filmmakers" is the spirit: approachable, quietly very good.
>
> **Never.**
> - Never mention how many of us there are, call us friends, or call us small, tiny, lean or scrappy. Use "we", "our founders", "our crew", "our team".
> - Never call Thrill Wave an agency (marketing, ad or creative). It's a production company. Agencies can be clients.
> - No agency or big-business speak, buzzwords or jargon: no "leverage", "synergy", "solutions", "drive results", "elevate", "unlock", "full-service", "end-to-end", "best-in-class", "ROI-driven", "content", "campaign", "deliverables", "assets", "stakeholders", "brand storytelling", "data-driven", "proprietary".
> - No selling, pitching or market talk. No urgency, no "get a quote today", no claims we can't show.
> - Nothing that echoes lookstudios.co's copy or layout: no "what makes it tricky" cards, no catalog of formats with lengths and "from $" prices, no walls of FAQs, no filler stats from third parties. Some familiar formats are fine in our own voice (Oct 3, 2026): the "what we hear" cards on Services (a client's words as the heading, our answer in full sentences, a "What helps:" line), the five promises and our own numbers on Services, and the four numbered points on industry and customer pages ("Who we work with / How we help / What we make / Where it plays", each a full sentence, with a lead-in).
> - No em dashes or spaced dashes (use a comma, colon or new sentence). No exclamation-point hype.
> - Never mention AI in our own process.
>
> **Words we like.** Films, stories, people, craft, research, the edit, the light, set, shoot, crew, care, honest, clear, simple, together.
>
> **Quick test before publishing.** 1) Read it out loud. Does it sound like a person talking? 2) Is every sentence a full sentence? 3) Does every paragraph that comes before a list or grid tell the reader what's coming, ending in a colon? 4) Would someone who reached the bottom of the page know exactly what to do next? 5) Could this line appear on any other production company's site? If so, make it more specific or cut it.

### 5.3 Standing rules (consolidated, with dates)

**Words and positioning**
1. Never "agency" for Thrill Wave (Sept 29 to Oct 3). Never "content" or "campaign"; use a meaningful, intentional, heart-of-gold voice instead.
2. Thrill Wave would rather not describe its work as "videos" or "commercials"; it educates, tells stories and connects. Sandwich's "we make commercials, the kind people like" is a spin worth adapting (Oct 5).
3. Don't talk about AI in Thrill Wave's process (it's a given in modern business). A blog post that touches AI should put people first: AI can help bridge a gap, but human creativity, connection and communication are what matter (Oct 1).
4. Never describe Thrill Wave as "three of us", three partners or small, anywhere on the site (Oct 3). On the site the team is "we", "our founders", "our crew" or "our team", and the tone stays professional.
5. No agency or big-business jargon, buzzwords or sales pitching. Chill and conversational like Sandwich; nothing resembling LOOK Studios' copy or format (Oct 3).
6. Every page reads like an elevator pitch that flows top to bottom toward reaching out, in full sentences, with explicit colon lead-ins ("Here are some examples:") before lists (Oct 3).
7. A journalistic approach and vocabulary (report, sources, facts) without ever naming journalism, journalists or reporters (Oct 4).
8. Stories live against three human backdrops: athletics, arts and academics (including science, research, psychology and governance), like the classic plots under great films and documentaries. Fields copy leans on that (Oct 4).
9. Thrill Wave reads as dependable and true, never fleeting, nomadic or mercenary. Avoid lines like "We go wherever the story is" (Oct 4). "Mercenary" wording was removed Oct 5.
10. Copy should convey taking complex things and making them simple, effective and beautiful, like Sandwich (Oct 4).
11. Copy about who we serve, clients and fields says up front that Thrill Wave serves everyone and their communities, then presents the specific recurring ones (Oct 5).
12. Don't claim a founder leads every project (Oct 4).
13. No em dashes or spaced dashes in site copy; no exclamation hype.

**Content and curation**
14. No client testimonials or quotes on the homepage (they read as salesy, and the big production company sites don't use them). Client quotes appear only sparingly, where they mean something, on case study, customer and field pages (Oct 3).
15. Show only the best work: a few strong films per field with no repeats, and clean screen stills, never thumbnails with text on them. Quality over quantity everywhere (Oct 1 and 5).

**Services, customers and fields**
16. The site offers five services (Story, Production, Editing, Photography, Rentals), serves six customer types and works in twelve fields, all listed in Appendix A. "Organizations" is the umbrella word, and it's "Photography", not "Commercial photography". Business films are explainers, educational and culture films rather than commercials, and agency work is described without ad or commercial talk (PR is fine). Real Estate, Wellness and audio services were taken off the site (Oct 3 and 4).

**Pricing**
17. Straight talk on price. Thrill Wave never asks for a client's budget first (the contact form has no budget or timeline fields) and is open about cost. It prices top-down, from what the film needs to do and the timeline, to a fair number, then leads and goes to bat for the client so the film lands on budget and on time. Projects run from thousands to millions of dollars, and most land in the tens of thousands ("$1,000 to $1,000,000" and "1 day to 1 year" describe a range, not literal claims). Price questions point people to message Thrill Wave, not to an FAQ (Oct 3 to 5).

**Design**
18. Buttons stay lean: labels of 3 to 5 words at most, never stretched to fill a column or the page, left or center aligned, with link chips matching the pill buttons. Long lists of links (fields, categories, tags) are a slim line of text links separated by dots, not rows of buttons (Oct 5).
19. One accent color: a plain standard red, #FF0000 (RGB 255/0/0, CMYK 0/100/100/0), not a Pantone shade, on black and white. Red fades into black, not white (Sept 29).
20. Paragraph text always runs the full width of its column on desktop and mobile: no character caps, fixed widths, text-wrap balance or pretty, or `<br>` line shaping. Only headlines may be capped (Sept 29; enforced by `npm run check`).

**Terminal site**
21. Keep it out of search as an easter egg of the real site (noindexed).
22. Games and their menus and popups must never need scrolling (Oct 6).
23. If a visitor's phone is on mute or silent/vibrate, no sound plays anywhere on the terminal site or its games; with silent off, all sounds play as usual (Oct 6).

### 5.4 SITREP

- **On the site:** "SITREP is our research." Before filming, Thrill Wave digs into the client's craft, peers, industry and wider sector, like an outside R&D department that cares about the story as much as the client does, then brings a point of view and helps steer the film toward the story worth telling. Three steps on the site: **Dig in** ("We study your craft, your peers, your industry and the sector around it"), **Find the story** ("We bring you a point of view on what's worth saying and why people will care"), **Make it** ("We film that story with real people and plan where it will be seen"). The terminal site names the same steps INGEST, SYNTHESIZE and EXECUTE.
- **Behind the scenes:** SITREP is Thrill Wave's own software and process, built in-house (mostly by Chris). It gathers public research across many sources, synthesizes it into a point of view on the story and recommends what to make and where it should play. Its diagnostic framework names four ways films fail: gut instinct, copycat, vendor-pitched and no distribution plan. The site shows a 45-second "SITREP Demo" of the dashboard, and the SITREP page offers prospects a demo ("Demo SITREP": "We'll run a SITREP on your organization and walk you through what turns up").
- **How to write about it:** in plain words, as research and a point of view rather than a product pitch (skip phrases like "proprietary software platform" and "data-driven insights"). Site copy keeps the focus on what the research finds, and the dashboard demo shows the tool behind it.

### 5.5 Visual brand

- **Colors:** black (#000000) and white (#FFFFFF) with pure red (#FF0000) as the one highlight (About page hero accents, hovers, focus rings, marks, arrows, small highlights; anything filled red gets white text). Mostly black pages with a few white or light grey bands. A very dark grey footer with a legal bar. The only other color is the flat blue (#192DFE, "LOOK blue") of the homepage "Keep scrolling" pill. The red highlight in text selection turns black on red areas.
- **History of the accent:** tried Pantone 187 C (deeper red), a solid red hero fading to white (reverted), terminal green #5DD068 and neon #00E600 (all Sept 29), then settled on pure red #FF0000.
- **Type:** League Spartan 800 for headings (uppercase, a Futura-style match for the old Wix headings) and Montserrat (variable) for everything else, both self-hosted with metric-matched fallbacks. Small labels use Montserrat, not monospace (Oct 5).
- **Layout tokens:** one content width (880px, `--content`), 6px radius, `--gutter` and `--section` spacing, all at the top of `public/css/site.css`.
- **Header:** see-through black bar with a thin bright bottom line from the start; white text links; "Email us" (red pill, to /contact#start) and "Call / text" (clear pill; on a computer the first click reveals the number). The logo is the white wave mark.
- **Phones:** a slide-in black drawer menu from the right, and once you scroll, a floating glass "island" bar at the bottom with Home (logo), Call (tel), Text (sms), Email (mailto with a subject line) and Menu, with an Apple-style glass highlight (Oct 2).
- **Logo and icons:** `/images/brand/thrill-wave-logo.png`, `thrill-wave-logo-sm.webp`, `thrill-wave-mark-white.webp`, `thrill-wave-mark.svg`. Favicon and app icons: an oversized white-on-black wave mark (Oct 5; cache-busted as `?v=7`). Email signature logo: https://thrillwave.com/images/email/thrill-wave-email-logo.png (Oct 1).
- **Link preview image:** a close-up of a finger on a recorder's REC MODE button with the Thrill Wave logo (`/images/brand/thrill-wave-og-rec-mode.jpg`, Sept 29). `og:site_name` was dropped on purpose so iMessage shows the full page title.
- **Motion:** scroll reveals, a typewriter headline on the homepage, carousels, the hero pills' light sweep and neon line. Everything turns off for visitors who choose reduced motion; data-saver visitors get stills instead of autoplaying video.

### 5.6 References and competitors

- **Sandwich (sandwich.co):** the voice and style reference for the new pages. Short, confident, plain, first person plural, light humor that never undercuts the work. Ari wants copy about as brief as Sandwich's, just a little more. Full notes in Appendix B.
- **LOOK Studios (lookstudios.co):** Thrill Wave's main competitor in the Phoenix valley. Ari likes their site's structure but finds it far too wordy, with obvious AI filler. Use it for structure ideas only. Their stack: custom Next.js with Webflow as the content source, Bunny CDN for self-hosted assets and video, and Google Tag Manager. Their "How we work", "What makes LOOK different" and "Our values" sections were the references for the About page's mission, values and charter. Full notes in Appendix B.
- Earlier references (February 2026): Sandwich Video, Supply and Portal A, with the idea of the portfolio as a conversion tool rather than a gallery.

### 5.7 Earlier positioning (reference only)

Planning documents from February to April 2026 (the "Master Reference", the "2026 Growth Strategy" and the docs in the "orange" site repo) were written before the fall 2026 rebrand and use a different voice, for example "Lean. Fearless. Tech-Augmented Storytelling.", "three-person", "small on purpose", "AI-augmented", "polarizing", "intelligence platform" and "strategic consulting and documentary production company". Their target lists also included defense and aerospace, real estate, luxury hospitality and border and immigration work. For site copy, use the current voice guide and the rules above rather than lines from those documents.

---

## 6. How the site is built and run

### 6.1 Stack

- Plain HTML, CSS and JavaScript generated by one small Node script (`build.mjs`, which runs build steps that live in `lib/`). No framework and no client-side app, so pages are fast and easy to edit. Two dependencies: `marked` (blog markdown) and `esbuild` (minifies CSS and JS).
- Rebuilt from the live Wix site on Sept 27, 2026. Every Wix URL was kept, either as a page at the same address or as a 301 redirect, so search rankings carried over.
- Hosted free on Cloudflare Pages. Pages Functions handle the lead form (`functions/api/contact.js`), the pill analytics (`functions/api/pill.js`) and the private dashboard (`functions/rabbithole.js`).
- A later move to Astro is planned (see section 15). The layout is set up for it: partials become components, `content/posts` becomes a content collection and the JSON files stay as they are. The suggested starting prompt: "Convert this site to Astro and keep every URL and the visual output identical."

### 6.2 Commands, deploy and checks

```bash
npm install
npm run dev      # http://localhost:8788 with live reload; prints a Network address for testing on a phone
npm run check    # builds, then audits every page; must show 0 errors before any push
npm run build    # production build into dist/ (minified, content-hashed CSS/JS)
```

- `npm run dev` behaves like Cloudflare Pages: clean URLs, `_redirects`, `_headers` (including the Content Security Policy) and the 404 page all apply. Lead forms print to the terminal unless `FORM_WEBHOOK_URL` is set in a `.dev.vars` file. In VS Code, Cmd+Shift+B starts the preview.
- Cloudflare Pages builds and deploys every push to `main`. Any other branch gets its own preview URL (the project's pages.dev address is `thrill-wave-wix.pages.dev`).
- A GitHub Action ("Site check") runs `npm run check` on every push and pull request; a red X means something needs fixing. Quick back-to-back pushes cancel the older run.
- `npm run check` fails on: broken internal links or images, missing alt text, a missing `<h1>` or more than one, missing title, description or canonical, invalid JSON-LD, duplicate ids, `_redirects` pointing at pages that don't exist (or hiding a published page), and paragraph text capped narrower than its column. It warns on titles over 65 characters and descriptions outside 50 to 160 characters.
- As of Oct 6, 2026 the build makes 67 sitemap pages (26 posts, 6 categories, 36 videos), checks 70 pages with 0 errors and 0 warnings, and prints 4 build warnings about videos missing upload dates (see section 15).

### 6.3 Where to make common changes (adapted from the repo's CLAUDE.md, corrected where that file is out of date)

| Request | Edit |
|---|---|
| Text on a page | `src/pages/<page>.html` (line 1 holds the page title and meta description) |
| Add or edit a blog post | `content/posts/<slug>.md` (front matter: title, date, author, cover_image, optional description and cover_alt, categories from: Gear and Tech, Craft, Storytelling, Industries, Arizona, Planning a Video). `author: Thrill Wave` credits the company. Posts can show tables, `> **big number**` callouts, charts from `scripts/chart.py` and images with an italic caption line under them. Shoot stills for posts go in `public/images/blog/library/` |
| Add or remove a portfolio video | `content/portfolio.json` (`client`, `title`, `youtube` ID), plus its real YouTube upload date and length in `content/video-meta.json` (hidden search data; the build warns if it's missing) |
| Phone, email, social links, team and About bios, reel video | `content/site.json` |
| Top menu and its dropdowns | `content/site.json` > `nav`. `children` makes a dropdown group (the group's name opens it and isn't a link). `until` gives a link to an unbuilt page a fallback until the page file exists. No `#section` links (the build refuses them) |
| Case study stories and stat boxes (only real, sourced numbers) | `content/home.json` > `cases` |
| FAQ questions and answers (FAQ page, its structured data and llms.txt) | `content/faq.json` |
| Field, customer type and case study pages | `content/home.json`: each entry in `industries`, `audiences` and `cases` gets its own page, built in `lib/breakout.mjs`. Page copy fields: `intro`, `about`, `heading`, `approach`, `points` (four: who we work with, how we help, what we make, where it plays), `faq` (two short Q&As), `work` (films), `seoTitle`, `headline`, optional `quote`. Customer types also take `related` (field names). Case studies also take `lede`, `industry`, `customer`, `services`, `sitrep` (situation, finding, what we made), and optional `facts` (production days, crew size...) and `quote`, which appear once filled in. Add an entry and its page, links, sitemap and llms.txt follow |
| Homepage lists (services, Who we serve, Fields, case studies, process steps, client logos) | `content/home.json` (icons are named in `ICONS` in `lib/blocks.mjs`). Photo tiles: `still` is a YouTube ID, or `ID:2` for YouTube's auto frame 1 to 3; `zoom` crops out baked-in black bars; `"vertical"` for phone-shot video; `focus` shifts the crop |
| Header background video (Home and SITREP) | `content/site.json` > `headerVideo` (Vimeo ID plus poster URL) |
| Vertical clip beside 01 Who we are and in the closing Start a project block | `content/site.json` > `sideVideo` |
| SITREP page dashboard loop | `content/site.json` > `sitrepLoop` |
| Blog page description; category descriptions | `lib/blog.mjs` (`write('/blog', ...)` and `categoryDescriptions`) |
| Header, footer, `<head>` | `src/partials/` |
| Colors, fonts, spacing, animation | `public/css/site.css` (tokens at the top) |
| Menu, video lightbox, scroll reveals, carousels, forms | `public/js/site.js` |
| Redirects for old or changed URLs | `public/_redirects` |
| Security and cache headers, CSP | `public/_headers` |

Code map: `lib/context.mjs` (shared state), `lib/helpers.mjs`, `lib/schema.mjs` (structured data), `lib/media.mjs` (video tiles via `videoLink()`), `lib/layout.mjs` (page shell and menu), `lib/posts.mjs`, `lib/blocks.mjs` (the `{{blocks}}`), `lib/pages.mjs` (pages, sitemap, llms.txt), `lib/breakout.mjs` (field, customer and case study pages), `lib/blog.mjs` (posts, Intel index, categories, RSS).

### 6.4 Building a new page (from CLAUDE.md)

1. Copy `src/templates/page-starter.html` to `src/pages/<page>.html`. The file name is the URL. Fill in line 1 (title, navTitle, a meta description of about 55 characters for menu pages). HTML comments are stripped by the build.
2. Body classes: `page-sections` numbers the section kickers (01, 02...) and sizes titles like the homepage; `page-typed` adds the typewriter titles (homepage only for now, so new pages use `page-sections` alone). Inner-page heroes use a film still instead of the header video.
3. Section anatomy: `<section class="section [section--dark | section--soft]" id="...">` > `.container` > `p.kicker` > `h2.section__title` > intro `<p>` > optional `h3.subhead` and a block > `.section__actions.btn-row`. Tones: `section--dark` black, none white, `section--soft` light grey. Buttons: `btn--clear` on black, `btn--clear-dark` on white or grey, `btn--red` for the one highlighted action.
4. Blocks available anywhere: `{{services_list}}`, `{{services_full}}`, `{{customer_sections}}`, `{{industry_sections}}`, `{{process_detail}}`, `{{case_study_sections}}`, `{{faq_list}}`, `{{faq_card}}` (now used on Process only), `{{audience_grid}}`, `{{industry_grid}}`, `{{client_marquee}}`, `{{portfolio_featured}}`, `{{case_studies}}`, `{{process_steps}}`, `{{sitrep_steps}}`, `{{sitrep_demo}}`, `{{intel_posts}}`, `{{team}}`, `{{team_roster}}`, `{{reel_embed}}`, `{{header_video}}`, `{{side_video}}`, and `{{start_project}}` to end the page.
5. Buttons with `data-until-built` and menu items with `until` switch to the new page on their own once its file exists. Sitemap, breadcrumbs, structured data and llms.txt pick the page up automatically.
6. Run `npm run check` and look at laptop and phone widths before pushing. Use a branch for anything the partners should approve.

### 6.5 Code and design rules (from CLAUDE.md)

- Never change or remove a published URL without adding a 301 in `public/_redirects`.
- Images: WebP in `public/images/<page>/` with descriptive kebab-case names, about 1600px wide at most. The build adds width and height. Every `<img>` needs alt text (empty only for decorative images). Blog covers need a `.jpg` (1200px, for social previews) plus `.webp` and `-card.webp` (720px).
- Keep the design system described in 5.5. Every page except Contact ends with the shared black `{{start_project}}` block linking to `/contact#start`. Tiles use the `.step-cards` style; video tiles use `videoLink()`.
- Page titles: `Page name | Thrill Wave`. The homepage is `Thrill Wave | Phoenix Video Production Company`. Long blog post titles stand alone.
- One `<h1>` per page. Meta descriptions must fit Google without "...": the homepage's at about 140 characters or less, menu pages (About, Work, SITREP, Blog, Contact) at about 55 characters or less because Google shows them as one-line sitelinks, everything else under 160.
- Homepage sections end with a button row: a clear button to the section's own page and no Start a project buttons in between. Red buttons in sections link to About's values and mission.
- Anything new that loads from another domain must be added to the Content Security Policy in `public/_headers`. The CSP blocks inline `style="..."` attributes and inline scripts: use classes and external files.
- The public site is the pages in section 7 plus the FAQ (not in the menu) and Privacy and Terms (footer only, noindex). Don't bring back removed pages or add unlinked pages without asking.

### 6.6 Cloudflare setup

- **Pages project** connected to the GitHub repo; production branch `main`; build `npm run build`; output `dist`; Node 22 from `.node-version`.
- **Custom domains:** `thrillwave.com` and `www.thrillwave.com`, with a Cloudflare redirect rule sending `www.thrillwave.com/*` to `https://thrillwave.com/${1}` (301, keep the query string). Wix used www, so this carries old links and rankings over.
- **Environment variable:** `FORM_WEBHOOK_URL`, the Google Apps Script web app URL that receives leads. Keep it out of the repo.
- **D1 database** `thrillwave-analytics-pill`, bound to the Pages project as `TW_ANALYTICS` (production and preview), for the pill analytics. The table creates itself on first use.
- **Secret** `PILL_STATS_TOKEN`: the /rabbithole unlock key, known to the partners. The repo is public, so never write the key anywhere in it.
- **Web Analytics:** turned on for the Pages project (Sept 28). The CSP already allows `static.cloudflareinsights.com` and `cloudflareinsights.com`.
- **Headers** (`public/_headers`): a strict CSP (scripts only from self and Cloudflare Insights; images from self, YouTube, Vimeo and Unsplash; frames from youtube-nocookie.com, player.vimeo.com, calendly.com and Google Maps), HSTS, nosniff, a strict referrer policy, camera, microphone and geolocation off, and long cache lifetimes for hashed CSS, JS and fonts (images 30 days).
- **The terminal site** is a separate Cloudflare Pages project with its own D1 binding (`TW_SCORES`) and an `X-Robots-Tag: noindex, nofollow` header on every path.
- Cloudflare, Porkbun, Google Workspace, Vimeo and YouTube settings are changed by a partner in those dashboards; Claude works through the GitHub repos.

### 6.7 Domain, DNS and email

- **Registrar:** Porkbun. Auto-renew is deliberately off because Ari plans to transfer the registration to Cloudflare about 60 days after Oct 1, 2026 (early December 2026). The domain expires May 2028.
- **DNS:** Cloudflare (nameservers moved at launch, after copying the MX and TXT records, with mail records left grey-clouded). DNSSEC turned on Oct 1, 2026. The `google-site-verification` TXT record carried over.
- **Email authentication:** SPF, DKIM and DMARC at `p=none`, all set up Sept 28, 2026. Ari asked to tighten DMARC to `p=quarantine` a few weeks after launch, once email (hi@, admin@, ari@ and website leads) has been flowing normally; a reminder is scheduled for Oct 19, 2026.
- **Addresses:** hi@thrillwave.com and admin@thrillwave.com are Google Groups (not inboxes) that deliver to all three partners. A quick test: if ari@ doesn't receive an email sent to hi@, hi@ isn't working.
- **Launch phases (done Sept 28):** 1) deploy to pages.dev; 2) set `FORM_WEBHOOK_URL` and send a test lead; 3) move nameservers to Cloudflare (copy MX and TXT first, grey cloud); 4) add the thrillwave.com and www custom domains, the www-to-root 301 and Web Analytics.

### 6.8 Lead capture

- **The form** is on /contact only ("Start a project"). Fields: first name (required), last name, email (required), phone (optional), organization (optional), "What's the story?" (required; placeholder "Tell us what it is, what it needs to do and when you need it."), plus a hidden honeypot field (`company_website`) that bots fill and people don't. A hidden `source` field says which form it came from. Submit button: "Send it". Success message: "Got it, thank you. A real person will write back within one business day." No budget or timeline fields, on purpose.
- **The path:** the form posts to `/api/contact` (a Cloudflare Pages Function), which validates the email, adds the referring page, a timestamp and the visitor's country, and forwards the submission as JSON to `FORM_WEBHOOK_URL`. That's a Google Apps Script that emails hi@thrillwave.com and logs a row in the "Website Leads" Google Sheet in the Thrill Wave Workspace's shared drive. The function doesn't follow the Apps Script's redirect (a 3xx counts as delivered), which fixed slow and failed submissions (Sept 28).
- **"Website Leads" sheet columns:** Submitted, Name, Email, Phone, Message, Form, Page, Country. The form was tested and working on Oct 1, 2026. So far it has caught test entries and a few vendor and bot pitches.
- **"Thrill Wave - Wix Leads Archive 2023-2026"** (same shared drive, made Sept 28): about 75 contacts from Wix forms and chat since 2023, sorted into roughly 6 likely and 11 possible real prospects; the rest were vendor pitches and spam. Columns: Priority, Category, Status, Why/Note, First Name, Last Name, Email, Phone, Other Phones, Company Website, Came In, Source, Owner, Date Contacted, Notes.
- **Booking:** Calendly ("30 Minute Video Consult", host Chris Kuzman) is embedded on /contact as a calendar-only view with its own details column, sized so neither column scrolls. It's separate from the lead form.
- **Newsletter:** the homepage Intel section and the Intel page have a "Join the newsletter" sign-up, but it isn't connected. It shows "Thanks! Our newsletter isn't live yet, so we didn't save your details. Check back soon." and sends nothing (left unconnected until revisited, Oct 1).

### 6.9 SEO and AEO

- **Titles and descriptions:** rules in 6.5. The homepage title has been "Thrill Wave | Phoenix Video Production Company" since Oct 3. Ari wants Google sitelinks to be the main menu pages with short descriptions that don't truncate.
- **Structured data (JSON-LD) on every page:** Organization + ProfessionalService (founders, a sales contact point, the service area, hours Monday to Friday 9 to 5, an offer catalog built from the five services, and social profiles), WebSite, WebPage and BreadcrumbList; Blog and BlogPosting on Intel; VideoObject for films (using real upload dates from `content/video-meta.json`); FAQ data from `content/faq.json`; ContactPage on /contact. The service area matches the Google Business Profile: Phoenix, Scottsdale, Tempe, Mesa, Chandler, Gilbert, Glendale, Peoria, Tucson and Flagstaff, plus Maricopa County, Arizona and the United States. The address shows Phoenix, AZ only (no street address).
- **llms.txt** at /llms.txt (about 28 KB): a plain-language briefing for ChatGPT, Claude, Perplexity and Google's AI features, built automatically from the site's content: who Thrill Wave is, contact details, services, fields, customer types, case studies, FAQ answers, films and every post.
- **sitemap.xml** with real `lastmod` dates (67 URLs on Oct 6), and the blog RSS feed at `/blog-feed.xml` (the address Wix used, so old subscribers keep working). robots.txt welcomes all crawlers.
- **Speed:** self-hosted fonts with metric-matched fallbacks, minified and content-hashed CSS and JS cached for a year, width and height on every image, WebP everywhere, 720px card images, and YouTube thumbnails instead of embedded players (a player loads only on click).
- **Google Search Console:** a Domain property for thrillwave.com (covers www and non-www), verified Sept 28. The sitemap was submitted after launch and again Oct 1. Ari asked to be reminded in later chats to resubmit it in Search Console whenever new pages go live. Submitting to Bing is on the roadmap.
- **Google Business Profile:** Thrill Wave already has one. Keep the site's structured data in step with its service area and hours.

### 6.10 Analytics

- **Cloudflare Web Analytics** (no cookies), on since Sept 28. For GA4, paste its snippet into `src/partials/head.html` and add Google's domains to the CSP; GA4 or GTM only makes sense if Thrill Wave runs ads.
- **Google Search Console** for search queries and indexing.
- **Pill analytics** for the homepage easter egg (section 10).
- **The baseline to beat** (Wix, 2025): about 84 sessions a month, Google clicks only from brand searches, and a handful of real leads a year (Appendix C). Targets: more than 84 sessions a month, the first non-brand Google search clicks, and real leads every month in the Website Leads sheet. October target: 120 sessions.

---

## 7. The current site, page by page (Oct 6, 2026)

### 7.1 Menu, header, footer and the shared ending

**Menu** (content/site.json > nav): logo (home) · About · Services ▾ (Our services /services, Our customers /who-we-serve, Our fields /industries) · Work ▾ (Portfolio /portfolio, Case studies /case-studies) · Process ▾ (Our process /process, SITREP /sitrep) · Intel (/blog) · Contact. Dropdown group names open their menu and aren't links. There is no "Home" item; the logo links home.

**Shared page ending** (`{{start_project}}`, every page except Contact): kicker "Start a project", title "We'd love to hear your story.", text "Tell us what you're working on, even if it's only a hunch so far. We'll do the homework, and then we'll help you find the best way to tell it. The easiest way to start is to write to us here:", one red button "Write to us" to /contact#start, with the vertical side clip beside it.

**Footer:** logo and the brand line ("Thrill Wave is a video production company based in Phoenix, AZ, that makes films of meaningful stories, with style that lasts."), three columns (Call / text, Email, Follow with social icons), then "© 2026 Thrill Wave LLC. All rights reserved." (the year updates itself) with Privacy policy, Terms of service and "Phoenix, AZ".

### 7.2 Home (/)

Title "Thrill Wave | Phoenix Video Production Company"; description "Thrill Wave is a video production company in Phoenix. We research your world, find the story worth telling and film it with care."

1. **Hero** (black, full screen): headline "Hi, welcome to Thrill Wave. We make cool films that move people." types out, then two buttons arrive together with the menu bar, the neon line and a looping clip: a flat blue "Keep scrolling" pill (jumps to 01, with a glowing neon line running down the page) and a glossy red "Take the red pill" pill that opens terminal.thrillwave.com. A light sweep crosses both pills every few seconds (blue first, then red). Both clicks are counted by the pill analytics.
2. **01 Who we are:** "Good people. Stories that matter." "We're a video production company based in Phoenix, AZ, that makes films for organizations, businesses and, most of all, people. We like making cool videos with good people about what matters, because we believe the stories we tell today shape the world we leave tomorrow. Keep browsing to see our work, then message us to make something." The "Style is Eternal" brand reel plays inline. Button: "More about us".
3. **What we do:** "We make complicated stories simple." Intro ends "Here's how we can help:", then the five services. Button: "See our services".
4. **Who we serve:** "Built for people with something to say." ("We work with anyone who has a story worth telling, from our own neighbors and communities to organizations of every kind... a crew that shows up prepared, keeps its word and tells the truth. Here's who we work with most:"), a looping carousel of the six customer types. Button: "See who we serve".
5. **Fields:** "Every field has its own story." ("Athletics, the arts, academics: wherever we look, we find people striving, overcoming, achieving and discovering something new..."), a looping carousel of the twelve fields with client names. Button: "See all fields".
6. **Clients:** "From neighborhood names to household names." and a scrolling logo marquee.
7. **Our work:** "Films that stay with you." Carousel of nine featured films. Button: "See all our work".
8. **Case studies:** "Every film has a job to do." A numbered list of the five cases that opens each one's still, goal and line. Button: "See case studies".
9. **Our process:** "From first idea to final cut." Five steps, then "How we work" with three promises (Research before we roll; Straight talk on scope; Made for where it's watched). Buttons: "See our process" and a red "See our values".
10. **What sets us apart:** "SITREP: we do our homework." The three SITREP steps and the 45-second SITREP demo. Button: "See how it works".
11. **Intel:** "The stories behind the stories." The three latest posts, "Read all intel" and a red "Join the newsletter" (not connected).
12. **The team:** "Your friendly neighborhood filmmakers." Chris, Tony and Ari. Buttons: "Meet the team" and a red "Our mission".
13. The shared Start a project ending.

### 7.3 About (/about)

Title "About | Thrill Wave"; description "Who we are, how we started and what guides our work."

- **Hero** (studio photo): eyebrow "About Thrill Wave · Est. 2018", headline "Made of people, for people.", lede: "Thrill Wave is a video production company in Phoenix, Arizona. We bring the hearts of artists, the work ethic of builders and the curiosity of engineers and scientists to one job: working alongside people to help them tell their story clearly, honor what came before and move forward together."
- **Origin:** "Founded in 2018 in Phoenix, Arizona." "We started Thrill Wave because we love making things with people, and we kept watching the people get lost. Dated processes, smoke-and-mirrors pricing and endless bidding took the heart out of something that should be simple: good people, a true story and the care to tell it well. So we built the company we would want to hire..." Stats: 2018 (Founded in Phoenix), 10+ (Years behind the camera), 80+ (Organizations we've worked with), 12 (Fields and counting).
- **Who we are:** "Artists, operators and problem solvers." Founder cards (Chris, Tony, Ari) with the bios in section 3.
- **Our values:** "What we care about." 01 We keep it true; 02 We keep it simple; 03 We care about the craft; 04 We stay accountable; 05 We talk straight; 06 We care what happens next.
- **What guides us:** "Our mission, vision and charter." Mission: "We help good people tell true stories, beautifully, so they reach the people who need to hear them." Vision: "We want a world where the stories that matter are told as well as the ones that sell." Charter: We tell the truth. We protect the people we film. We research before we roll. We keep your trust. We treat our crew right. We leave it better.
- The About page brief (Sept 30): sections on mission, goals, charter and values, "corporate but impressive", showing Thrill Wave has its act together.

### 7.4 Services (/services)

Title "Video Production Services | Thrill Wave"; description "Phoenix video production, from first idea to final cut."

- Hero: "Everything a story needs. One crew, start to finish."
- **What we do:** "One stage or all of them." The five services with longer lines and what each includes (Appendix A).
- **Pricing:** "Straight talk on price." "Video pricing has a reputation for being foggy, and we'd like to help change that. A project can run anywhere from thousands to millions of dollars, and most of ours land in the tens of thousands. Some clients keep us on an ongoing retainer, and others bring us in for a single project." Stat boxes: $1Ks (Smaller projects start here), $10Ks (tagged "Typical price range": Most projects, thousands to tens of thousands), $1Ms (The largest productions and series). Subhead "We start from the top.": "We won't ask for your budget first. Most salespeople like to get a number up front and work from the bottom up, because it helps them hit their targets. We start at the top: what the film needs to do, what you need, your timeline and everything else, and then we come up with a sensible number that works for all of us. Once we agree on it, we treat it like a promise..." Button: "Message us".
- **What we hear:** "The things people tell us on the first call." Four cards: "Our last video looked great and did nothing." / "The story got lost between vendors." / "We went cheap and it showed." / "It was gone after one post." Each ends with a "What helps:" line.
- **How we work:** "Research first, then the camera." Five promises: We lead with research; We make it ourselves; We keep our word on time; We treat people right; We tell you what it costs. Then the numbers (2018, 80+, 12, 10+). Button: "See our process".

### 7.5 Who we serve (/who-we-serve) and the six customer pages

Title "Who We Serve | Thrill Wave"; description "Films for businesses, nonprofits, agencies and media." Headline "Built for people with something to say." One section per customer type (`{{customer_sections}}`) with a button to its page, then the client marquee.

Each customer page (`/who-we-serve/<slug>`) has: a hero, an intro, an example film, the "about" lead-in, a heading and approach paragraph, four numbered points (who we work with / how we help / what we make / where it plays), films, an optional client quote, two short FAQs, related fields and the shared ending. Details and films for all six are in Appendix A.

### 7.6 Fields (/industries) and the twelve field pages

Title "Fields | Thrill Wave"; description "Films for medicine, the arts, tribal nations and more." Headline "Good stories live in every field." Field pages live at `/industries/<slug>` (the URL stays /industries for search; menus, headings and breadcrumbs say Fields). Fields are grouped internally by pillar (Athletics, Arts, Academics); the red pillar labels on tiles were dropped Oct 5. Each field page has the same structure as a customer page. A "More fields" / "Other places we work" list shows the other fields as a tidy three-column table of text links. Details in Appendix A.

### 7.7 Work (/portfolio)

Title "Our Work | Thrill Wave"; description "Our films for medicine, tech, sports and live events." Black page. Intro: "Here are some of our favorite films, three from each field we work in most. Jump to the one closest to yours, or just scroll and enjoy." It's followed by a line to the socials ("For behind the scenes, new releases and the work between the big projects, you can follow us here:"), a slim dotted line of field links ("Jump to a field:"), then the twelve fields with their best three films each, three across, text-free stills, no repeats (Oct 5). Films are in Appendix A. (`content/portfolio.json` > `intro` holds an older line that no page uses.) Content notes: Swoon Salon isn't featured anywhere on the site, and Wax Society stays off the Work page; its "Sweet Oblivion" appears only on the Arts & culture field page, with its intro and FAQ mention (Oct 5).

### 7.8 Case studies (/case-studies)

Title "Case Studies | Thrill Wave"; description "Projects, the research behind them and the numbers." Headline "We've got the data to back it up." One section per case with the film, the goal, the story, three sourced stat boxes ("Here are a few public numbers from around the project, each with its source:") and "Read the whole story" to the case's own page (`/case-studies/<slug>`). The five cases: Dear Mom (ITCA WIC), Decadence Arizona (Relentless Beats), Service Without Compromise (UBS & Finnerty Partners), Vaccine education (ITCA TEC) and No Trick, All Treat (Opendoor). Details in Appendix A. The stat boxes are public numbers from around each client, not results Thrill Wave measured; real results, production facts and client quotes can be added as they're gathered (section 15).

### 7.9 Process (/process)

Title "Our Process | Thrill Wave"; description "How we take a project from first call to final cut." Hero "From first idea to final cut." with "See the steps" and "Watch the work". **The steps:** "Five steps, one crew." (Idea, Discovery, SITREP, Production, Completion) and "What happens in each step". **SITREP:** "We do our homework first." **Timeline:** "As fast as a day. As long as a year." Stat boxes: 1 day (our fastest turnarounds, shoot to delivery), 1 year (long-form series, research to final edit), 1 crew (from the first call to the final cut). Then the partnership paragraph ("We like to lead... We also like to listen...") and the FAQ cost card, with "See pricing".

### 7.10 SITREP (/sitrep)

Title "SITREP | Thrill Wave"; description "Our research: we find the story before we film it." Black page.

- Hero with the header video: eyebrow "SITREP · Research before we film", headline "We find the story before we film it." Buttons: red "Book a call" and clear "See demo". The dashboard loop sits under the hero.
- "Why we bother": "Most films that miss were decided before anyone picked up a camera: a gut feeling nobody checked, a copy of something a peer made, or a good film nobody planned to put in front of the right people..." (the four failure modes in plain words).
- "How a SITREP works": the three steps, then "Inside the dashboard" with the 45-second demo.
- "Three films, one way of working": three ITCA proofs, each Situation, What we found, What we made: WIC Nutrition Services (trust, not awareness); Tribal Epidemiology Center (people wanted to hear from their own leaders); Civic Engagement: Voter Education (the 10-part "Your Voice, Your Power", facing a long history of broken promises; "It's in production now").
- "See SITREP in action": Tony's three-minute TEC breakdown (Vimeo), linking to the vaccine education case study.
- "How it turned out": "Dear Mom" (the right film for this spot, confirmed Oct 1) plus Your Voice, Your Power and Welcome to WIC, linking to the Dear Mom case study.
- Closing "Start with a SITREP": "If you'd like to see what we'd find in your world, and what working with us is like, book a demo..." Button: "Demo SITREP".

### 7.11 Intel (/blog)

Title "Intel: Our Blog | Thrill Wave"; description "Notes on video production, storytelling and the craft." Intro: "Intel is our blog. It's where we share the stories behind the stories: lessons from set, notes from our research and what we're learning along the way. We write about production, storytelling and what it actually takes to make something worth watching. Pull up a chair." Newsletter sign-up (not connected), category links, post cards. Six category pages at `/blog/categories/<slug>`: Arizona, Craft, Gear and Tech, Industries, Planning a Video, Storytelling. Posts live at `/post/<slug>` (Wix's URL pattern, kept). The full post list and the weekly post system are in section 8.

### 7.12 Contact (/contact)

Title "Contact | Thrill Wave"; description "Send a message, call, text or book a 30-minute consult."

- Banner "Get in touch." over the original hands-at-a-concert photo.
- **Contact us** (anchor `#start`): "Tell us about your project: what it is, what you need it to do and when you need it done. A rough idea is fine, and a detailed brief is even better, because we love a good brief. If you have a question first, the answer might already be in our FAQ. Here's every way to reach us:" Email, Call / text, Based in ("Phoenix, AZ. We film across Arizona and beyond.") and Socials, beside the Start a project form (6.8).
- **What to expect:** "Here's what happens next." "One of these humans will read your note, not a bot, not an intern and not a ticket queue. We try to write back within one business day, and if we're slower than that, we're probably on a set somewhere with no signal (we'll have a good story about it). From there we'll ask a few questions, maybe hop on a quick call, and send you a clear plan with an honest price."
- **Or Zoom us:** the Calendly embed.
- A map of Arizona and the Southwest with no pin (the PO box isn't shown).

### 7.13 FAQ, Privacy, Terms and 404

- **FAQ (/faq):** "Questions? Straight answers." Not in the menu; linked from Process (the cost card) and Contact. Eleven questions in `content/faq.json`: How much does a video cost? How long does a video take? Where is Thrill Wave based? What kind of videos do you make? Who do you work with? Can you handle the whole project, or just part of it? Who will work on my project? What is a SITREP? Do you work with agencies and PR firms? Do you rent gear? How do we get started? (Some answers need updating; see section 16.)
- **Privacy policy (/privacy)** and **Terms of service (/terms):** footer only, noindex. Privacy was last updated Oct 4, 2026 and covers what people send, Cloudflare Web Analytics, the anonymous pill analytics (a random browser ID in local storage), embedded services (Vimeo, YouTube, Google Maps, Calendly) and deletion requests.
- **404:** "Error 404. This page ended up on the cutting room floor." with buttons Back to home, See our work and Say hello.

### 7.14 Pages removed and redirects

- Sept 29, 2026: `/medical` (301 to /portfolio#healthcare-medical), `/marketingchallenges` (to /contact), `/app-landing-page` (the old "Process" page, to /sitrep) and the post `premium-video-services-for-local-businesses-in-phoenix` (to /blog). They were archived offline, not in the repo.
- Wix filler: `/paywall` (to /), `/inquiry-services-page`, `/pricing-plans/*` and `/plans-pricing` (to /contact); `/profile/*` and `/blog/page/*` (to /blog); five empty Wix blog categories (to /blog). Guesses: `/home` to /, `/work` to /portfolio.
- Oct 1: six posts about AI and an unfinished Arizona cinema history post, all to /blog.
- Oct 3: 27 older posts that no longer fit the new direction (agency, advertising and social media topics, plus repeats) to /blog; old blog categories regrouped (design and photography to Craft; healthcare, medical and finance to Industries; business, marketing and music to /blog).
- Oct 3 and 4 restructure: old customer and field URLs (agencies, brands, companies, nonprofits-and-government, media; medical-and-biotech, beauty, wellness, sports-and-fitness, finance, real-estate, construction, consumer-products, hospitality, industrial, manufacturing, food) 301 to their current pages. Full list in `public/_redirects`.

### 7.15 Videos used across the site

- Header video on Home and SITREP: Vimeo `1231402333` ("Thrill Wave - Site Lander", Sept 29).
- Vertical side clip (01 Who we are and the Start a project ending): Vimeo `1231788823` ("Thrill Wave pre-roll animation").
- SITREP dashboard loop: Vimeo `1231827560`.
- Brand reel "Style is Eternal": Vimeo `1170100005` (54 seconds, uploaded Mar 3, 2026).
- SITREP demo: Vimeo `1195773700`. TEC "Case Study Using SITREP": Vimeo `1175739079`.
- Portfolio films are YouTube IDs (Appendix A). Background videos need a paid Vimeo plan; the Sept 28 roadmap suggests moving the hero reel to Cloudflare Stream while keeping Vimeo and YouTube for the portfolio.
- YouTube housekeeping: `Ny-eNXzNrtA` is a Thrill Wave healthcare and medical supercut, but its YouTube title still says Aurelio and should be renamed on YouTube. `ASbLkvgd874` is Aurelio PT's "Fitness Forward Performance".

---

## 8. Intel: the blog and the weekly post

### 8.1 Direction (Oct 3 and Oct 5, 2026)

- Education and expertise first, SEO second, selling never. Written as film nerds (writers, producers, filmmakers, editors) who care about people, stories and communication.
- Topics: niche gear and tech (for example Angénieux anamorphics, Sony FX cinema cameras, sensors and glass), intersections with other fields, the discipline and woes of each craft, and the art.
- One post a week (changed from twice a month on Oct 5). Posts alternate between **craft posts** and **field and customer posts**. The field and customer posts cover Thrill Wave's capabilities in each field and customer type, educating with good intentions, linking to that field's page and ending with a short invitation to message Thrill Wave.
- Posts are brief, with a chart, table, number or picture roughly every paragraph. Images come from Thrill Wave's own library first, then frames from their own YouTube or Vimeo films, then real stock (Unsplash, free license only). Never AI images.
- Blog refresh (Oct 3): 27 older posts written for the agency era (advertising, social media management, a few repeats) were retired with 301 redirects. The 24 kept posts were updated for the current voice (each now ends with a line to /contact), re-dated across January to September 2026 and regrouped. On Oct 4, the stock covers on 17 posts were swapped for simple real Unsplash photos with credit lines.

### 8.2 The weekly scheduled task (in the old account)

- Name: "Thrill Wave weekly blog post". Runs every Tuesday at 8:53am Phoenix time (`CRON_TZ=America/Phoenix 53 8 * * 2`), on Claude Opus 5.5, with automatic approval, connected to Claude Docs, Google Drive and the remote-session tools. Push and email notifications are on. It first ran on Oct 6, 2026 and published "How to Film Public Health Stories With Tribal Communities". Next run: Oct 13, 2026.
- Its prompt, verbatim:

```
Write and publish one new blog post on thrillwave.com for Thrill Wave, a video production company in Phoenix, AZ.

1. Attach the GitHub repo arieverett/thrill-wave-website-wix-replicate with push access (add_repo), clone it, run `npm ci`, and read CLAUDE.md.
2. Follow docs/AUTO_POST.md in that repo exactly: it covers picking a topic that doesn't repeat existing posts, the voice and fact rules (never invent clients, numbers or quotes; never mention AI; never call Thrill Wave an agency; never say how many people Thrill Wave is or call it small), research and sources, visuals and images, `npm run check`, and publishing to main.
3. If the post can't meet those rules, push it to a `draft/<slug>` branch instead of main and say why.
4. Finish with a short message to the partners via SendUserMessage: the post title, its link https://thrillwave.com/post/<slug>, one line on why this topic, and anything worth a second look.

Commit messages end with:
Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>
```

- The full playbook (`docs/AUTO_POST.md`) is in Appendix D. Partners can change it in plain English ("make the posts shorter", "more posts about editing", "pause the posts").

### 8.3 Posts on the site (26, newest first)

| Date | Title | Categories | Credited to |
|---|---|---|---|
| 2026-10-06 | How to Film Public Health Stories With Tribal Communities | Industries, Planning a Video | Thrill Wave |
| 2026-10-03 | Vertical Anamorphic on an FX9, Hail Mary Style | Gear and Tech, Craft | Thrill Wave |
| 2026-09-29 | Films People Actually Want to Watch, and What Each One Is For | Planning a Video, Storytelling | Chris Kuzman |
| 2026-09-17 | Understanding Your Target Audience and How to Reach It | Planning a Video | Chris Kuzman |
| 2026-09-05 | Video Production in Flagstaff That Stands Out | Arizona | Chris Kuzman |
| 2026-08-25 | Video and Photography for Phoenix Financial Services Firms | Industries | Chris Kuzman |
| 2026-08-13 | Sports and Media Video Production in Phoenix and Scottsdale | Industries | Chris Kuzman |
| 2026-08-02 | Why Hire a Pro Video Team for Your Phoenix Solar Business | Industries | Chris Kuzman |
| 2026-07-21 | Hiring a Video Team for Your Phoenix Law Office | Industries | Chris Kuzman |
| 2026-07-10 | What To Consider When Hiring a Video Production Crew in Phoenix | Planning a Video, Arizona | Chris Kuzman |
| 2026-06-28 | Why Hire a Video Crew for Your Next Phoenix Event | Arizona, Industries | Chris Kuzman |
| 2026-06-16 | Why Video Production Is So Expensive | Planning a Video | Chris Kuzman |
| 2026-06-05 | Why Phoenix Has a Fast-Growing Film and Video Community | Arizona | Chris Kuzman |
| 2026-05-24 | Video for Aerospace and Defense: Explaining Complex Topics | Industries | Chris Kuzman |
| 2026-05-13 | Why You Need Documentary-Style Testimonials for Your Business | Craft, Planning a Video | Chris Kuzman |
| 2026-05-01 | Why Phoenix Physical Therapists Are Filming More Video | Industries | Chris Kuzman |
| 2026-04-20 | No, AI Will Not Be Totally Replacing Humans for Video Production | Craft | Chris Kuzman |
| 2026-04-08 | How to Measure the ROI of Video Production for Your Business | Planning a Video | Chris Kuzman |
| 2026-03-27 | The Power of Video Interviews To Promote Your Business | Craft, Planning a Video | Chris Kuzman |
| 2026-03-16 | Grow Your Dental Practice With Video Production | Industries | Chris Kuzman |
| 2026-03-04 | Promote Your Phoenix-Based Medical Practice With Video | Industries | Chris Kuzman |
| 2026-02-21 | Leveraging Video Production for Your Next Event in Phoenix | Arizona, Industries | Chris Kuzman |
| 2026-02-09 | Why We Use Sony's FX Cinema Line Cameras | Craft | Chris Kuzman |
| 2026-01-29 | Video Production Services for Phoenix's Metropolitan Area | Arizona | Chris Kuzman |
| 2026-01-17 | Equipment Doesn't Make the Production, But It Can Set It Apart | Craft | Chris Kuzman |
| 2026-01-06 | The Difference and Benefits of 8-bit Video vs. 10-bit Video | Craft | Chris Kuzman |

The older posts keep their Wix-era slugs (some long), which preserve their search history; only the titles were shortened for Google (Oct 1).

---

## 9. terminal.thrillwave.com (the red pill site)

- **What it is:** an old-school, Matrix-style terminal "operating system" version of Thrill Wave's site, with a typing intro ("hi. welcome to thrill wave."), a power button, scanlines and glow, sound effects and music, a minimize and reset routine, and a hidden "break room" arcade. Ari loves its "heart of gold" voice, and it was the source for much of the main site's copy (the About page's first version was adapted from it on Sept 29).
- **Pages:** home (01A what we do, 01B sitrep, 01C our work, 01D who we work with...), about (origin, "operator roster", how we think), sitrep (ingest, synthesize, execute, demo reel), work ("selected files", what we make), intel (three recent posts linked to the main site) and contact (email, call/text, Arizona map, Calendly, socials). The intro asks visitors to turn "sound on and silent off".
- **The break room arcade:** three games: "one shot" (jump the plant hazards and clear the shot), "going viral" (outrun the algorithm before it outruns you) and "story defense" (protect the story core from all the noise; file `games/content_defense.html`). High scores and name menus are styled like the side menu.
- **Leaderboard:** originally a Supabase database (it worked in the Netlify era, then stopped). On Oct 5 Ari decided to move it to Cloudflare D1 and carry over every old score. Done Oct 5 and 6: `functions/api/scores.js` with a D1 database bound as `TW_SCORES`; the table creates itself and imports the old Supabase scores from `lib/legacy-scores.js` once. `GET /api/scores?game=one_shot&limit=10`, `GET /api/scores?health=1`, `POST /api/scores {game, player, score}`; rate-limited per visitor; names allow A to Z, 0 to 9 and a few symbols and are saved at up to 12 characters (the name editor accepts 16; see section 16); no dates shown on the board.
- **Hosting:** its own Cloudflare Pages project (live at terminal.thrillwave.com since Oct 2, 2026), kept out of search with an `X-Robots-Tag: noindex, nofollow` header. The old Netlify copy is kept, undeleted, as an archive.
- **History:** built May 17 to 27, 2026 (about 150 commits of animation, sound, menu and game work), synced Aug 29, then moved to the subdomain on Oct 2. Oct 3: voice-guide copy pass, the PO box removed and an Arizona map with no pin (like the main site), and a green terminal favicon everywhere. Oct 5 and 6: shorter Ari bio, new Intel posts, the real email address, crisp arcade menus, faster load, bigger game popups that never scroll, and iPhone sound that follows the silent switch.
- **Rules:** see 5.3, items 21 to 23.

---

## 10. Red/blue pill analytics and /rabbithole

- **What it counts:** every click on the homepage's "Take the red pill" and "Keep scrolling" buttons, through a tiny first-party beacon (`data-pill-choice`, keepalive fetch) to `/api/pill`, stored in the D1 database `thrillwave-analytics-pill` (binding `TW_ANALYTICS`). It records a random browser ID (local storage), the pill, whether it's that browser's first pick, seconds from page load to click, device type, country, referring site and campaign tags. No names, emails or IP addresses. Live since Oct 4, 2026.
- **The dashboard:** https://thrillwave.com/rabbithole, unlisted (served by `functions/rabbithole.js`, never by the build, so it isn't in the sitemap, menu, llms.txt or search). Locked browsers see a "Knock, knock" key screen (not a 404). Typing the key (the `PILL_STATS_TOKEN` secret; case, spaces and punctuation don't matter) or opening `/rabbithole?key=...` unlocks that browser for a year with a private cookie. "Log out" (or `?logout=1`) locks it again, and changing the secret locks every browser. It shows the red/blue split by each person's first pick, an all-time split of every click, total clicks, switchers, decision time, a 30-day chart, device, country and referrer splits, and a live feed that refreshes every 30 seconds. "Ignore my clicks" keeps the team's testing out of the numbers. It has its own green tab icon borrowed from the terminal site, a link preview card (1200x480, a rabbit and a steak) and a looping soundtrack ("Clubbed to Death") that keeps playing through unlock.
- **Setup check:** https://thrillwave.com/api/pill?health=1 reports whether the database is connected, its row count and whether the key is set, with no visitor data.
- **Portfolio version:** https://github.com/arieverett/thrill-wave-website-pill-analytics is a standalone, public version of the feature, with a README, screenshots made with demo data, `schema.sql` and `examples/buttons.html`.
- The dashboard briefly lived at `/construct` on Oct 4 before moving to `/rabbithole` the same evening.

---

## 11. Other repos and earlier versions

| Repo | What it is | Status |
|---|---|---|
| `arieverett/thrill-wave-website-wix-replicate` | The live thrillwave.com (Claude's Wix rebuild, renamed) | Live; deploys from `main` |
| `arieverett/thrill-wave-website-terminal` | terminal.thrillwave.com | Live on its own Pages project |
| `arieverett/thrill-wave-website-pill-analytics` | Standalone public version of the pill analytics | Portfolio piece |
| `arieverett/thrill-wave-website-wix-replicate-chat` | ChatGPT's parallel Wix replica, built the same weekend for comparison | Not used (Claude's version was chosen, Sept 27 and 28) |
| `arieverett/thrill-wave-website-orange` | "Website 3.0", an earlier redesign built Mar 31 to Apr 20, 2026: Netlify, near-black with an orange accent (#E06000 in the build; the brief proposed #FF6B00), Archivo and IBM Plex Mono, a SITREP and "intelligence"-first positioning, light and dark modes, 5 pages. Its `docs/` folder holds spring 2026 planning documents (positioning, a website brief and SITREP notes). README has full-page screenshots (added Sept 29) | Not launched; kept for reference |
| `arieverett/thrill-wave-website-wordpress` | The WordPress-era site (about 2019 to 2023) | Archive. A text backup of that site is in Drive ("Thrill Wave - Website OG backup") |


---

## 12. The Wix migration

- **Before:** www.thrillwave.com ran on Wix (domain, hosting, design and CMS) from 2023 to Sept 28, 2026.
- **Sept 27, 2026:** Wix doesn't export code, so the live site was crawled page by page and rebuilt as static HTML, word for word (a few typos fixed, such as "Goilf Digest"). All 112 images were downloaded, renamed and compressed to WebP; nothing loads from Wix any more. 13 client logos were identified. The Calendly booking widget was rebuilt with the right event. The ChatGPT build was made in parallel and Claude's was chosen.
- **Sept 28, 2026 (launch):** live on Cloudflare Pages at thrillwave.com. Ari decided to wind Wix down right away rather than wait: remove the domain from Wix, turn off Premium auto-renew and unpublish. Before cancelling: export Wix form submissions and analytics (the leads were archived to the Wix Leads Archive sheet and the traffic baseline was recorded that day), replace the two Wix-licensed stock photos (done Sept 28, then the page was removed), and **never click "connect domain" in Wix again**.
- **Wix-only features that didn't come over:** blog likes, views and comments, member profiles and the paywall.
- The traffic baseline is in Appendix C.

---

## 13. Site-related items from the October marketing plan

The October marketing plan (a doc in the old account, dated Oct 4) is mostly about social media and sales. These are the parts that touch the website:

- **Every week:** check the site numbers (Mondays) and make one small site update (Thursdays).
- **Week 1 (Oct 5 to 9):** announce the new site on all socials; update the Google Business Profile and Thumbtack listings with the new site link and the five services.
- **Week 3 (Oct 19 to 23):** publish the ITCA case study and share it.
- **Week 4 (Oct 26 to 30):** tighten DMARC and resubmit the sitemap; on Friday, review the numbers.
- **October targets vs the Wix baseline:** site sessions 120 a month (baseline about 84); 3 leads from the site and Thumbtack (a few a year on Wix).

The old Wix site got very few real form leads, so website lead generation is a priority. One of the growth moves noted on Sept 28 is rebuilding Google visibility through the Business Profile, so keep the site's structured data in step with it.

---

## 14. Timeline

**Before the rebuild**
- 2018: Thrill Wave founded in Phoenix.
- About 2019 to 2023: WordPress site. 2023 to Sept 2026: Wix site at www.thrillwave.com.
- Mar 31 to Apr 20, 2026: an earlier redesign (the "orange" site on Netlify), not launched.
- May 17 to 27, 2026: the terminal site built (Netlify, Supabase leaderboard), unreleased.

**Sept 27, 2026:** Wix site rebuilt as static HTML/CSS/JS for Cloudflare Pages; Calendly embed; SEO, AEO and speed pass; video titles over thumbnails; one content width; two fonts; non-www domain; CLAUDE.md; the GitHub check action; "Style is Eternal" reel; SITREP page rework (no AI or LLM wording).

**Sept 28 (launch):** live at thrillwave.com; Apps Script lead form; phone updated to (480) 766-9585; structured data matched to the Google Business Profile's service area and hours; nameservers, SPF, DKIM and DMARC; Search Console verified; Web Analytics on; Wix wind-down decided; baseline recorded; post-launch roadmap saved.

**Sept 29:** site trimmed to five menu pages (Home, Portfolio, SITREP, Blog, Contact) and the old pages removed; homepage retitled; "Site Lander" header video; new REC MODE link preview; SITREP page polish; one title format and no em dashes; homepage redesign and many hero copy rounds ending at the tagline "Stories that move people. Style that lasts."; black Portfolio, Blog and Contact; new nav and dark grey footer; new About page and contact form; red accent settled on pure #FF0000 after trying Pantone 187 C and green; Blog renamed Intel; text width rule; new favicon; phone drawer menu. Ari also asked to keep in mind: About, Process and Case studies pages, automatic articles for SEO and AEO, and a move to Astro with a bigger design and backend overhaul.

**Sept 30:** homepage rebuilt around Who we are, What we do and Industries, each section ending in a button row; photo tiles; newsletter UI; vertical side video; case studies section; About mission, values and charter; full-screen SITREP hero with the dashboard loop; autoplay video tiles; Home dropped from the nav; PO box kept off the site; homepage buttons waiting for pages noted.

**Oct 1:** posts about AI retired (one kept); typewriter titles on the homepage; cleanup of dead styles; video search data; menu with dropdowns; new pages Services, Our customers, Process, Case studies, FAQ and Industries; Sandwich and LOOK references; 12 industry, 5 customer and 5 case study pages generated from content; films trimmed; FAQ card removed from portfolio and breakout pages; contact form tested; sitemap submitted; DNSSEC on; domain transfer plan; hero video reliability fixes for Safari and iPhone.

**Oct 2:** phone bottom bar ("island"); red pill and blue pill hero; black hero with "Hi, welcome to Thrill Wave. We make cool films that move people."; "Style is Eternal" moved into 01; terminal site live at terminal.thrillwave.com and linked from the red pill; Ari considered the new site done and live and planned a final code, copy, content, style and SEO/AEO pass the following week.

**Oct 3:** Google title and description say Phoenix video production; blog refresh (27 retired, 24 updated and re-dated); post playbook; first new post (vertical anamorphic on an FX9); copy sweep; build split into `lib/` modules; Contact page "What to expect" and no team photos; "three of us" removed site-wide; voice guide written (docs/VOICE.md) and a site-wide copy pass; Services "what we hear" cards and promises; "Photography" naming and audio removed; Rentals back as the fifth service; customer types and industries restructured; Thumbtack kept and outside listings fixed; terminal copy pass.

**Oct 4:** Wellness removed; "a founder on every project" claims dropped; bios evened; carousels; industries grouped as Athletics, Arts and Academics; Hospitality became Food, then Food & hospitality; the journalism thread (approach yes, words no); Nonprofits & public service; Industries renamed Fields; Arts & culture and Education & research added; Schools & institutions added; Media & publishing; Builders & makers; About photo hero and numbered values; copy pass (complicated made simple, dependable, pricing and timeline as a range); blog covers replaced with simple real photos; pill analytics live; /rabbithole dashboard; new 404 page; privacy policy updated.

**Oct 5:** rabbit hole soundtrack; pillar labels dropped from tiles; homepage tweaks; Services pricing rewritten ("We start from the top"); no duplicate films on field pages; chip links match pills; lean buttons and short labels; vaccine case study stats and final films; weekly posts with the field and customer rotation; Work page grouped by the 12 fields with the best three films each; "we serve everyone" copy; "mercenary" dropped; Swoon Salon removed and Wax Society limited to Sweet Oblivion on Arts & culture; slim dotted text links; new favicon; About order Chris, Tony, Ari; bios matched by character count; terminal leaderboard move to D1 decided.

**Oct 6:** terminal arcade and leaderboard fixes (D1 live with the old scores, popups that never scroll, iPhone silent switch); the first automatic weekly post published ("How to Film Public Health Stories With Tribal Communities").

---

## 15. Open items and roadmap

**Next up**
1. **The final pass** Ari planned for the week of Oct 5: code, copy, content, style and SEO/AEO across the whole site. Section 16 lists things to look at.
2. **Resubmit the sitemap** in Google Search Console (pages changed a lot Oct 1 to 5), and submit it to Bing Webmaster Tools.
3. **Tighten DMARC** from p=none to p=quarantine (Cloudflare DNS, `_dmarc` TXT `v=DMARC1; p=quarantine;`) after confirming hi@, admin@, ari@ and website leads are flowing. The scheduled reminder fires Oct 19; the October plan slots it into week 4 (Oct 26 to 30), alongside resubmitting the sitemap.
4. **Confirm Wix is fully wound down** (domain removed from Wix, Premium auto-renew off, site unpublished). Never click "connect domain" in Wix.
5. **Transfer the domain** from Porkbun to Cloudflare in early December 2026 (about 60 days after Oct 1). Auto-renew stays off until then; the domain expires May 2028.
6. **Case study details to gather:** production days, shoot locations and crew size for each case (`facts`), a client quote with name and title (`quote`), and real results from the clients themselves (views, reach, enrollments, leads). Each shows up on its page as soon as it's added to `content/home.json`.
7. **Video upload dates:** add the real YouTube upload date and length to `content/video-meta.json` for `Gh67yEMyOCs` (Your Voice, Your Power: Full Episode), `3hlumlH16HI` (Recommended Respiratory Vaccinations), `_OCpwTAXRNk` (Contact Your Healthcare Provider) and `zs1_1xC4My8` (Talk to Your Healthcare Provider); they're the build's only warnings. Also add `cmaXGZGLShU` (Speak with Your Healthcare Provider, on the vaccine education case page): it has no date either, but the build only checks Work page videos, so it doesn't warn. Films without a date are left out of the video search data.
8. **Rename `Ny-eNXzNrtA` on YouTube** (it's the healthcare and medical supercut; YouTube still calls it Aurelio).
9. **Compare the numbers** (Search Console and Cloudflare) with the Wix baseline around the end of October.

**Later**
10. Connect the newsletter sign-up (left unconnected on purpose until revisited).
11. Recreate the old Wix SITREP particle animation (needs the original embed code; a static three-step panel stands in).
12. Make the main GitHub repo private (noted in the migration notes; the pill analytics repo stays public on purpose). Anything that clones it (the weekly post task) then needs authenticated access. The orange, ChatGPT replica and WordPress repos are public too, and the orange repo's docs/ folder holds internal pricing and contract ranges, so those are worth making private or archiving.
13. Fast lead routing: Slack or phone notifications when a lead comes in.
14. Lead and conversion tracking: Cloudflare Web Analytics now; GA4 or GTM only if running ads.
15. A hero reel on Cloudflare Stream (keep Vimeo and YouTube for the portfolio).
16. A few local pages with real project content (Scottsdale, Tempe...).
17. LOOK-style breakout case study pages exist; fill them out with facts, deliverables and quotes, and add new cases (the ITCA case study is due to be published and shared in week 3 of October).
18. Possibly drop the Work page's sections entirely, Sandwich-style (Ari is considering it).
19. Move the site to Astro with a bigger design and backend overhaul.
20. Website lead generation: more real leads through the site, and pages and posts that speak to finance, accounting, law and other professional services firms (the clients Thrill Wave wants more of).

**Done (from earlier to-do lists):** About, Services, Who we serve, Fields, Process, Case studies and FAQ pages; individual field, customer and case study pages; the homepage buttons that waited for those pages now link to them; contact form and lead routing; terminal subdomain and red pill hero; pill analytics; weekly automatic posts; two code cleanups (Oct 1 and Oct 3).

---

## 16. Things worth a second look (spotted while compiling this, Oct 6)

These are observations from reading the repo against the rules above, not decisions. Worth raising during the final pass.

1. **Two FAQ answers still ask for the budget.** The "How much does a video cost?" answer ends "tell us your goal and your budget, and we'll come back quickly with a fair number", and the Nonprofits page FAQ "Can a nonprofit afford you?" says "Tell us the goal and the number". Both conflict with the Oct 5 stance that Thrill Wave never asks for the budget first. The first question is also the FAQ card on Process (the card shows the question and links to /faq).
2. **Two FAQ answers use older lists.** "What kind of videos do you make?" names older fields ("industrial work", "government", no arts and culture or education and research), and "Who do you work with?" covers five of the six customer types (Schools & institutions is missing).
3. **The structured-data slogan is an old tagline.** `content/site.json` > `tagline` is "Real insight to real trust, captured on camera.", which feeds the Organization's `slogan`. The chosen tagline is "Stories that move people. Style that lasts."
4. **The structured-data and llms.txt service list is the old one.** `content/site.json` > `services` (used for `knowsAbout` and the llms.txt "Services" list) still has the eight older items (brand films, social media video, creative strategy and distribution planning...), not the five services on the site.
5. **Wax Society shows up beyond Sweet Oblivion.** It's in the Arts & culture tile's client names on the homepage and in llms.txt (as well as on the Arts & culture page itself). The note in 7.7 allows only Sweet Oblivion, on the Arts & culture page; confirm whether the client-name mentions are OK.
6. **Out-of-date notes in the repo.** The README's "Before cancelling Wix" list and item 8 in `docs/MIGRATION_NOTES.md` still show the form webhook, Web Analytics and Search Console as not done (they are). `CLAUDE.md` still documents a `hard` field (three "what makes it tricky" cards) that no longer exists and that the voice guide rules out, says customer and field sections have three numbered points (there are four) and says the FAQ is linked from Services (it isn't any more). `docs/MIGRATION_NOTES.md` and a comment in `src/pages/index.html` call the terminal repo `thrillwave-website-terminal` (it's `thrill-wave-website-terminal`). Code comments in `public/js/site.js` (mentions `/construct`) and `functions/api/pill.js` (says a locked /rabbithole shows the 404 page; it shows the key screen) are stale too.
7. **The leads sheet has no Organization column.** The form has asked for an organization since Sept 29, but the sheet's columns are Submitted, Name, Email, Phone, Message, Form, Page, Country. Check whether the Apps Script passes organization (and last name) through to the email and the sheet.
8. **Form spam.** The contact form is already catching vendor and bot pitches. The honeypot stops some; Cloudflare Turnstile would stop more if it grows.
9. **Music licensing.** The terminal site plays two Daft Punk tracks (`da_funk.mp3`, `robot_rock.mp3`) and /rabbithole plays "Clubbed to Death". Commercial tracks on a business site can draw takedown notices; worth confirming the rights or swapping in licensed music.
10. **One redirect points at an anchor that's gone.** `/medical` 301s to `/portfolio#healthcare-medical`, but the Work page's Medical section is now `#medical`, and `/industries/medical` is the better target today.
11. **Leaderboard names get cut short.** The terminal site's break room name editor allows 16 characters, but the games and the scores API save names at 12, so longer names are silently trimmed on the board.

---

## 17. Moving to the new team account: setup checklist

1. **Create the project** in the Thrill Wave team workspace, upload this file and paste section 1 into the project instructions.
2. **Connect GitHub** with access to the `arieverett` repos (push access to the main and terminal repos). Consider moving the repos from Ari's personal GitHub into a Thrill Wave organization, so the company owns them and every partner has the same access. If you do, update the scheduled task prompt, `docs/AUTO_POST.md` (its clone line) and the README links to match, and reconnect the Cloudflare Pages projects to the new repo locations.
3. **Connect Google Drive** with a thrillwave.com account that can see the Thrill Wave shared drive ("Website Leads" and "Thrill Wave - Wix Leads Archive 2023-2026").
4. **Scheduled tasks stay in the old account and keep running there** unless they're moved. The weekly post runs next on Tuesday Oct 13 at 8:53am Phoenix time, and the DMARC reminder fires Oct 19 at 9:00am. Recreating them in the team account (the prompt is in 8.2) lets every partner see and adjust them; turn the old ones off when you do, so posts don't go up twice.
5. **Memory starts empty** in the new account. The facts and rules Claude needs are in this file; the repo's CLAUDE.md and docs travel with the code.
6. **The old project's other documents** aren't needed for site work and weren't carried over. The three site-related notes (Sandwich references, LOOK references, the Wix baseline) are included below as Appendices B and C.
7. Cloudflare, Porkbun, Google Workspace, Calendly, Vimeo and YouTube accounts aren't affected by the Claude account move.

---

## 18. Sources used for this file

- The old project's saved notes: the website decision log, working preferences and competitor notes.
- The old project's documents: page references for Sandwich and LOOK Studios, the Wix traffic baseline, and two early-2026 strategy documents (only as background for 5.7).
- The repo `arieverett/thrill-wave-website-wix-replicate` at commit `a885946` (Oct 6, 2026, "New post: How to Film Public Health Stories With Tribal Communities"), plus the voice guide update in `ab9d730`: CLAUDE.md, README.md, docs/VOICE.md, docs/AUTO_POST.md, docs/MIGRATION_NOTES.md, content/*.json, src/pages, src/partials, lib, functions, public/_redirects and _headers, and all 333 commits. The site was built and checked (`npm run check`: 0 errors).
- The repos `thrill-wave-website-terminal` (at `34c11d5`, Oct 6), `thrill-wave-website-pill-analytics` (at `7bc3fd1`, Oct 4) and `thrill-wave-website-orange` (at `5a15777`, Sept 29), including their history and docs.
- Google Drive: the "Website Leads" and "Wix Leads Archive" sheets (structure only) and "Thrill Wave - Website OG backup".
- The October marketing plan doc and the account's two scheduled tasks.

---

# Appendix A: Content data (from content/home.json and content/portfolio.json, Oct 6, 2026)

## Customer types (Who we serve), in site order

| # | Name (short) | URL | Tile line | Page heading | Google title (seoTitle) | Example / films |
|---|---|---|---|---|---|---|
| 1 | Film | /who-we-serve/film | We make documentaries, docuseries and shorts with filmmakers and studios, from the first treatment to the festival cut. | Patience is part of the job. | Documentary Film Production | Music Celebrations International: Ireland (`oXOPxKmigKA`); ITCA Native Vote: Your Voice, Your Power: Full Episode (`Gh67yEMyOCs`); UMOM New Day Centers: Stephanie's Story (`gHevHv0usIo`); Nektar: Mike's Story with Melanoma Treatment (`8BruwRwC9Tg`) |
| 2 | Media & publishing (Media) | /who-we-serve/media-and-publishing | We do field production, segments, promos and series for networks, public media, news outlets and publishers, delivered to broadcast spec. | Specs are specs. | Video Production for Media & Publishing | Golf Digest: What Would Bubba Watson Shoot? (`2g7dOnDKYZo`); ITCA Native Vote: Your Voice, Your Power: Full Episode (`Gh67yEMyOCs`); Relentless Beats: Gold Rush 2024 Aftermovie (`sF4KJxf99nA`); Training Mask: Learn To Breathe (`jduIrHZT0og`) |
| 3 | Nonprofits & public service (Nonprofits) | /who-we-serve/nonprofits-and-public-service | We make films for nonprofits, NGOs, tribal councils and public agencies that move people to give, join and act. | Dignity comes first. | Nonprofit & Public Service Video Production | UMOM New Day Centers: Kelly's Story (`mEfrDfPj_TA`); New Pathways For Youth: It Begins With Me (`uPjYjRDq_qU`); Paradise Valley Mountain Preserve Trust: Protect Our Land (`tkqnm36YAfM`); ITCA Native Vote: Your Voice, Your Power: Full Episode (`Gh67yEMyOCs`) |
| 4 | Schools & institutions (Schools) | /who-we-serve/schools-and-institutions | We make films for universities, schools, museums, art spaces and research centers that help people learn, visit and believe in the work. | Teach it, then show it. | Video Production for Schools & Institutions | Wonderspaces: Immerse Yourself (`n26-IyiVLsw`); ITCA TEC: Case Study Using SITREP (`vimeo:1175739079`); Nektar: Mike's Story with Melanoma Treatment (`8BruwRwC9Tg`); New Pathways For Youth: It Begins With Me (`uPjYjRDq_qU`) |
| 5 | Businesses | /who-we-serve/businesses | We make explainers, culture films and stories that connect people with what a business does, from the bakery down the street to a national company. | Your people are the story. | Business Video Production | Citgo & Brundage Bone: Premium Products, Excellent Service (`JQEb45RgaK8`); Kindred: Break the Mold (`opb_FLe4_Xo`); Rumco: Internal Operational Excellence (`S6sgi9GN9PE`); Ridgeline: Manage Your Risk, Revolutionize Your Returns (`Jqci51WSpO0`) |
| 6 | Agencies & PR firms (Agencies) | /who-we-serve/agencies-and-pr-firms | We produce for creative agencies and PR firms under your name, to your brief and on your timeline. | Your name on it. | Video Production for Agencies & PR Firms | Relentless Beats: Gold Rush 2024 Aftermovie (`sF4KJxf99nA`); Kindred: Break the Mold (`opb_FLe4_Xo`); Hypnotik: Pack it Up (`WoFqn7U9tq4`); Training Mask: Behind the Scenes (`qeCo9vV3pH8`) |

Quotes used on customer pages:
- Film: "They came in last-minute for a short film project and were amazing! Super high quality, professional and creative problem solvers when things didn't go to plan (as they sometimes tend to do on set)." (Rhys, Google review)
- Media & publishing: "The best video production company I've ever worked with; and I have a 10 year background in television production / video production." (Kent L., Thumbtack review)
- Agencies & PR firms: "We asked Thrill Wave, LLC to jump in and film a client for us when our team wasn't able to do it ourselves. They were friendly, professional, and worked with us in a limited time frame." (Video N., agency partner, Thumbtack review)

## Fields (industries), in site order

| # | Field (short) | Pillar | URL | Tile line | Page heading | Clients named | Films on the field page |
|---|---|---|---|---|---|---|---|
| 1 | Tribal Nations | Academics | /industries/tribal-nations | We make public health, education and civic films with tribal communities, told in their own voices. | Research first, then listen. | Inter Tribal Council of Arizona | ITCA WIC: Dear Mom (`QlP7wPaFcVU`); ITCA WIC: Welcome to WIC (`zLy49zenWIM`); ITCA Native Vote: Your Voice, Your Power: Full Episode (`Gh67yEMyOCs`); ITCA TEC: Case Study Using SITREP (`vimeo:1175739079`) |
| 2 | Government & Public Affairs (Government) | Academics | /industries/government-and-public-affairs | We make civic, public health and policy films for public agencies and the organizations that work alongside them. | Trust is earned, not announced. | Inter Tribal Council of Arizona, Paradise Valley Mountain Preserve Trust | ITCA Native Vote: Your Voice, Your Power: Full Episode (`Gh67yEMyOCs`); ITCA TEC: Case Study Using SITREP (`vimeo:1175739079`); ITCA WIC: Welcome to WIC (`zLy49zenWIM`); Paradise Valley Mountain Preserve Trust: Protect Our Land (`tkqnm36YAfM`) |
| 3 | Medical | Academics | /industries/medical | We make patient stories, product launches and procedure explainers with the care and accuracy medicine asks for. | The science has to be right. | Boston Scientific, Thermo Fisher, Nektar, Andres Plastic Surgery | Nektar: Mike's Story with Melanoma Treatment (`8BruwRwC9Tg`); Boston Scientific: Rezum (`ECfZ1gZtzlE`); Andres Plastic Surgery: Your Body, High Standards (`N3yfL_gk_vE`); Aurelio Physical Therapy: Fitness Forward Performance (`ASbLkvgd874`); Thrill Wave: Healthcare & Medical Supercut (`Ny-eNXzNrtA`) |
| 4 | Education & research (Education) | Academics | /industries/education-and-research | We explain science, research and learning on camera, from the lab to the classroom, in plain words. | Check the facts, then tell the story. | Nektar, Thermo Fisher, ITCA Tribal Epidemiology Center, New Pathways For Youth | ITCA TEC: Case Study Using SITREP (`vimeo:1175739079`); Nektar: Mike's Story with Melanoma Treatment (`8BruwRwC9Tg`); New Pathways For Youth: It Begins With Me (`uPjYjRDq_qU`); Medaire: Digital Assessment Kit (`ABYrJD7QISk`) |
| 5 | Tech | Academics | /industries/tech | We explain products and platforms simply, with real people at the center. | Screens don't move people. | Uber, Opendoor, Ridgeline | Ridgeline: Manage Your Risk, Revolutionize Your Returns (`Jqci51WSpO0`); Opendoor: No Trick, All Treat Case Study (`B615WegPglg`); Medaire: Digital Assessment Kit (`ABYrJD7QISk`); Uber: Driven Women (`URDFnWXJH_s`) |
| 6 | Professional Services | Academics | /industries/professional-services | We make films for financial, accounting and law firms, where trust is the product and every frame has to earn it. | Polished, but still human. | UBS, State Farm, 1st Bank | UBS & Finnerty Partners: Service Without Compromise (`Qd40htwEmJM`); Questage: Enduring Legacy (`oTBdp-MwnxA`); Payroc: Payments Simplified, For You (`d_pofos5ZLs`); Ridgeline: Manage Your Risk, Revolutionize Your Returns (`Jqci51WSpO0`) |
| 7 | Sports | Athletics | /industries/sports | We film athletes, teams and events with the same energy they bring to the field. | Game day only happens once. | NFL, UFC, Golf Digest | Training Mask: Learn To Breathe (`jduIrHZT0og`); Golf Digest: What Would Bubba Watson Shoot? (`2g7dOnDKYZo`); Fuji Sports: Brand Video (`HkZKshgwslI`); Aurelio Physical Therapy: Fitness Forward Performance (`ASbLkvgd874`) |
| 8 | Live Events | Arts | /industries/live-events | We cover festivals, concerts and conferences, from multi-camera coverage to the aftermovie everyone shares. | There's no second take. | Relentless Beats, Music Celebrations International, Wonderspaces | Relentless Beats: Decadence Arizona 2025 Aftermovie (`pDk121-TCto`); Relentless Beats: Decadence 2023 Aftermovie (`24xC8pzZNxw`); Relentless Beats: Gold Rush 2024 Aftermovie (`sF4KJxf99nA`); Wonderspaces: Immerse Yourself (`n26-IyiVLsw`) |
| 9 | Arts & culture | Arts | /industries/arts-and-culture | We film music, museums, art spaces and performances, and the artists who make them. | Let the work speak. | Wonderspaces, Music Celebrations International, Wax Society, Relentless Beats | Wax Society: Sweet Oblivion (An Underdog Overture) (`6OeZDmtqx44`); Wonderspaces: Immerse Yourself (`n26-IyiVLsw`); Music Celebrations International: Ireland (`oXOPxKmigKA`); Relentless Beats: Decadence Arizona 2025 Aftermovie (`pDk121-TCto`) |
| 10 | Food & hospitality (Food) | Arts | /industries/food-and-hospitality | We film kitchens, dining rooms, hotels and the people behind them, so people can almost taste it before they book. | Film the feeling, not the room. | High Vibe Kitchen, PB Americano | High Vibe Kitchen: Take a Little Trip (`D46bYNK_lvw`); High Vibe Kitchen: Dinner Party (`bDNn4kDE3H4`); PB Americano: In a Nutshell (`nCmXrqVTkwA`) |
| 11 | Builders & makers | Academics | /industries/builders-and-makers | We film crews, job sites, plants and the scale of the work, across construction, manufacturing and energy. | Real crews, real pride. | Rumco, Citgo & Brundage Bone, IMS Builders | Rumco: Building With Integrity (`CN1IN8xlTVg`); Rumco: Internal Operational Excellence (`S6sgi9GN9PE`); Citgo & Brundage Bone: Premium Products, Excellent Service (`JQEb45RgaK8`); IMS Builders: Built to Last (`4bg9VjczCXg`) |
| 12 | Products | Arts | /industries/products | We make launch films, product demos and social cuts that make a product the one people reach for. | You get about a second. | Kindred, Hypnotik, Neighbor | Kindred: Break the Mold (`opb_FLe4_Xo`); Hypnotik: Pack it Up (`WoFqn7U9tq4`); PB Americano: In a Nutshell (`nCmXrqVTkwA`); Neighbor: Sustainable Furniture For The Modern Home (`ACgPMAyPQeI`) |

- Quote on Live Events: "They are so talented and creative...they take our vision and really make it come to life with the videos they have created for MCI." (Kerry Y., Music Celebrations International, Thumbtack review)

## Case studies

**ITCA WIC: Dear Mom** (`/case-studies/dear-mom`, goal: Education, field: Tribal Nations, customer: Nonprofits & public service, services: Story, Production, Editing)
- Lede: Tribal mothers speak straight to other mothers, so families trust WIC enough to enroll.
- Story: The Inter Tribal Council of Arizona's WIC program had eligible families who weren't enrolling. Our SITREP research found the barrier was trust, not awareness. So we put tribal mothers on camera talking straight to other mothers, with no narration and no institutional voice, and we shot them in unbroken takes so they read as neighbors.
- SITREP (situation / finding / what we made): When ITCA came to us, its WIC program needed more families enrolled. Participation had been falling even though plenty of families were eligible. | Our research found that many tribal members linked WIC with government surveillance. The barrier wasn't awareness, it was trust. | So we filmed tribal mothers speaking straight to camera in unbroken takes, with no narration and no institutional framing.
- Main film: YouTube `QlP7wPaFcVU`
- Stat boxes: +1.3% = ITCA WIC participation, FY2024 to FY2025: its first rise after two years of decline (source: USDA); 6,430 = Average women, infants and children on ITCA WIC each month in FY2025 (source: USDA); +9.7% = WIC participation nationwide, FY2022 to FY2025 (source: USDA)

**Relentless Beats: Decadence Arizona** (`/case-studies/decadence-arizona`, goal: Exposure, field: Live Events, customer: Businesses, services: Production, Editing)
- Lede: We cut two nights at Phoenix Raceway into an aftermovie that sells next year's festival.
- Story: Relentless Beats' New Year's Eve festival takes over Phoenix Raceway for two nights. Our aftermovie lets fans relive it, and it puts next year's festival in front of everyone who missed it.
- Main film: YouTube `pDk121-TCto`
- Stat boxes: 50,000 = Fans over two nights in 2025 (source: EDM Maniac); 10 yrs = Decadence celebrated its tenth year in 2024 (source: Housewub); 4 = Stages across Phoenix Raceway, up from its early Rawhide days (source: EDM Maniac)

**UBS & Finnerty Partners: Service Without Compromise** (`/case-studies/service-without-compromise`, goal: Sales, field: Professional Services, customer: Businesses, services: Production, Editing)
- Lede: We made a team film for a UBS Private Wealth Management team, so prospects feel the service first.
- Story: Finnerty Partners is a UBS Private Wealth Management team whose clients expect the very best. We made a team film that lets prospective clients feel that service before the first meeting.
- Main film: YouTube `Qd40htwEmJM`
- Stat boxes: $914M = Client assets the team oversees (June 2025) (source: Forbes); #11 = William Finnerty on Forbes' 2026 Best-in-State list, D.C. (source: Forbes); $5M = Minimum for a new client relationship (source: Forbes)

**ITCA TEC: Vaccine education** (`/case-studies/vaccine-education`, goal: Awareness, field: Tribal Nations, customer: Nonprofits & public service, services: Story, Production, Editing)
- Lede: Tribal health leaders explain vaccines to their own communities, in their own words.
- Story: ITCA's Tribal Epidemiology Center needed vaccine education for communities with good reason to distrust government health programs. Standard messaging had backfired, so our research pointed us to tribal health leaders and community members telling it in their own words. This breakdown walks through every choice we made.
- SITREP (situation / finding / what we made): ITCA's Tribal Epidemiology Center needed vaccine education for communities with good reason to doubt government health programs. | Our research showed that standard messaging had backfired, and that people needed to hear from their own leaders rather than outside authorities. | So we filmed tribal health directors and community members on location, speaking in their own words.
- Main film: Vimeo `1175739079`
- Stat boxes: 1.4x = Flu hospitalization rate for American Indian and Alaska Native adults compared with White adults, 2009 to 2023 (source: CDC); 35% = American Indian and Alaska Native adults who got a flu shot in the 2023 to 2024 season (source: CDC); 21 = Tribal nations in the Inter Tribal Council of Arizona (source: ITCA)

**Opendoor: No Trick, All Treat** (`/case-studies/no-trick-all-treat`, goal: Exposure, field: Tech, customer: Businesses, services: Production, Editing)
- Lede: We filmed Opendoor's family pop-up in Phoenix so the fun reached far beyond the families who came.
- Story: Opendoor started in Phoenix, and a family pop-up event was a chance to show up for the community in person. We filmed it so the fun reached far beyond the families who came, then cut the day into a case study.
- Main film: YouTube `B615WegPglg`
- Stat boxes: +36% = Opendoor revenue, Q1 to Q2 2025, to $1.6 billion (source: Opendoor); +46% = Homes Opendoor sold, Q1 to Q2 2025 (4,299) (source: Opendoor); +264% = Opendoor's stock gain in 2025 (source: The Motley Fool)

## Work page (/portfolio): 3 films per field, no repeats

| Field | Films (client: title, YouTube ID) |
|---|---|
| Tribal Nations (#tribal-nations) | ITCA WIC: Dear Mom (`QlP7wPaFcVU`); ITCA Native Vote: Your Voice, Your Power: Full Episode (`Gh67yEMyOCs`); ITCA TEC: Recommended Respiratory Vaccinations (`3hlumlH16HI`) |
| Government & Public Affairs (#government-and-public-affairs) | Paradise Valley Mountain Preserve Trust: Protect Our Land (`tkqnm36YAfM`); ITCA TEC: Contact Your Healthcare Provider (`_OCpwTAXRNk`); UMOM New Day Centers: Stephanie's Story (`gHevHv0usIo`) |
| Medical (#medical) | Boston Scientific: Rezum (`ECfZ1gZtzlE`); Andres Plastic Surgery: Your Body, High Standards (`N3yfL_gk_vE`); Thrill Wave: Healthcare & Medical Supercut (`Ny-eNXzNrtA`) |
| Education & research (#education-and-research) | Nektar: Mike's Story with Melanoma Treatment (`8BruwRwC9Tg`); Medaire: Digital Assessment Kit (`ABYrJD7QISk`); ITCA TEC: Talk to Your Healthcare Provider (`zs1_1xC4My8`) |
| Tech (#tech) | Ridgeline: Manage Your Risk, Revolutionize Your Returns (`Jqci51WSpO0`); Uber: Driven Women (`URDFnWXJH_s`); Payroc: Payments Simplified, For You (`d_pofos5ZLs`) |
| Professional Services (#professional-services) | UBS & Finnerty Partners: Service Without Compromise (`Qd40htwEmJM`); Questage: Enduring Legacy (`oTBdp-MwnxA`); Thrill Wave: Show Your Practice To The World (`EgloZ5_aPXs`) |
| Sports (#sports) | Training Mask: Learn To Breathe (`jduIrHZT0og`); Golf Digest: What Would Bubba Watson Shoot? (`2g7dOnDKYZo`); Aurelio Physical Therapy: Fitness Forward Performance (`ASbLkvgd874`) |
| Live Events (#live-events) | Relentless Beats: Decadence Arizona 2025 Aftermovie (`pDk121-TCto`); Relentless Beats: Decadence 2023 Aftermovie (`24xC8pzZNxw`); Relentless Beats: Gold Rush 2024 Aftermovie (`sF4KJxf99nA`) |
| Arts & culture (#arts-and-culture) | Wonderspaces: Immerse Yourself (`n26-IyiVLsw`); Music Celebrations International: Ireland (`oXOPxKmigKA`); High Vibe Kitchen: Take a Little Trip (`D46bYNK_lvw`) |
| Food & hospitality (#food-and-hospitality) | EXP Trips: Explore More (`mxQFKiYivmI`); High Vibe Kitchen: Dinner Party (`bDNn4kDE3H4`); PB Americano: In a Nutshell (`nCmXrqVTkwA`) |
| Builders & makers (#builders-and-makers) | Rumco: Building With Integrity (`CN1IN8xlTVg`); Citgo & Brundage Bone: Premium Products, Excellent Service (`JQEb45RgaK8`); Neighbor: Sustainable Furniture For The Modern Home (`ACgPMAyPQeI`) |
| Products (#products) | Kindred: Break the Mold (`opb_FLe4_Xo`); Hypnotik: Pack it Up (`WoFqn7U9tq4`); Fuji Sports: Brand Video (`HkZKshgwslI`) |

Homepage "Our work" carousel (portfolio.json > featured): UBS & Finnerty Partners: Service Without Compromise (`Qd40htwEmJM`); Andres Plastic Surgery: Your Body, High Standards (`N3yfL_gk_vE`); Rumco: Building With Integrity (`CN1IN8xlTVg`); Music Celebrations International: Ireland (`oXOPxKmigKA`); Relentless Beats: Decadence Arizona 2025 Aftermovie (`pDk121-TCto`); ITCA WIC: Dear Mom (`QlP7wPaFcVU`); Boston Scientific: Rezum (`ECfZ1gZtzlE`); Training Mask: Learn To Breathe (`jduIrHZT0og`); High Vibe Kitchen: Take a Little Trip (`D46bYNK_lvw`)

## Services (content/home.json > services)

1. **Story**: We research your world, find the idea, write it and plan where the film will live. Longer line: Every good film starts with knowing who it's for and what it has to do, and we find that out by asking good questions and checking our sources. Our SITREP research into your craft, your peers and your industry points us to the story worth telling, and then we write it and plan where it will play. Includes: SITREP research, concepts, treatments, scripts, storyboards, distribution plans.
2. **Production**: We plan the shoot and run it: casting, locations, directing, camera, light and sound, on the ground and in the air. Longer line: This is everything from the first call sheet to the last shot. We find the right people and places, then bring cinema cameras, lighting, sound and aerials, run by a crew with a decade in the field. Includes: Producing, casting, locations, permits, schedules, directing, cinematography, lighting, sound, drone, cable cam, high-speed rigs.
3. **Editing**: We cut, color and finish the film, then make a version for every screen. Longer line: This is where the story comes together. We edit, color, mix and add graphics, then cut a version for every place the film needs to play. Includes: Editing, color grading, mixing, motion graphics, subtitles, social cuts.
4. **Photography**: We shoot stills with the same eye: brand imagery, portraits, products and behind the scenes. Longer line: Our stills come from the same eye as our films. We can shoot them alongside the video or on their own. Includes: Brand imagery, portraits, products, behind the scenes.
5. **Rentals**: You can rent our cinema cameras, lenses and lighting, with or without our crew. Longer line: Our own cinema kit is available to rent, on its own or with our crew to run it. Includes: Cinema cameras, lenses, lighting, crew optional.

## Process steps

1. **Idea**: Bring us an idea, a brief or a blank page, and we'll find the story in it together. (Process page: It starts with a call. Bring us a spark, a brief or a blank page, and we'll talk it through until we know what's worth saying.)
2. **Discovery**: We listen first: to your people, your history and what you hope the film will do. (Process page: We listen first: to your people, your history, the people you want to reach and what you hope to leave behind. You come away with a clear plan, a schedule and a budget.)
3. **SITREP**: We research your craft, your peers and your industry, then bring you a point of view on the story. (Process page: SITREP is our research. Before we film, we dig into your craft, your peers, your industry and the wider sector, like an outside R&D department that cares about your story as much as you do. Then we bring you a point of view and help steer the film toward the story worth telling.)
4. **Production**: Our crew shoots it with cinema cameras and real care, on location or in the studio. (Process page: Our crew shoots with cinema cameras, lighting and sound, on location or in the studio.)
5. **Completion**: We edit, color, mix and deliver it, and we make it to hold up for years. (Process page: We edit, color and mix the film, then cut a version for every place it needs to play. We make it to hold up for years, not just for launch week.)

Client logo marquee: Relentless Beats, NFL, State Farm, NBC, UFC, Thermo Fisher Scientific, Golf Digest, Boston Scientific, Uber, UBS, 1st Bank, Aura

---

# Appendix B: Page reference notes from the old project

## B1. Page references: Sandwich (sandwich.co)

Screenshots Ari shared on Oct 1, 2026 as the voice and style reference for building Thrill Wave's new pages (Services, Who we serve, Process, Case studies, and later an FAQ). Look Studios screenshots came next as the second reference. Adapt the patterns to Thrill Wave's own design system (black, white, one red accent, League Spartan + Montserrat); don't copy Sandwich's rainbow colours or wording.

### Voice
- Short, confident, plain words, first person plural. Sentences you could say out loud.
- Light, self-aware humor that never undercuts the work ("Also, clients with money." / "So, a million dollars. Just kidding, but...").
- Headlines are a quick question and an answer, or a promise: "Metrics? Yeah, we got 'em." / "This should be simple." / "We got numbers too." / "Say hello." / "It's all about the people."
- Specific numbers stated plainly (videos made, clients, years, results).
- Every page ends on the same easy ask: "Ready to get started? Get in touch."

### Page patterns
- **Case studies ("Metrics? Yeah, we got 'em.")**: a short intro, then one block per client: a film still, the client name as a big heading, two or three sentences of story (the problem, what they made, what happened) and a "Watch [client]" link. After each: a row of bordered stat boxes (a huge number with a small caps label, e.g. "5x return on ad spend"), sometimes a client pull quote with attribution, and press headline tiles (an outlet's logo with the article title).
- **FAQ**: big question headings with a coloured bar at the left, short honest answers, including price ("Typically, $X is a good starting point"), what kinds of clients they like, whether they work with agencies, and "Is that it?" pointing to contact. The contact page links a featured FAQ card.
- **Contact ("Say hello.")**: one friendly paragraph on what to include (what you're working on, when, for how much), the email big and centred, then "What to expect" (who answers, how fast, what happens next).
- **About ("We understand what you're building.")**: a three-paragraph story beside one playful photo, a press tile, then "It's all about the people.": a team grid of colour-tinted portraits; clicking one opens a short bio card. Ends with "Looking to grow." linking to jobs.
- **Clients**: big featured-client banners (film still + client logo + "See featured client"), then a dense logo wall ("So many clients.").
- **Work**: title, two short paragraphs, category tabs (Featured, TV spots, Explainers, Testimonial, Brand, Animation), an edge-to-edge 4-across grid with "Client Title" laid over each still.
- **Home**: "Hello. We're Sandwich." with a one-line promise, then full-bleed stills alternating with short headline + paragraph + "See our ..." link.

### Ideas for Thrill Wave (Oct 1, 2026)
- Case studies page: client blocks with ITCA (TEC, WIC, Your Voice Your Power) first, red-accent stat boxes, and SITREP findings as the "why it worked". Needs real numbers from the team.
- An FAQ page: Thrill Wave already has FAQ answers in content/faq.json (used for llms.txt). Good for search and AI answers.
- Contact page: a "What to expect" paragraph after the form.

(Since then: the case studies, FAQ and "What to expect" were all built. Unlike Sandwich, Thrill Wave's contact ask leaves budget out (no budget or timeline fields, Oct 3), and price questions point people to message Thrill Wave (Oct 5).)

## B2. Page references: LOOK Studios (lookstudios.co)

Screenshots Ari shared on Oct 1, 2026. LOOK is a Phoenix video production company (a direct local competitor). Ari's take: far too much content and some obvious AI filler; prefer Sandwich's brevity, just a little more. Use LOOK for structure ideas only, not length or tone.

### Worth borrowing
- **Case study detail page** (for the later breakout pages): full-bleed hero still with breadcrumb (Work / Client), service tags, the client name huge, one-line summary, and a box of three production facts (production days, shoot locations, crew size). Below: "About the project" and "Final results" (one short paragraph each), a deliverables checklist (e.g. 3 vertical brand films, 3 :30 social cuts, testimonial cut, photo selects), "Services used" links, and a client quote band with name and title.
- **Services page**: one hero line ("End-to-end video production services."), then a catalog where each format gets a still, two lines, typical length, timeline and a "from $" price. Then the process (Discover, Plan, Produce, Distribute) and a short "what a production looks like" trio (director on every job, in-house studio and gear, transparent cost and scope).
- **Who we help pages** (one per audience: brands, agencies, non-profits, companies): the challenges that audience faces, what we bring, the most popular services for them with starting prices, a few stats, recent projects, a short FAQ.
- **FAQ**: LOOK runs dozens of FAQs on its services page, mostly worded around Phoenix and Arizona searches. A clear sign the local competition is chasing search and AI answers with Q&A content.

### Avoid
- Page length and repeated sections; generic industry stats from third parties used as filler; FAQ answers that say nothing.

(Since then, the voice guide (Oct 3) ruled out LOOK's "what makes it tricky" cards, the format catalog with lengths and "from $" prices, walls of FAQs and filler stats, and on Oct 4 the site's own "a founder on every project" claims were dropped.)

---

# Appendix C: Wix-era traffic baseline (recorded Sept 28, 2026)

Taken from Wix Analytics screenshots on the day the new site went live on Cloudflare Pages. Use it as the "before" when judging the new site.

**All time on Wix (Sep 1, 2023 to Sep 28, 2026)**
- Sessions 5,514; unique visitors 4,390 (94% new, 6% returning)
- Sources: Direct 1,958 · Facebook (Paid) 1,201 · Google (Organic) 818 · Instagram (Organic) 628
- Devices: Desktop 52%, Mobile 45%, Tablet 3%
- Countries: US 4,101; then Russia, India, China, Pakistan, Singapore (mostly bot traffic)

**Calendar 2025**
- Sessions 1,009 (down 45% vs 2024), about 84 a month; unique visitors 893 (down 42%)
- Sources: Direct 545 (-7%) · Google 231 (-28%) · Instagram 86 (-80%) · Yandex 21
- Devices: Desktop 74%, Mobile 26%
- Paid Facebook was historically the number two source.

**Last 30 days before launch (Aug 30 to Sep 28, 2026)**
- Sessions 108 (+21%); top pages: homepage 91, /portfolio 23, /contact 12
- Bounce rate 69.7%; average session 6m 45s; 1.4 pages per session
- Google search clicks: 2, all brand searches ("thrill wave", "tony swann", "thrillavanilla")
- Blog posts: 0 to 2 views each

**Leads on Wix**
- About 75 contacts from forms and chat since 2023; roughly 6 likely and 11 possible real prospects, the rest vendor pitches and spam
- See "Thrill Wave - Wix Leads Archive 2023-2026" in the Thrill Wave shared drive

**Targets to beat on the new site** (Cloudflare Web Analytics + Search Console + the Website Leads sheet)
- More than 84 sessions a month (October 2026 goal: 120)
- Google clicks from non-brand searches (e.g. "video production Phoenix"); zero at launch
- Real leads every month through the site forms; Wix produced only a handful per year

---

# Appendix D: docs/AUTO_POST.md (the weekly post playbook, as of Oct 6, 2026)

A scheduled task runs this every Tuesday morning (Phoenix time; weekly since Ari's request on Oct 5, 2026). It writes one new Intel post, checks it and publishes it to thrillwave.com. Partners can change anything here in plain English ("make the posts shorter", "more posts about editing", "pause the posts") and Claude updates this file or the scheduled task.

## What these posts are

Read `docs/VOICE.md` first: it's the house voice for everything on the site, posts included. This playbook adds the post-specific rules.

Education and expertise first, search second, selling never. Each post teaches a curious reader something real about the art, craft, science or tech of filmmaking and communication, the way film nerds talk to each other: specific, generous and a little obsessed.

Thrill Wave is a production company and a team of creatives (writers, producers, directors, cinematographers, editors, sound people) who care about the world, people and stories, and about the communication, tech and medicine that make the world go round. Posts sound like us talking shop, not like a company pitching.

- Never say how many people Thrill Wave is, or call it small, tiny or lean (no "the three of us", "three partners", "small team"). Say "we", "our founders" or "our crew".
- No hard selling, pricing, promo or "why you should hire a video team". Never "marketing agency" or "ad agency". Prefer films, stories, work and craft over "content" and "campaign".
- Never mention AI or how the post was made.
- Craft posts: at most one short, soft line at the very end that points somewhere useful (a related film, `/portfolio`, `/sitrep` or `/contact`). The page already ends with a "Start a project" block.
- Field and customer posts (see step 2) may close with a short section speaking to that reader directly and inviting them to message us. Write it with good intentions: it should read like advice from people who know their world, not a pitch.

## 1. Get set up

- Clone the repo (`arieverett/thrill-wave-website-wix-replicate`), `npm ci`, read `CLAUDE.md`, then `npm run build`.
- Read `dist/llms.txt`, `content/home.json` and `content/portfolio.json`: who Thrill Wave is, its films, clients and industries.
- List every existing post (`content/posts/*.md`: titles, dates, categories) so the new one doesn't repeat a topic and the categories rotate.

## 2. Pick the topic

**Alternate two kinds of posts week to week** (check the last post's kind and do the other):

- **Craft posts** (the veins below): the art, science and tech of filmmaking and communication.
- **Field and customer posts:** one post about how film and storytelling work in one of our fields (`industries` in `content/home.json`) or for one of our customer types (`audiences`), rotating so every field and customer type gets covered before any repeats. Teach that reader something genuinely useful about telling their story on film: what makes stories in their world hard to tell, what kinds of films serve them (explainers, documentary portraits, training films, event films...), how a shoot in their setting actually works (a clinic, a courtroom, a lab, a stadium, a council chamber), what to prepare, and what we've learned doing it. Show our capabilities through specifics and our real work (films from that field's `work` list in `content/home.json`, embedded with `{{youtube:ID}}`, and its case study if there is one), never through claims. Link to that field's or customer type's page (`/industries/<slug>` or `/who-we-serve/<slug>`). End with a short section addressed to that reader ("If you run a clinic...", "If you're a tribal health department...") that invites them to [message us](/contact) about their story. Educational first, a little sales-y at the very end at most, always with good intentions. Use the categories Industries or Planning a Video.

For craft posts, pick one specific question a filmmaker, producer, communicator or curious client would actually search or ask an AI assistant. Niche is good: a narrow, deep, correct answer beats a broad, shallow one. Rotate through these veins:

- **Gear and glass:** specific lenses, cameras and tools. Angénieux zooms and anamorphics, Cooke, Zeiss, Atlas, Sirui; Sony FX9, FX6, FX3, Burano and Venice; anamorphic squeeze factors and desqueeze; ND filters; gimbals and drones.
- **How-tos for working crews:** setting up vertical anamorphic on a Sony FX9; matching two camera bodies in color; recording clean dialogue in a loud room; lighting an interview in an Arizona office with a west-facing window.
- **Science and engineering:** sensor size and crop factor, dynamic range and stops, global vs rolling shutter, bit depth and codecs, lens coatings and how glass is made, how the eye perceives motion and color, why 24 fps and the 180-degree shutter.
- **Intersections:** where other fields push film forward, explained carefully. New sensor tech from phones reaching cinema cameras, display and rendering advances (for example how Apple renders "liquid glass" in software vs how real glass bends light), medical imaging and optics, audio tech, color science on streaming platforms.
- **The disciplines and their woes:** the writer who leans on exposition, the producer who can't see the whole story, the editor's discipline of killing darlings, the director's prep, the DP's fight with the schedule, the sound mixer nobody thanks.
- **Art and film history:** a technique, a famous shot or a movement, what it teaches now.
- **Communication that matters:** how to film patients, scientists, engineers and communities with honesty and care; explaining complex medical or technical ideas on camera; the Arizona light and landscape.
- Thrill Wave's own work, when it genuinely illustrates the point (a film from `content/portfolio.json`, a case study, the SITREP).

## 3. Research before writing

- Web search every fact, spec, date and number, and confirm it on the original source (the manufacturer's spec page, the paper, the official announcement, a respected trade outlet like American Cinematographer, ProVideo Coalition, Newsshooter or CineD). If two sources disagree, use the manufacturer or say so.
- Never invent specs, prices, quotes, studies, clients, results or Thrill Wave experiences. If you can't verify it, leave it out.
- Keep a list of sources as you go: they appear at the end of the post.

## 4. Write it

- 700 to 1,200 words. Brief, concise, no filler: every sentence earns its place. Title under 65 characters, specific and plain (the question people ask is often the best title).
- Voice: first person plural, warm and confident, nerdy in the best way, a little humor, a "heart of gold" tone. Explain jargon the first time in a few words, then use it.
- Structure: a short opening that states the problem or question, then `##` sections, then a short close.
- **Something visual in nearly every section** (roughly every two or three short paragraphs), mixing types, at least four per post:
  - a table (specs, comparisons, settings, a checklist of numbers),
  - a chart made with `scripts/chart.py` (only sourced numbers; source in the caption),
  - a big-number callout: `> **2x** squeeze: an anamorphic lens fits twice the width of view onto the same sensor.`,
  - a photo or film frame with a caption (see step 5),
  - one of our films embedded with `{{youtube:ID}}` on its own line, when it fits.
  Use real numbers, percentages, measurements and dollars wherever they teach something (focal lengths, stops, millimeters, frame rates, bit rates, kilograms, years).
- Link to 1 or 2 relevant pages on the site where natural, and to sources inline where a claim comes from them.
- End with a `## Sources` list: `- [Title](URL), Publisher`.
- No em dashes or spaced dashes (comma, colon or new sentence). No `<br>`. Keep Phoenix and Arizona mentions where they're natural, never stuffed.

Front matter:

```
---
title: "..."
description: "One plain sentence for Google, 120 to 155 characters."
date: <today, YYYY-MM-DD>
author: Thrill Wave
cover_image: <see step 5>
cover_alt: "What the cover image shows, in a short phrase"
categories: [<one or two of: Gear and Tech, Craft, Storytelling, Industries, Arizona, Planning a Video>]
---
```

The file name is the slug: lowercase words joined by hyphens, under 60 characters, `content/posts/<slug>.md`.

## 5. Images (cover and in the post)

The workspace can't download images from other sites, so outside images are shown directly from their source. Pick in this order, choosing whatever fits the topic best:

1. **Our library:** stills partners add to `public/images/blog/library/`, or a fitting photo already in `public/images/blog/` (avoid covers used by the last few posts). For a cover, save `.jpg` (1200px) + `.webp` (1200px) + `-card.webp` (720px) with Pillow in `public/images/blog/<slug>/`.
2. **A frame from one of our films:** YouTube `https://i.ytimg.com/vi/<ID>/maxresdefault.jpg` (IDs in `content/portfolio.json`; `maxres1.jpg` to `maxres3.jpg` give other frames, but only use those for IDs the site already uses that way, e.g. a `still` of `ID:2` in `content/home.json`). Caption it with the film's name.
3. **Stock from Unsplash** (free Unsplash License only, never Unsplash+ / plus.unsplash.com): find a photo with WebFetch on `https://unsplash.com/s/photos/<search-terms>`, take its `https://images.unsplash.com/photo-...` address and add `?w=1600&h=900&fit=crop&q=80&auto=format` (in-post images may use other sizes, always with both `w` and `h`). Caption: `*Photo: <Photographer> on [Unsplash](<photo page URL>).*`. Pick photos that look real and cinematic, not cheesy stock.

**Image style (Ari, Oct 4, 2026):** simple, uncluttered photos with one clear subject, like the vertical anamorphic post's cover (a lens on a table) or the Unsplash covers chosen Oct 4, 2026: a stethoscope, a kettlebell, an empty chair on a lit set. Real photos only: never AI-generated images, illustrations or busy, cheesy stock. Our own set photos (the crew shots on the Phoenix metro and hiring posts) always beat stock.

In the post, every image is followed on the next line by an italic caption: `![alt text](src)` then `*caption*`. Alt text describes the image; the caption adds meaning or credit.

## 6. Check and publish

- `npm run check` must report 0 errors and no warnings about the new post.
- Re-read the built page in `dist/post/<slug>.html`: facts against sources, voice, every image and link, at least four visuals.
- Commit to `main` ("New post: <title>") and push. Cloudflare publishes it in a minute or two.
- If something can't meet these rules (a fact you couldn't verify, no fitting image), cut it. If the post as a whole can't meet them, push it to a branch named `draft/<slug>` instead of `main` and say why.

## 7. Report

Send the partners a short message: the post title, its link (`https://thrillwave.com/post/<slug>`), one line on why this topic, and anything worth a second look.
