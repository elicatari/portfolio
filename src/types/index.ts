import type { Lang } from '@/i18n/ui/ui';

export type { Lang };

/** Categorias de skills (SDD 9.1). */
export type SkillCategory = 'frontend' | 'backend' | 'database' | 'tools' | 'design';

export type SkillLevel = 'basic' | 'intermediate' | 'advanced';

export interface Skill {
  name: string;
  /** id del icono (ver componente Icon). */
  icon: string;
  /** Color de marca del icono (hex). */
  color?: string;
  level?: SkillLevel;
  /** sitio oficial (opcional). */
  url?: string;
}

export type Skills = Record<SkillCategory, Skill[]>;

/** Red social / enlace externo del perfil. */
export interface Social {
  name: string;
  url: string;
  /** id del icono (ver componente Icon). */
  icon: string;
}

/** Item de navegacion de la navbar. Ancla dentro de la home. */
export interface NavItem {
  /** clave del texto en el diccionario nav.* */
  key: 'home' | 'about' | 'skills' | 'projects' | 'jobs' | 'contact';
  /** ancla (ej. "#skills"). */
  anchor: string;
}

/** Puesto laboral (seccion Experiencia). */
export interface Job {
  company: string;
  role: Record<Lang, string>;
  period: Record<Lang, string>;
  /** Viñetas; una sola para roles compactos (p. ej. diseño). */
  bullets: Record<Lang, string>[];
}

/** Curso dentro de un track del roadmap de formacion. */
export interface TimelineCourse {
  title: Record<Lang, string>;
}

/** Track del roadmap (HTML, CSS, JS/TS, Java). */
export interface TimelineTrack {
  area: 'frontend' | 'backend';
  title: Record<Lang, string>;
  platform: Record<Lang, string>;
  courses: TimelineCourse[];
}

/** Hito de la bio (ano + descripcion por idioma). */
export interface BioEntry {
  year: string;
  text: Record<Lang, string>;
}

/** Bloque "lo que me gusta" y bio (linea de tiempo), dependientes de idioma. */
export interface AboutContent {
  bio: BioEntry[];
  loves: Record<Lang, string[]>;
}

/** Configuracion global del sitio. */
export interface SiteConfig {
  name: string;
  /** URL absoluta de produccion (coincide con astro.config `site`). */
  nickname: string;
  projectName: string;
  url: string;
  email: string;
  location: Record<Lang, string>;
  jobTitle: Record<Lang, string>;
  /** descripciones por defecto para SEO por idioma. */
  description: Record<Lang, string>;
  /** rutas a los CV por idioma (en /public/cv). */
  cv: Record<Lang, string>;
  /** imagen OG por defecto (en /public/og). */
  defaultOgImage: string;
  /**
   * Path de la pagina de marca/servicios (Fase 4).
   * Confirmado: raiz del dominio (`/`). El portfolio sigue en `/` en este repo
   * hasta Fase 6 (`elibits.cl/portfolio/*`).
   */
  brandPath: string;
}

/** Pose de la mascota (panda astronauta). Ver `data/mascot/mascot.ts`. */
export type MascotPoseId =
  | 'wave'
  | 'code'
  | 'wrench'
  | 'search'
  | 'code-lap'
  | 'globe'
  | 'lounge'
  | 'book'
  | 'design'
  | 'portrait'
  | 'heart'
  | 'stars'
  | 'headset'
  | 'goggles'
  | 'avatar'
  | 'coffee'
  | 'code-window'
  | 'point'
  | 'think'
  | 'idea';

export type MascotPriority = 'portfolio' | 'brand' | 'extra';

export type MascotSection =
  | 'hero'
  | 'about'
  | 'timeline'
  | 'jobs'
  | 'skills'
  | 'projects'
  | 'contact'
  | 'brand';

export interface MascotPose {
  id: MascotPoseId;
  /** Asset optimizable via astro:assets. */
  src: import('astro').ImageMetadata;
  /** Archivo origen numerado (`iconos panduix NN.png`). */
  sourceFile: string;
  priority: MascotPriority;
  /** Secciones donde esta pose es la opcion prevista. */
  sections: MascotSection[];
}