@AGENTS.md

# Vow & Play — Cache Valley Wedding Childcare

Single-page marketing site for **Vow & Play**, a wedding childcare service in Cache Valley, Utah. The site advertises on-site babysitting, kids activities, and bounce house rentals, and routes leads to the owner via a Formspree-backed inquiry form.

## Stack

- **Next.js 16.2.3** (App Router) — see the warning in `AGENTS.md`; this is not the Next.js most training data describes. Read `node_modules/next/dist/docs/` before changing routing, layouts, fonts, metadata, or config.
- **React 19.2.4**
- **TypeScript 5** in strict mode (`tsconfig.json`)
- **Tailwind CSS v4** via `@tailwindcss/postcss` — config lives in `src/app/globals.css` under `@theme inline`, not in a `tailwind.config.*` file
- **react-hook-form 7** + **zod 4** + **@hookform/resolvers 5** for form validation
- **lucide-react** for icons
- **Formspree** (`https://formspree.io/f/xojpzerl`) for inquiry submissions — no backend in this repo

## Layout

```
src/
  app/
    layout.tsx     # Root layout: Playfair Display + Lato via next/font/google, site <Metadata>
    page.tsx       # Single landing page composed of section components
    globals.css    # Tailwind v4 import + custom @theme tokens (colors + fonts)
    favicon.ico
  components/      # One file per landing-page section, in render order in page.tsx:
    Navbar.tsx        ("use client" — mobile menu state)
    Hero.tsx
    Services.tsx
    WhyChildcare.tsx
    Packages.tsx
    HowItWorks.tsx
    TrustSafety.tsx
    ServiceArea.tsx
    FAQ.tsx
    InquiryForm.tsx   ("use client" — RHF + zod, posts to Formspree)
    Footer.tsx
```

The whole site is one route (`/`). Sections are linked from the navbar/CTAs via in-page anchors (`#services`, `#packages`, `#how-it-works`, `#service-area`, `#faq`, `#inquiry`). Each section sets its `id` and uses `scroll-mt-16` to offset under the fixed navbar.

## Conventions

- **Path alias**: `@/*` → `./src/*` (defined in `tsconfig.json`). Components import as `@/components/Foo`.
- **Server vs client**: components are server by default. Add `"use client"` only when using hooks/state (currently `Navbar.tsx` and `InquiryForm.tsx`).
- **Styling**: Tailwind utility classes only. Custom design tokens (`sage-*`, `blush-*`, `cream-*`, `gold-*`) are defined in `src/app/globals.css` — extend that file rather than reaching for a Tailwind config.
- **Fonts**: Playfair Display (headings) and Lato (body) loaded with `next/font/google` in `layout.tsx` and exposed as CSS variables `--font-playfair` / `--font-lato`. Body text frequently uses `font-[family-name:var(--font-lato)]`; the default `font-sans` token resolves to Playfair (see `globals.css`).
- **Brand palette**: sage = primary text/UI, blush = accent/CTA, cream = backgrounds, gold = subtle highlights.
- **Icons**: import from `lucide-react`, render at fixed pixel sizes (e.g., `<Heart size={14} />`).
- **Forms**: define a `z.object({...})` schema, infer the type with `z.infer`, wire it into `useForm({ resolver: zodResolver(schema) })`. Show inline errors below each field (see `InquiryForm.tsx:116-118` for the pattern). On submit, POST JSON to the Formspree endpoint and toggle a `submitted` success state.
- **Apostrophes in JSX**: escape as `&apos;` to satisfy `react/no-unescaped-entities`.
- **Comments**: codebase is essentially comment-free; match that style.

## Commands

```bash
npm run dev     # next dev — local dev server on :3000
npm run build   # next build — production build
npm run start   # next start — serve the production build
npm run lint    # eslint (flat config in eslint.config.mjs)
```

There are no tests configured.

## Adding a new landing-page section

1. Create `src/components/MySection.tsx`. Keep it a server component unless it needs state.
2. Wrap the content in `<section id="my-section" className="py-16 sm:py-24 ... scroll-mt-16">` so anchor scrolling lands below the fixed navbar.
3. Use the existing palette tokens and the Lato body font helper for paragraphs.
4. Import and render it in `src/app/page.tsx` in the desired order.
5. If the section should be reachable from the nav, add an entry to `navLinks` in `src/components/Navbar.tsx`.

## Inquiry form

`InquiryForm.tsx` is the only piece of "real" logic. The Formspree endpoint is hard-coded. If submission destination ever needs to change, update the URL in `onSubmit` (`src/components/InquiryForm.tsx:47`). Required fields enforced by zod: `name`, `email`, `weddingDate`, `venue`, `serviceType`. All others are optional.

## Git workflow for this branch

Active development branch: `claude/add-claude-documentation-oiqSK`. Push with `git push -u origin claude/add-claude-documentation-oiqSK`. Do not open PRs unless explicitly requested.
