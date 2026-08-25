import type { MascotPose, MascotPoseId, MascotSection } from '@/types';

import avatar from '@/assets/mascot/mascot-avatar.png';
import book from '@/assets/mascot/mascot-book.png';
import code from '@/assets/mascot/mascot-code.png';
import codeLap from '@/assets/mascot/mascot-code-lap.png';
import codeWindow from '@/assets/mascot/mascot-code-window.png';
import coffee from '@/assets/mascot/mascot-coffee.png';
import design from '@/assets/mascot/mascot-design.png';
import globe from '@/assets/mascot/mascot-globe.png';
import goggles from '@/assets/mascot/mascot-goggles.png';
import headset from '@/assets/mascot/mascot-headset.png';
import heart from '@/assets/mascot/mascot-heart.png';
import idea from '@/assets/mascot/mascot-idea.png';
import lounge from '@/assets/mascot/mascot-lounge.png';
import point from '@/assets/mascot/mascot-point.png';
import portrait from '@/assets/mascot/mascot-portrait.png';
import search from '@/assets/mascot/mascot-search.png';
import stars from '@/assets/mascot/mascot-stars.png';
import think from '@/assets/mascot/mascot-think.png';
import wave from '@/assets/mascot/mascot-wave.png';
import wrench from '@/assets/mascot/mascot-wrench.png';

/**
 * Catalogo de poses (Fase 0). Origen: `iconos panduix 01–20.png`.
 * Las secciones aun no cablean el componente (Fases 2–4).
 */
export const mascotPoses: Record<MascotPoseId, MascotPose> = {
  wave: {
    id: 'wave',
    src: wave,
    sourceFile: 'iconos panduix 01.png',
    priority: 'portfolio',
    sections: ['hero'],
  },
  code: {
    id: 'code',
    src: code,
    sourceFile: 'iconos panduix 02.png',
    priority: 'portfolio',
    sections: ['skills', 'projects'],
  },
  wrench: {
    id: 'wrench',
    src: wrench,
    sourceFile: 'iconos panduix 03.png',
    priority: 'brand',
    sections: ['jobs', 'brand'],
  },
  search: {
    id: 'search',
    src: search,
    sourceFile: 'iconos panduix 04.png',
    priority: 'brand',
    sections: ['skills', 'brand'],
  },
  'code-lap': {
    id: 'code-lap',
    src: codeLap,
    sourceFile: 'iconos panduix 05.png',
    priority: 'extra',
    sections: ['projects'],
  },
  globe: {
    id: 'globe',
    src: globe,
    sourceFile: 'iconos panduix 06.png',
    priority: 'brand',
    sections: ['contact', 'brand'],
  },
  lounge: {
    id: 'lounge',
    src: lounge,
    sourceFile: 'iconos panduix 07.png',
    priority: 'extra',
    sections: ['about'],
  },
  book: {
    id: 'book',
    src: book,
    sourceFile: 'iconos panduix 08.png',
    priority: 'brand',
    sections: ['timeline', 'brand'],
  },
  design: {
    id: 'design',
    src: design,
    sourceFile: 'iconos panduix 09.png',
    priority: 'brand',
    sections: ['brand'],
  },
  portrait: {
    id: 'portrait',
    src: portrait,
    sourceFile: 'iconos panduix 10.png',
    priority: 'portfolio',
    sections: ['about'],
  },
  heart: {
    id: 'heart',
    src: heart,
    sourceFile: 'iconos panduix 11.png',
    priority: 'portfolio',
    sections: ['about'],
  },
  stars: {
    id: 'stars',
    src: stars,
    sourceFile: 'iconos panduix 12.png',
    priority: 'extra',
    sections: ['about'],
  },
  headset: {
    id: 'headset',
    src: headset,
    sourceFile: 'iconos panduix 13.png',
    priority: 'portfolio',
    sections: ['contact'],
  },
  goggles: {
    id: 'goggles',
    src: goggles,
    sourceFile: 'iconos panduix 14.png',
    priority: 'extra',
    sections: ['skills'],
  },
  avatar: {
    id: 'avatar',
    src: avatar,
    sourceFile: 'iconos panduix 15.png',
    priority: 'extra',
    sections: ['about'],
  },
  coffee: {
    id: 'coffee',
    src: coffee,
    sourceFile: 'iconos panduix 16.png',
    priority: 'portfolio',
    sections: ['about'],
  },
  'code-window': {
    id: 'code-window',
    src: codeWindow,
    sourceFile: 'iconos panduix 17.png',
    priority: 'portfolio',
    sections: ['projects'],
  },
  point: {
    id: 'point',
    src: point,
    sourceFile: 'iconos panduix 18.png',
    priority: 'portfolio',
    sections: ['contact', 'hero'],
  },
  think: {
    id: 'think',
    src: think,
    sourceFile: 'iconos panduix 19.png',
    priority: 'portfolio',
    sections: ['timeline'],
  },
  idea: {
    id: 'idea',
    src: idea,
    sourceFile: 'iconos panduix 20.png',
    priority: 'brand',
    sections: ['brand'],
  },
};

export const mascotPoseIds = Object.keys(mascotPoses) as MascotPoseId[];

export function getMascotPose(id: MascotPoseId): MascotPose {
  return mascotPoses[id];
}

/** Primera pose prevista para una seccion (mapa SDD §16.3). */
export function getMascotForSection(section: MascotSection): MascotPose | undefined {
  const preferred: Partial<Record<MascotSection, MascotPoseId>> = {
    hero: 'wave',
    about: 'portrait',
    timeline: 'think',
    skills: 'code',
    projects: 'code-window',
    contact: 'headset',
    brand: 'wrench',
  };
  const id = preferred[section];
  return id ? mascotPoses[id] : undefined;
}