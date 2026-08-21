import es from '@/i18n/locales/es.json';
import en from '@/i18n/locales/en.json';

/** Idiomas soportados y su etiqueta nativa (para el switcher). */
export const languages = {
  es: 'Espanol',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'es';

/** Diccionarios de UI por idioma. `es` define la forma canonica del tipo. */
export const ui = { es, en } as const;

/** Forma del diccionario de UI (derivada del idioma por defecto). */
export type UIDict = typeof es;