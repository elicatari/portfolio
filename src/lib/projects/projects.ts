import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '@/types';

export type Project = CollectionEntry<'projects'>;

/** Slug limpio del proyecto (id sin el prefijo de idioma). Ej. "es/aurora" -> "aurora". */
export function getProjectSlug(entry: Project): string {
  return entry.id.replace(/^(es|en)\//, '');
}

/** URL de detalle localizada. ES: /proyectos/slug · EN: /en/projects/slug. */
export function getProjectUrl(lang: Lang, slug: string): string {
  return lang === 'es' ? `/proyectos/${slug}` : `/en/projects/${slug}`;
}

/** Proyectos de un idioma, ordenados por `order` y luego por fecha (desc). */
export async function getProjectsByLang(lang: Lang): Promise<Project[]> {
  const all = await getCollection('projects', ({ data }) => data.lang === lang);
  return all.sort((a, b) => {
    if (a.data.order !== b.data.order) return a.data.order - b.data.order;
    return b.data.publishedAt.getTime() - a.data.publishedAt.getTime();
  });
}