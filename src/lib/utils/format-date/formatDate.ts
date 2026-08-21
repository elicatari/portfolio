import type { Lang } from '@/types';

const localeMap: Record<Lang, string> = {
  es: 'es-ES',
  en: 'en-US',
};

/** Formatea una fecha segun el idioma (ej. "septiembre de 2024" / "September 2024"). */
export function formatDate(date: Date, lang: Lang): string {
  return new Intl.DateTimeFormat(localeMap[lang], {
    year: 'numeric',
    month: 'long',
  }).format(date);
}