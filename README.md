# Asif Imran Khan — Portfolio

Personal front-end developer portfolio, built with [Astro](https://astro.build) + React islands and TypeScript.

## Stack

- **Astro** — static-first rendering; content sections ship zero JS.
- **React** (`@astrojs/react`) — used only for genuinely interactive widgets (header/mobile nav, command palette, project filter, services accordion, contact form) as isolated islands.
- **TypeScript** — `astro/tsconfigs/strict`, enforced at build time via `astro check`.
- **Tailwind CSS v4** — via `@tailwindcss/vite`, with design tokens in `src/styles/global.css`.

## Structure

```
src/
  components/astro/   # static, zero-JS sections (Hero, About, Experience, Footer)
  components/react/   # hydrated islands (Header, CommandPalette, Projects, Services, Contact, CustomCursor)
  data/               # typed content (projects, services, experience)
  lib/                # framework-agnostic modules (theme, scroll-reveal)
  hooks/              # React hooks used only inside islands
  layouts/            # BaseLayout.astro (head, fonts, theme init)
  pages/              # file-based routes (index, resume, 404)
  styles/             # global.css design tokens
```

## Scripts

```bash
npm run dev       # start the dev server
npm run build     # type-check (astro check) then build
npm run preview   # preview the production build
npm run lint      # oxlint
```
