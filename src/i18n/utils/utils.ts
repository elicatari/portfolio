import { defaultLang, languages, ui, type Lang, type UIDict } from '@/i18n/ui/ui';

/**
 * Deriva el idioma activo a partir del primer segmento de la URL.
 * ES vive en la raiz (sin prefijo); solo EN aparece como `/en/...`.
 */
export function getLangFromUrl(url: URL): Lang {
  const [, segment] = url.pathname.split('/');
  if (segment in languages) return segment as Lang;
  return defaultLang;
}

/**
 * Devuelve el diccionario tipado del idioma dado.
 * Uso en componentes: `const t = useTranslations(lang); t.hero.roles`.
 */
export function useTranslations(lang: Lang): UIDict {
  return ui[lang];
}

/**
 * Construye una ruta con el prefijo del idioma correcto.
 * ES no lleva prefijo; EN se prefija con `/en`.
 */
export function localizePath(path: string, lang: Lang): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (lang === defaultLang) return clean;
  if (clean === '/') return '/en';
  return `/en${clean}`;
}

/** El "otro" idioma respecto del actual (para el switcher). */
export function getAlternateLang(lang: Lang): Lang {
  return lang === 'es' ? 'en' : 'es';
}