# Asif Imran Khan — Portfolio

Personal front-end developer portfolio, built with [Astro](https://astro.build) and TypeScript. No client-side framework runtime: interactive pieces are small vanilla TypeScript scripts.

## Stack

- **Astro 7** — static output; every page is pre-rendered HTML.
- **TypeScript** — `astro/tsconfigs/strict`, enforced at build time via `astro check`.
- **Tailwind CSS v4** — via `@tailwindcss/vite`, with design tokens in `src/styles/global.css`.
- **Astro Fonts API** — Geist, self-hosted at build time.
- **astro:assets** — project images are resized and converted to WebP at build time.

## Structure

```
src/
  assets/images/        # source images, optimized by astro:assets
  components/layout/    # Header, Footer, CommandPalette
  components/sections/  # page sections (Hero, Work, About, Principles, Process, Experience, Contact)
  components/ui/        # SectionHeading, DotGrid, GrainSpotlight
  data/                 # typed content: profile, projects, services, process, experience
  layouts/              # BaseLayout.astro (head, SEO meta, fonts)
  lib/                  # framework-agnostic helpers (scroll reveal, color)
  pages/                # file-based routes (index, resume, 404, robots.txt)
  styles/               # global.css design tokens and primitives
```

Content (copy, links, projects, experience) lives in `src/data/` — edit it there rather than in components.

## Scripts

```bash
npm run dev       # start the dev server
npm run build     # type-check (astro check) then build
npm run preview   # preview the production build
npm run lint      # oxlint
```
