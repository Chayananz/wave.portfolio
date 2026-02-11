## Repo snapshot (big picture)

- Framework: Next.js (App Router, v16.x) + React 19 + TypeScript.
- Styling: Tailwind CSS v4 with a single global stylesheet at `src/app/globals.css`.
- Analytics: `@vercel/analytics/next` is used in `src/app/layout.tsx`.
- Public assets live under `public/` and are referenced with absolute paths (e.g. `/profile.jpg`, `/projects/project1.jpg`).

## How to run / build

- Install: `npm install` (project uses npm and has `package.json`).
- Local dev: `npm run dev` — launches Next.js dev server (localhost:3000).
- Build: `npm run build` and `npm start` for production preview.
- Lint: `npm run lint` (runs `eslint`).

Files to inspect when making changes

- Entry/meta/layout: `src/app/layout.tsx` — global CSS import, Google Font via `next/font`, and analytics injection. Changes here affect the whole site.
- Main page: `src/app/page.tsx` — client component (`"use client"`) with most UI, scroll effects, particle canvas, loading screen, nav and portfolio data. Many interactive bits live here.
- Reusable UI: `src/components/Header.tsx`, `src/components/Footer.tsx` — client components using local state/hydration; note `Header.tsx` is implemented but the main page contains its own header markup (watch for duplication when refactoring).
- Styles: `src/app/globals.css` — contains global layout, `cyber-` prefixed utility classes and animation rules referenced across components.
- Public assets: `public/` — images and `resume.pdf` (linked from the UI).

Project-specific patterns and conventions (do NOT break these)

- App Router + client/server split:
  - Files with `"use client"` (e.g., `src/app/page.tsx`, `src/components/Header.tsx`) are client components and may use hooks, browser APIs, and state. Preserve `"use client"` when moving code that uses hooks to another file.
  - Server components (no `"use client"`) must not use client-only APIs.

- DOM-driven animations and data attributes:
  - The site uses `data-slide` attributes and IntersectionObserver in `page.tsx` to trigger CSS slide-in animations; prefer using the same attribute-based pattern when adding new animated sections.

- CSS naming:
  - Many classes use the `cyber-` prefix (e.g. `cyber-header`, `cyber-portfolio-grid`, `cyber-btn`). When adding styles follow the same prefix to keep the stylesheet consistent.

- Images and static links:
  - Use `/path` references to files placed in `public/` (e.g. `<Image src="/projects/project1.jpg" .../>`), not imports. Keep image sizes set for `next/image` (width/height props are used widely).

- Navigation & scrolling:
  - The page implements smooth scrolling by id and offsets (see `scrollTo` in `page.tsx`). If you change section ids, update the `navLinks` arrays in `page.tsx` and `src/components/Header.tsx` to match.

Integration points & external dependencies

- Vercel Analytics: `@vercel/analytics/next` is included in `layout.tsx` and relies on Vercel deployment to collect metrics.
- Live links: project entries in `page.tsx` include `github` and `live` URLs — these are authoritative links to external repos/deployments.

Common pitfalls for automated edits

- Removing `"use client"` from a component that uses hooks will break hydration; always keep it when moving hook-using logic.
- There is some header duplication: the page-level header markup in `page.tsx` and `src/components/Header.tsx` may cause merge conflicts or inconsistent behavior if both are changed independently. Prefer consolidating to a single component and updating both nav link sources.
- The particle background is drawn to a canvas in `page.tsx` (window size, requestAnimationFrame). Avoid server-side execution of this logic — keep it in client components.

Small examples (where to look)

- Animation trigger: see IntersectionObserver in `src/app/page.tsx` (skill bar animation and `data-slide` handling).
- Download link: `href="/resume.pdf"` in `page.tsx` — file is under `public/resume.pdf`.
- Projects data: the `projects` array in `page.tsx` is the canonical place for portfolio entries (update it to add/remove projects).

If you need more context

- Start with `src/app/layout.tsx` and `src/app/page.tsx` — they contain global wiring and the majority of app logic.
- Use `npm run dev` locally and open `http://localhost:3000` when testing UI/behavior changes.

Please review this doc and tell me if you'd like the following added or adjusted:
- More examples of common edits (adding a project, adding a section).
- A short checklist for refactoring client/server components safely.
