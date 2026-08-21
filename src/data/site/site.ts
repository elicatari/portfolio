import type { SiteConfig } from '@/types';

// TODO: reemplazar la imagen OG por la definitiva.
export const site: SiteConfig = {
  name: 'Eliezer Rojas',
  nickname: 'elicatari',
  projectName: 'Portfolio',
  url: 'https://elicatari.com',
  email: 'dev@elicatari.com',
  location: {
    es: 'Chile · Remoto',
    en: 'Chile · Remote',
  },
  jobTitle: {
    es: 'Fullstack Developer & Diseñador Grafico',
    en: 'Fullstack Developer & Graphic Designer',
  },
  description: {
    es: 'Portfolio de un Fullstack Developer y Diseñador Grafico. Desarrollo web de punta a punta con React, Java/Spring Boot y diseño visual.',
    en: 'Portfolio of a Fullstack Developer and Graphic Designer. End-to-end web development with React, Java/Spring Boot and visual design.',
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