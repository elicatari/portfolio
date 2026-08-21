# Portfolio

[Español](README.md) · [License](LICENSE.md)

Personal bilingual (ES/EN) portfolio for a **Fullstack Developer & Graphic Designer**.

## Stack

- **Astro 7** (`output: 'static'`, zero JS by default)
- **TypeScript** (strict) with import aliases `@` -> `src/`
- **Tailwind CSS v4** (`@tailwindcss/vite` plugin, tokens in `@theme`)
- **Content Layer API** + MDX for projects
- Native Astro **i18n** (ES at `/`, EN at `/en/`)
- **Cloudflare Pages** + Pages Functions (contact form via Resend)
- Typeface: **Ubuntu Sans** (self-hosted)

## Project structure

**Folder-per-file** convention (each component/module lives in its own kebab-case folder) and `@` import aliases.

```text
public/            # static assets (fonts, cv, models, og, favicon)
functions/         # Cloudflare Pages Functions (contact)
src/
  assets/          # optimized images (astro:assets)
  components/       # ui/ layout/ sections/ media/ seo/
  content/         # MDX projects (es/ en/)
  data/            # typed data (site, skills, socials, navigation, timeline)
  i18n/            # ui, utils, locales (es/en)
  layouts/         # BaseLayout
  lib/             # pure utilities
  pages/           # routes (ES at root, EN under /en)
  styles/          # global.css (@theme tokens)
  types/           # shared types
```

## Conventions

- **pnpm** only
- **Folder-per-file** structure; folders in `kebab-case`, components in `PascalCase`.
- Imports use the **`@/...`** alias; no upward relative paths (`../../`).
- Pages stay thin: they only orchestrate sections.
- No hardcoded data in the UI: everything comes from `data/`, `content/`, or `i18n/`.