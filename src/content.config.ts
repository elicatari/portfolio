import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Coleccion `projects` (Content Layer API).
 * Los MDX viven en src/content/projects/{es,en}/*.mdx; el id incluye el idioma
 * (ej. "es/autromotriz"). El campo `lang` permite filtrar por idioma en las paginas.
 */
const projects = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      /** Resultado visible en la card (usuarios, reemplazo de proceso, etc.). */
      impact: z.string().optional(),
      cover: image(),
      gallery: z.array(image()).optional(),
      tags: z.array(z.string()),
      /** Stack en la ficha de detalle; si falta, se usan `tags`. */
      stack: z.array(z.string()).optional(),
      role: z.string().optional(),
      frontendRepoUrl: z.string().url().optional(),
      backendRepoUrl: z.string().url().optional(),
      liveUrl: z.string().url().optional(),
      /** En uso real por un negocio; independiente de featured y de liveUrl publico. */
      inProduction: z.boolean().default(false),
      featured: z.boolean().default(false),
      order: z.number().default(0),
      lang: z.enum(['es', 'en']),
    }),
});

export const collections = { projects };