# Acquisition Page Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Update the ReCODE Medical acquisition landing page with revised copy, styled section breaks, founder cards, email capture (Supabase), and updated meta tags.

**Architecture:** Single-page Next.js app. Copy and layout changes go in `page.tsx`, new CSS classes in `globals.css`, meta updates in `layout.tsx`. A new API route (`/api/signup`) handles email capture via Supabase. The email form is a client component extracted to its own file.

**Tech Stack:** Next.js 16, React 19, Tailwind CSS 4, Supabase JS client, TypeScript

---

## File Map

| File | Action | Responsibility |
|------|--------|---------------|
| `src/app/layout.tsx` | Modify | Page title, meta description, OG/Twitter tags |
| `src/app/globals.css` | Modify | Section break styles, founder card styles |
| `src/app/page.tsx` | Modify | Revised copy, section breaks, founder cards, email capture placement |
| `src/app/signup-form.tsx` | Create | Client component for email capture form with state management |
| `src/app/api/signup/route.ts` | Create | POST endpoint that inserts email into Supabase |
| `.env.local` | Create | Supabase URL and service role key (user provides values) |

---

### Task 1: Update meta tags in layout.tsx

**Files:**
- Modify: `src/app/layout.tsx:19-36`

- [ ] **Step 1: Update the metadata export**

Replace the existing `metadata` export in `src/app/layout.tsx` (lines 19-36) with:

```tsx
export const metadata: Metadata = {
  title: "ReCODE Medical \u2014 A New Chapter",
  description:
    "ReCODE Medical has been acquired. The technology continues under new ownership.",
  openGraph: {
    title: "ReCODE Medical \u2014 A New Chapter",
    description:
      "ReCODE Medical has been acquired. The technology continues under new ownership.",
    type: "website",
    url: "https://recodemedical.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "ReCODE Medical \u2014 A New Chapter",
    description:
      "ReCODE Medical has been acquired. The technology continues under new ownership.",
  },
};
```

- [ ] **Step 2: Verify the build**

Run: `cd /Users/matt/Dropbox/Research/ReCODEMedical/website && npm run build`
Expected: Build succeeds with no errors.

- [ ] **Step 3: Commit**

```bash
git add src/app/layout.tsx
git commit -m "Update page title and meta tags for acquisition page redesign"
```

---

### Task 2: Add section break and founder card CSS

**Files:**
- Modify: `src/app/globals.css` (append after scrollbar styles at line 96)

- [ ] **Step 1: Add new CSS classes to globals.css**

Append the following after the scrollbar styles (after line 96):

```css
/* Section breaks */
.divider-dots {
  display: flex;
  justify-content: center;
  gap: 6px;
  padding: 2rem 0;
}

.divider-dots span {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--gold-dim);
}

.divider-line {
  height: 1px;
  max-width: 200px;
  margin: 2rem auto;
  background: linear-gradient(
    to right,
    transparent,
    rgba(184, 151, 106, 0.4),
    transparent
  );
  border: none;
}

/* Founder cards */
.founder-card {
  border: 1px solid rgba(184, 151, 106, 0.3);
  border-radius: 12px;
  padding: 1.5rem 1.25rem;
  min-width: 180px;
  flex: 1;
}

/* Email capture */
.signup-input {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(184, 151, 106, 0.3);
  border-radius: 6px;
  padding: 0.6rem 0.8rem;
  color: var(--cream);
  font-family: var(--font-sans);
  font-size: 0.9rem;
  outline: none;
  flex: 1;
  min-width: 0;
}

.signup-input::placeholder {
  color: rgba(184, 151, 106, 0.4);
}

.signup-input:focus {
  border-color: var(--gold);
}

.signup-button {
  background: rgba(184, 151, 106, 0.2);
  border: 1px solid rgba(184, 151, 106, 0.4);
  border-radius: 6px;
  padding: 0.6rem 1.2rem;
  color: var(--gold);
  font-family: var(--font-sans);
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  white-space: nowrap;
  transition: background 0.2s;
}

.signup-button:hover {
  background: rgba(184, 151, 106, 0.3);
}

.signup-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
```

- [ ] **Step 2: Verify the build**

Run: `cd /Users/matt/Dropbox/Research/ReCODEMedical/website && npm run build`
Expected: Build succeeds.

- [ ] **Step 3: Commit**

```bash
git add src/app/globals.css
git commit -m "Add CSS for section breaks, founder cards, and email capture"
```

---

### Task 3: Create the Supabase API route

**Files:**
- Create: `src/app/api/signup/route.ts`
- Create: `.env.local` (placeholder for user to fill in)

- [ ] **Step 1: Create the .env.local placeholder**

Create `.env.local` with placeholder values (user will replace with real credentials):

```
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url-here
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here
```

- [ ] **Step 2: Install the Supabase client**

Run: `cd /Users/matt/Dropbox/Research/ReCODEMedical/website && npm install @supabase/supabase-js`

- [ ] **Step 3: Create the API route**

Create `src/app/api/signup/route.ts`:

```ts
import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { email } = await request.json();

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );

  const { error } = await supabase
    .from("email_signups")
    .upsert({ email }, { onConflict: "email" });

  if (error) {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}
```

- [ ] **Step 4: Verify the build**

Run: `cd /Users/matt/Dropbox/Research/ReCODEMedical/website && npm run build`
Expected: Build succeeds. (The route won't work without real Supabase credentials, but it should compile.)

- [ ] **Step 5: Commit**

```bash
git add src/app/api/signup/route.ts package.json package-lock.json
git commit -m "Add Supabase email signup API route"
```

Note: Do NOT commit `.env.local`. It should already be in `.gitignore` (Next.js default).

---

### Task 4: Create the email signup form client component

**Files:**
- Create: `src/app/signup-form.tsx`

- [ ] **Step 1: Create the signup form component**

Create `src/app/signup-form.tsx`:

```tsx
"use client";

import { useState } from "react";

export default function SignupForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        const data = await res.json();
        setErrorMsg(data.error || "Something went wrong.");
        setStatus("error");
        return;
      }

      setStatus("success");
    } catch {
      setErrorMsg("Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p className="font-sans text-[1rem] text-gold">
        You&rsquo;re on the list.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex gap-3 max-w-[420px] mx-auto flex-wrap sm:flex-nowrap">
        <input
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="signup-input"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="signup-button"
        >
          {status === "loading" ? "..." : "Notify me"}
        </button>
      </div>
      {status === "error" && (
        <p className="font-sans text-[0.85rem] text-red-400 mt-2">
          {errorMsg}
        </p>
      )}
    </form>
  );
}
```

- [ ] **Step 2: Verify the build**

Run: `cd /Users/matt/Dropbox/Research/ReCODEMedical/website && npm run build`
Expected: Build succeeds.

- [ ] **Step 3: Commit**

```bash
git add src/app/signup-form.tsx
git commit -m "Add email signup form client component"
```

---

### Task 5: Update page.tsx with revised copy, section breaks, founder cards, and email capture

**Files:**
- Modify: `src/app/page.tsx` (full rewrite of the component)

- [ ] **Step 1: Replace the entire content of page.tsx**

Replace the full content of `src/app/page.tsx` with:

```tsx
import SignupForm from "./signup-form";

export default function Home() {
  return (
    <div className="relative z-[2]">
      {/* Header */}
      <header
        className="flex items-center justify-center py-10 px-8"
        style={{ animation: "fadeIn 1s ease-out" }}
      >
        <div className="flex items-center gap-2.5 font-sans font-medium text-[0.9rem] tracking-[0.25em] uppercase text-gold">
          <div className="flex flex-col gap-[3px]">
            <span className="block w-[5px] h-[5px] rounded-full bg-gold" />
            <span className="block w-[5px] h-[5px] rounded-full bg-gold" />
            <span className="block w-[5px] h-[5px] rounded-full bg-gold" />
          </div>
          ReCODE Medical
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="min-h-[85vh] flex flex-col items-center justify-center text-center px-6 sm:px-8 pb-24 pt-16">
          <p
            className="font-sans text-[0.95rem] font-medium tracking-[0.3em] uppercase text-gold mb-12"
            style={{ animation: "fadeInUp 0.8s ease-out 0.2s both" }}
          >
            An Important Update
          </p>
          <h1
            className="font-serif font-light text-white-warm leading-[1.1] tracking-[-0.01em] max-w-[800px] text-[clamp(2.8rem,7vw,5.5rem)]"
            style={{ animation: "fadeInUp 0.8s ease-out 0.4s both" }}
          >
            ReCODE Medical Has Been Acquired
          </h1>
          <p
            className="font-serif italic font-light text-cream-soft mt-8 max-w-[500px] text-[clamp(1.3rem,3vw,1.8rem)]"
            style={{ animation: "fadeInUp 0.8s ease-out 0.6s both" }}
          >
            The next chapter begins under new ownership.
          </p>
        </section>

        {/* Major break: dots */}
        <div className="divider-dots" style={{ animation: "fadeIn 1s ease-out 0.8s both" }}>
          <span />
          <span />
          <span />
        </div>

        {/* Letter */}
        <section
          className="max-w-[640px] mx-auto px-6 sm:px-8 pt-8 pb-24"
          style={{ animation: "fadeIn 1s ease-out 1s both" }}
        >
          <div className="font-serif text-[1.4rem] font-normal leading-[1.85] text-cream">
            <p className="mb-6 first-letter:font-semibold first-letter:text-[3.8rem] first-letter:float-left first-letter:leading-[0.8] first-letter:mr-[0.15em] first-letter:mt-[0.1em] first-letter:text-white-warm">
              ReCODE Medical is pleased to announce that it has been
              acquired. ReCODE Chat was built to give physicians and
              medical coders a faster, AI-powered way to navigate the
              complexities of medical coding. The platform was adopted
              by physicians and clinics across the United States,
              confirming a clear demand for smarter tools in the
              medical coding workflow.
            </p>
            <p className="mb-6">
              The ReCODE Chat application has been retired, and the
              technology will continue under a new brand. A formal
              press release with full details will be announced in the
              coming weeks.
            </p>
            <p className="mb-6">
              No user data was shared with or transferred to the
              acquiring party.
            </p>
            <p>
              We are grateful to every physician and care team who
              trusted ReCODE Chat in their practice. Your willingness
              to adopt new technology and share candid feedback made
              this outcome possible.
            </p>
          </div>
        </section>

        {/* Major break: dots */}
        <div className="divider-dots">
          <span />
          <span />
          <span />
        </div>

        {/* Email capture */}
        <section className="py-16 px-8 text-center">
          <p className="font-sans text-[0.8rem] font-normal tracking-[0.35em] uppercase text-gold-dim mb-4">
            Stay informed
          </p>
          <p className="font-serif text-[1.2rem] text-cream-soft mb-8">
            Sign up to be notified when the new product launches.
          </p>
          <SignupForm />
        </section>

        {/* Minor break: gradient line */}
        <div className="divider-line" />

        {/* Team */}
        <section
          className="py-20 px-8 text-center"
          style={{ animation: "fadeIn 1s ease-out 1.2s both" }}
        >
          <p className="font-sans text-[0.8rem] font-normal tracking-[0.35em] uppercase text-gold-dim mb-12">
            From the entire team
          </p>
          <div className="flex justify-center gap-6 flex-wrap max-w-[700px] mx-auto">
            <div className="founder-card text-center">
              <p className="font-serif font-medium text-[1.3rem] text-white-warm mb-1">
                Matt Segar, MD
              </p>
              <p className="font-sans font-light text-[0.85rem] tracking-[0.1em] uppercase text-muted">
                Founder &amp; Chief Executive Officer
              </p>
              <div className="flex justify-center gap-3 mt-3">
                <a href="https://www.linkedin.com/in/matthewsegar/" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-gold transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                <a href="https://x.com/mattsegar" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-gold transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
              </div>
            </div>
            <div className="founder-card text-center">
              <p className="font-serif font-medium text-[1.3rem] text-white-warm mb-1">
                Luke Rouleau
              </p>
              <p className="font-sans font-light text-[0.85rem] tracking-[0.1em] uppercase text-muted">
                Founder &amp; Chief Technology Officer
              </p>
              <div className="flex justify-center gap-3 mt-3">
                <a href="https://www.linkedin.com/in/luke-rouleau/" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-gold transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                <a href="https://x.com/RouleauLuke" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-gold transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
              </div>
            </div>
            <div className="founder-card text-center">
              <p className="font-serif font-medium text-[1.3rem] text-white-warm mb-1">
                Nick Segar, MBA
              </p>
              <p className="font-sans font-light text-[0.85rem] tracking-[0.1em] uppercase text-muted">
                Chief Strategy Officer
              </p>
              <div className="flex justify-center gap-3 mt-3">
                <a href="https://www.linkedin.com/in/nicholas-segar/" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-gold transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                <a href="https://x.com/NickSegar_" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-gold transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer
        className="pt-16 pb-12 px-8 text-center"
        style={{ animation: "fadeIn 1s ease-out 1.4s both" }}
      >
        <div className="divider-line" />
        <p className="font-serif italic font-normal text-[1.5rem] text-gold mt-10">
          The mission continues
        </p>
        <p className="font-sans text-[1rem] text-gold-dim mt-8 tracking-[0.1em]">
          &copy; 2026 ReCODE Medical
        </p>
      </footer>
    </div>
  );
}
```

- [ ] **Step 2: Verify the build**

Run: `cd /Users/matt/Dropbox/Research/ReCODEMedical/website && npm run build`
Expected: Build succeeds.

- [ ] **Step 3: Commit**

```bash
git add src/app/page.tsx
git commit -m "Update page copy, add section breaks, founder cards, and email capture"
```

---

### Task 6: Create Supabase table and verify end-to-end

**Files:** None (database setup)

- [ ] **Step 1: Ask user for Supabase credentials**

Ask the user to fill in `.env.local` with their real `NEXT_PUBLIC_SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` values.

- [ ] **Step 2: Create the email_signups table in Supabase**

Run this SQL against the user's Supabase project (via the Supabase MCP tool or dashboard):

```sql
CREATE TABLE IF NOT EXISTS email_signups (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now()
);
```

- [ ] **Step 3: Start the dev server and verify visually**

Run: `cd /Users/matt/Dropbox/Research/ReCODEMedical/website && npm run dev`

Open `http://localhost:3000` and verify:
- Page title shows "ReCODE Medical — A New Chapter"
- Hero section has no sub-line about ReCODE Chat being retired
- Three-dot separators appear between hero/letter and letter/email capture
- Gradient gold line appears between email capture/team and before footer
- Body letter contains the four revised paragraphs
- "Stay informed" email capture section is visible with input + "Notify me" button
- Founder names are in bordered cards with LinkedIn/X links
- Footer says "The mission continues"

- [ ] **Step 4: Test email signup**

Enter an email in the form and click "Notify me."
Expected: Form is replaced with "You're on the list."
Verify the row appears in the Supabase `email_signups` table.

- [ ] **Step 5: Test duplicate email**

Submit the same email again.
Expected: Form shows "You're on the list." (upsert handles gracefully, no error).

- [ ] **Step 6: Final commit if any adjustments were needed**

```bash
git add -A
git commit -m "Finalize acquisition page redesign"
```
