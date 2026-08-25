import type { Job } from '@/types';

/** Experiencia laboral, mas reciente primero. */
export const jobs: Job[] = [
  {
    company: 'Real Motors',
    role: {
      es: 'Desarrollador fullstack y diseñador web',
      en: 'Fullstack developer and web designer',
    },
    period: {
      es: 'Marzo 2026 – Actualidad',
      en: 'March 2026 – Present',
    },
    bullets: [
      {
        es: 'Liderazgo End-to-End: levanté requerimientos con socios y usuarios, definí el alcance y la arquitectura del sistema, y mantengo la plataforma en producción con soporte continuo.',
        en: 'End-to-end leadership: I gathered requirements with partners and users, defined scope and architecture, and I still run the platform in production with ongoing support.',
      },
      {
        es: 'Transformación digital: los dueños no pidieron notas de venta. Vi que sin documento de cobro el stock y el taller no cierran; propuse el módulo y lo implementé: de pizarra y papel a un documento que baja inventario y registra abonos en CLP/USD.',
        en: 'Digital transformation: the owners did not ask for sales notes. I saw that without a payment document, stock and the workshop do not close; I proposed the module and built it — from whiteboard and paper to a document that decrements inventory and records installments in CLP/USD.',
      },
      {
        es: 'Gestión del ciclo de vida: responsable de los despliegues (Cloudflare / Railway), la resolución de incidencias en producción y el soporte directo a los usuarios operativos.',
        en: 'Lifecycle management: responsible for deploys (Cloudflare / Railway), production incident response, and direct support for the people who run the system day to day.',
      },
    ],
  },
  {
    company: 'Freelance',
    role: {
      es: 'Desarrollador fullstack',
      en: 'Fullstack developer',
    },
    period: {
      es: '2025 – 2026',
      en: '2025 – 2026',
    },
    bullets: [
      {
        es: 'Encargos independientes, en paralelo a otros roles: sistemas entregados a clientes reales y publicados al cerrar el alcance.',
        en: 'Independent paid work, in parallel with other roles: systems delivered to real clients and published when the scope was closed.',
      },
      {
        es: 'BR Logística: WMS en producción con inventario por lote y FEFO automático.',
        en: 'BR Logística: WMS in production with lot-level inventory and automatic FEFO.',
      },
      {
        es: 'Happy Pet: agenda de autoservicio en producción.',
        en: 'Happy Pet: self-service booking in production.',
      },
    ],
  },
  {
    company: 'Dicata',
    role: {
      es: 'Encargado IT / Control de inventario',
      en: 'IT lead / Inventory control',
    },
    period: {
      es: 'Dic 2024 – Feb 2026',
      en: 'Dec 2024 – Feb 2026',
    },
    bullets: [
      {
        es: 'Implementación del ERP SIRA y soporte a usuarios.',
        en: 'Rolled out the SIRA ERP and supported users.',
      },
      {
        es: 'Operé el inventario sobre ese sistema: stock, entradas/salidas e inventarios cíclicos.',
        en: 'Ran inventory on that system: stock, inbound/outbound and cycle counts.',
      },
    ],
  },
  {
    company: 'SECAM',
    role: {
      es: 'Diseñador gráfico',
      en: 'Graphic designer',
    },
    period: {
      es: 'Nov 2022 – Nov 2024 · 2017 – 2018',
      en: 'Nov 2022 – Nov 2024 · 2017 – 2018',
    },
    bullets: [
      {
        es: 'Identidades visuales y material publicitario impreso y digital.',
        en: 'Visual identities and print and digital advertising.',
      },
    ],
  },
  {
    company: 'Friex',
    role: {
      es: 'Jefe de control de stock',
      en: 'Stock control lead',
    },
    period: {
      es: 'Ago 2018 – Oct 2022',
      en: 'Aug 2018 – Oct 2022',
    },
    bullets: [
      {
        es: 'Inventario Nestlé sobre SAP: disponibilidad, mermas y conteos cíclicos.',
        en: 'Nestlé inventory on SAP: availability, shrinkage and cycle counts.',
      },
    ],
  },
  {
    company: '42 Motors',
    role: {
      es: 'Soporte / Encargado IT',
      en: 'Support / IT lead',
    },
    period: {
      es: 'Feb 2015 – Jul 2017',
      en: 'Feb 2015 – Jul 2017',
    },
    bullets: [
      {
        es: 'Implementación del ERP de la empresa y soporte a usuarios.',
        en: 'Implemented the company ERP and supported users.',
      },
    ],
  },
];