import type { SiteConfig } from '@/types';

export const site: SiteConfig = {
  name: 'Eliezer Rojas Catari',
  nickname: 'elicatari',
  projectName: 'Portfolio',
  url: 'https://elicatari.com',
  email: 'dev@elicatari.com',
  location: {
    es: 'Chile · Remoto · Presencial',
    en: 'Chile · Remote · On-site',
  },
  jobTitle: {
    es: 'Fullstack Developer',
    en: 'Fullstack Developer',
  },
  description: {
    es: 'Fullstack Developer. Desarrollo web con TypeScript/React, Java/Spring Boot y diseño visual.',
    en: 'Fullstack Developer. Web development with TypeScript/React, Java/Spring Boot and visual design.',
  },
  /** PDF de una pagina servidos desde /public/cv (regenerar con pnpm cv). */
  cv: {
    es: '/cv/Eliezer_Rojas_Developer_CV.pdf',
    en: '/cv/Eliezer_Rojas_Developer_CV_EN.pdf',
  },
  defaultOgImage: '/og/default.png',
  /** Pagina de marca/servicios en la raiz del dominio (Fase 4). */
  brandPath: '/',
};