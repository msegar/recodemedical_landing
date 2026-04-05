# ReCODE Medical Acquisition Page Redesign

## Context

The current acquisition announcement page at recodemedical.com serves as a public-facing landing page for anyone searching for ReCODE Medical. Existing users (physicians) were already notified directly via email with full details. This page is for casual searchers, industry people, potential partners, and press.

An expert panel review scored the current page at 48.75/100, identifying issues with messaging gaps, missing trust signals, and flat visual structure. The acquirer cannot be named yet; a future press release will provide full details.

## Goals

- Fix copy gaps identified by the panel (data privacy, acquirer disclosure, self-undermining language)
- Add email capture for future product launch notifications (Supabase-backed)
- Apply subtle structural polish without changing the overall minimal aesthetic
- Keep it clean and simple. This is not a design showcase.

## What stays the same

- Dark navy/gold color palette (all existing CSS custom properties)
- Cormorant Garamond (serif) + Outfit (sans) typography
- Noise texture + radial glow background effects
- Fade-in animations with cascading delays
- General page structure (hero, letter, team, footer)
- Next.js 16 + Tailwind 4 tech stack
- Docker/Dokploy deployment

## Copy changes

### Hero section (minor change)
```
AN IMPORTANT UPDATE
ReCODE Medical Has Been Acquired
The next chapter begins under new ownership.
```

The current hero also has a sub-line: "The ReCODE Chat app has been retired as the technology moves forward under its new owner." This is removed from the hero. The retirement and transition info is now in the body letter's second paragraph, where it flows better.

### Body letter (revised)
```
ReCODE Medical is pleased to announce that it has been acquired. ReCODE Chat
was built to give physicians and medical coders a faster, AI-powered way to
navigate the complexities of medical coding. The platform was adopted by
physicians and clinics across the United States, confirming a clear demand for
smarter tools in the medical coding workflow.

The ReCODE Chat application has been retired, and the technology will continue
under a new brand. A formal press release with full details will be announced
in the coming weeks.

No user data was shared with or transferred to the acquiring party.

We are grateful to every physician and care team who trusted ReCODE Chat in
their practice. Your willingness to adopt new technology and share candid
feedback made this outcome possible.
```

Changes from current:
- Removed "The ReCODE name will not carry forward" and replaced with "the technology will continue under a new brand"
- Added press release teaser sentence
- Added data privacy statement as its own paragraph
- Removed redundant closing "Thank you for being part of this journey" (gratitude paragraph covers it)
- Reordered so the narrative flows: acquisition news, product story, transition details, gratitude

### Team section (unchanged content, new visual treatment)
```
FROM THE ENTIRE TEAM

Matt Segar, MD          Founder & CEO           [LinkedIn] [X]
Luke Rouleau            Founder & CTO           [LinkedIn] [X]
Nick Segar, MBA         Chief Strategy Officer   [LinkedIn] [X]
```
Each name and title on separate lines within a card. Social icons below the title.

### Footer
```
The mission continues.
© 2026 ReCODE Medical
```

### Meta
- Page title: "ReCODE Medical — A New Chapter" (was "ReCODE Medical — Acquired")
- Meta description: "ReCODE Medical has been acquired. The technology continues under new ownership."

## Structural polish

### 1. Founder cards
Each founder gets a card with a subtle gold border (`rgba(184, 151, 106, 0.3)`), rounded corners. Cards arranged in a horizontal row on desktop, stacked on mobile. Each card contains name, title, and LinkedIn/X icon links (already present in current site).

### 2. Section breaks (two-tier system)
- **Major breaks** (three-dot gold separator, echoing the logo's three-dot motif):
  1. Between hero and body letter
  2. Between body letter and email capture section
- **Minor breaks** (gradient gold line, `linear-gradient(to right, transparent, rgba(184, 151, 106, 0.4), transparent)`):
  1. Between email capture section and team section
  2. Before the footer

### 3. Email capture
- Placement: Between the letter body and the team section
- Heading: "Stay informed"
- Subtext: "Sign up to be notified when the new product launches."
- Form: Inline email input + "Notify me" submit button
- Input styling: Faint gold border, dark background, matching existing palette
- Button styling: Gold accent background (`rgba(184, 151, 106, 0.2)`) with gold border and text
- Layout: Single row on desktop, stacked on mobile
- Backend: POST to a Next.js API route that inserts into a Supabase table
- Table schema: `email_signups` with columns `id` (uuid, PK), `email` (text, unique), `created_at` (timestamptz, default now())
- Validation: Client-side email format check, server-side duplicate handling (upsert or ignore)
- Success state: Replace form with "You're on the list." confirmation text
- Error state: Inline error message below the input

### 4. Page title and meta
- `<title>`: "ReCODE Medical — A New Chapter"
- `<meta name="description">`: "ReCODE Medical has been acquired. The technology continues under new ownership."
- OG tags updated to match

## Technical implementation notes

- All changes are in `src/app/page.tsx` (copy + structure), `src/app/globals.css` (section break styles, founder card styles, email form styles), and `src/app/layout.tsx` (meta/title)
- New file: `src/app/api/signup/route.ts` for the Supabase email capture endpoint
- New dependency: `@supabase/supabase-js`
- Environment variables needed: `NEXT_PUBLIC_SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY` (provided by user via .env)
- The Supabase table `email_signups` needs to be created (migration or manual)

## Out of scope

- Custom logo/brand mark assets (current inline SVG dots + text is fine)
- Photography or imagery
- Multiple pages or routing
- Analytics changes (GA already in place)
- Any dramatic layout or palette changes
