# Portfolio

[English](README.en.md) · [Licencia](LICENSE.md)

Portfolio personal bilingue (ES/EN) de un perfil **Fullstack Developer & Diseñador Grafico**.

## Stack

- **Astro 7** (`output: 'static'`, cero JS por defecto)
- **TypeScript** (strict) con alias de imports `@` -> `src/`
- **Tailwind CSS v4** (plugin `@tailwindcss/vite`, tokens en `@theme`)
- **Content Layer API** + MDX para los proyectos
- **i18n** nativo de Astro (ES en `/`, EN en `/en/`)
- **Cloudflare Pages** + Pages Functions (formulario de contacto con Resend)
- Tipografia: **Ubuntu Sans** (auto-alojada)

## Estructura del proyecto

Convencion **carpeta-por-archivo** (cada componente/modulo en su carpeta madre en kebab-case) e imports con alias `@`.

```text
public/            # assets estaticos (fonts, cv, models, og, favicon)
functions/         # Cloudflare Pages Functions (contacto)
src/
  assets/          # imagenes optimizadas (astro:assets)
  components/       # ui/ layout/ sections/ media/ seo/
  content/         # proyectos en MDX (es/ en/)
  data/            # datos tipados (site, skills, socials, navigation, timeline)
  i18n/            # ui, utils, locales (es/en)
  layouts/         # BaseLayout
  lib/             # utilidades puras
  pages/           # rutas (ES en raiz, EN en /en)
  styles/          # global.css (@theme tokens)
  types/           # tipos compartidos
```

## Convenciones

- Solo **pnpm**
- Estructura **carpeta-por-archivo**; carpetas en `kebab-case`, componentes en `PascalCase`.
- Imports con alias **`@/...`**; sin rutas relativas ascendentes (`../../`).
- Paginas "delgadas": solo orquestan secciones.
- Sin datos hardcodeados en la UI: todo desde `data/`, `content/` o `i18n/`.