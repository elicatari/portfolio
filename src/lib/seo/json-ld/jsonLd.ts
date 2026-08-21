import { site } from '@/data/site/site';
import { socials } from '@/data/socials/socials';
import type { Lang } from '@/types';

/** JSON-LD schema.org "Person" para el perfil (SEO). */
export function personJsonLd(lang: Lang) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: site.name,
    url: site.url,
    email: `mailto:${site.email}`,
    jobTitle: site.jobTitle[lang],
    address: {
      '@type': 'PostalAddress',
      addressLocality: site.location[lang],
    },
    sameAs: socials.map((s) => s.url),
  };
}