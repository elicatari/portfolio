import type { AboutContent } from '@/types';

const INSTITUTE = 'Instituto Universitario Tecnológico Industrial Rodolfo Loero Arismendi';

export const about: AboutContent = {
  bio: [
    {
      year: '1992',
      text: {
        es: 'Nacido en Barquisimeto, Venezuela.',
        en: 'Born in Barquisimeto, Venezuela.',
      },
    },
    {
      year: '2017',
      text: {
        es: `Estudio completo como Diseñador Gráfico en el "${INSTITUTE}".`,
        en: `Completed studies as a Graphic Designer at the "${INSTITUTE}".`,
      },
    },
    {
      year: '2026',
      text: {
        es: `Estudio completo como TSU en Informática en el "${INSTITUTE}".`,
        en: `Completed studies as a Computer Science Technician (TSU) at the "${INSTITUTE}".`,
      },
    },
  ],
  loves: {
    es: ['El Universo', 'Arte', 'Dibujar', 'Música', 'Anime', 'Star Wars'],
    en: ['The Universe', 'Art', 'Drawing', 'Music', 'Anime', 'Star Wars'],
  },
};