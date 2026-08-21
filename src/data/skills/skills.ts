import type { Skills } from '@/types';

/**
 * Skills reales del perfil, agrupadas por categoria (SDD 9.1).
 * `icon` usa nombres de Iconify (simple-icons para marcas, lucide de fallback).
 * `color` es el hex oficial de Simple Icons / la marca.
 */
export const skills: Skills = {
  frontend: [
    { name: 'HTML5', icon: 'simple-icons:html5', color: '#E34F26', level: 'advanced' },
    { name: 'CSS', icon: 'simple-icons:css', color: '#663399', level: 'advanced' },
    { name: 'Tailwind CSS', icon: 'simple-icons:tailwindcss', color: '#06B6D4', level: 'advanced' },
    { name: 'Sass', icon: 'simple-icons:sass', color: '#CC6699', level: 'intermediate' },
    { name: 'Bootstrap', icon: 'simple-icons:bootstrap', color: '#7952B3', level: 'intermediate' },
    { name: 'JavaScript', icon: 'simple-icons:javascript', color: '#F7DF1E', level: 'advanced' },
    { name: 'TypeScript', icon: 'simple-icons:typescript', color: '#3178C6', level: 'advanced' },
    { name: 'React', icon: 'simple-icons:react', color: '#61DAFB', level: 'advanced' },
    { name: 'Vite', icon: 'simple-icons:vite', color: '#646CFF', level: 'advanced' },
    { name: 'Astro', icon: 'simple-icons:astro', color: '#FF5D01', level: 'intermediate' },
  ],
  backend: [
    { name: 'Java', icon: 'java', color: '#ED8B00', level: 'advanced' },
    { name: 'Spring Boot', icon: 'simple-icons:springboot', color: '#6DB33F', level: 'advanced' },
    { name: 'Spring Security', icon: 'simple-icons:springsecurity', color: '#6DB33F', level: 'advanced' },
    { name: 'JPA / Hibernate', icon: 'simple-icons:hibernate', color: '#59666C', level: 'advanced' },
    { name: 'Flyway', icon: 'simple-icons:flyway', color: '#CC0200', level: 'intermediate' },
    { name: 'OpenAPI', icon: 'simple-icons:openapiinitiative', color: '#6BA539', level: 'intermediate' },
    { name: 'RabbitMQ', icon: 'simple-icons:rabbitmq', color: '#FF6600', level: 'intermediate' },
    { name: 'Keycloak', icon: 'simple-icons:keycloak', color: '#4D4D4D', level: 'intermediate' },
    { name: 'ArchUnit', icon: 'lucide:shield-check', color: '#6B7280', level: 'intermediate' },
  ],
  database: [
    { name: 'PostgreSQL', icon: 'simple-icons:postgresql', color: '#4169E1', level: 'advanced' },
    { name: 'MongoDB', icon: 'simple-icons:mongodb', color: '#47A538', level: 'intermediate' },
  ],
  tools: [
    { name: 'GitHub', icon: 'simple-icons:github', color: '#181717', level: 'advanced' },
    { name: 'GitHub Actions', icon: 'simple-icons:githubactions', color: '#2088FF', level: 'intermediate' },
    { name: 'Docker', icon: 'simple-icons:docker', color: '#2496ED', level: 'intermediate' },
    { name: 'Playwright', icon: 'simple-icons:playwright', color: '#2EAD33', level: 'intermediate' },
    { name: 'Postman', icon: 'simple-icons:postman', color: '#FF6C37', level: 'advanced' },
  ],
  design: [
    { name: 'Adobe Illustrator', icon: 'simple-icons:adobeillustrator', color: '#FF9A00', level: 'advanced' },
    { name: 'Adobe Photoshop', icon: 'simple-icons:adobephotoshop', color: '#31A8FF', level: 'advanced' },
    { name: 'Adobe Premiere Pro', icon: 'simple-icons:adobepremierepro', color: '#9999FF', level: 'advanced' },
    { name: 'Blender', icon: 'simple-icons:blender', color: '#E87D0D', level: 'intermediate' },
    { name: 'GIMP', icon: 'simple-icons:gimp', color: '#5C5543', level: 'intermediate' },
    { name: 'DaVinci Resolve', icon: 'simple-icons:davinciresolve', color: '#FF6E00', level: 'intermediate' },
  ],
};

/** Orden de categorias para render. */
export const skillCategoryOrder = ['frontend', 'backend', 'database', 'tools', 'design'] as const;