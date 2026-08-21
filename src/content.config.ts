import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Coleccion `projects` (Content Layer API).
 * Los MDX viven en src/content/projects/{es,en}/*.mdx; el id incluye el idioma
 * (ej. "es/aurora"). El campo `lang` permite filtrar por idioma en las paginas.
 */
const projects = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      cover: image(),
      gallery: z.array(image()).optional(),
      tags: z.array(z.string()),
      role: z.string().optional(),
      frontendRepoUrl: z.string().url().optional(),
      backendRepoUrl: z.string().url().optional(),
      liveUrl: z.string().url().optional(),
      featured: z.boolean().default(false),
      order: z.number().default(0),
      publishedAt: z.coerce.date(),
      lang: z.enum(['es', 'en']),
    }),
});

export const collections = { projects };