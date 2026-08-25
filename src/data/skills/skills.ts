import type { Skills } from '@/types';

/**
 * Skills de produccion (home). Lo de DTE (Keycloak, RabbitMQ, ArchUnit)
 * queda en la ficha del proyecto, no en esta grilla.
 */
export const skills: Skills = {
  frontend: [
    { name: 'TypeScript', icon: 'simple-icons:typescript', color: '#3178C6', level: 'advanced' },
    { name: 'React', icon: 'simple-icons:react', color: '#61DAFB', level: 'advanced' },
    { name: 'Vite', icon: 'simple-icons:vite', color: '#646CFF', level: 'advanced' },
    { name: 'Tailwind CSS', icon: 'simple-icons:tailwindcss', color: '#06B6D4', level: 'advanced' },
    { name: 'Astro', icon: 'simple-icons:astro', color: '#FF5D01', level: 'intermediate' },
  ],
  backend: [
    { name: 'Java', icon: 'java', color: '#ED8B00', level: 'advanced' },
    { name: 'Spring Boot', icon: 'simple-icons:springboot', color: '#6DB33F', level: 'advanced' },
    { name: 'Spring Security', icon: 'simple-icons:springsecurity', color: '#6DB33F', level: 'advanced' },
    { name: 'JPA / Hibernate', icon: 'simple-icons:hibernate', color: '#59666C', level: 'advanced' },
    { name: 'Flyway', icon: 'simple-icons:flyway', color: '#CC0200', level: 'intermediate' },
    { name: 'OpenAPI', icon: 'simple-icons:openapiinitiative', color: '#6BA539', level: 'intermediate' },
  ],
  database: [
    { name: 'PostgreSQL', icon: 'simple-icons:postgresql', color: '#4169E1', level: 'advanced' },
    { name: 'MongoDB', icon: 'simple-icons:mongodb', color: '#47A538', level: 'intermediate' },
  ],
  tools: [
    { name: 'Git', icon: 'simple-icons:git', color: '#F05032', level: 'advanced' },
    { name: 'GitHub Actions', icon: 'simple-icons:githubactions', color: '#2088FF', level: 'intermediate' },
    { name: 'Docker', icon: 'simple-icons:docker', color: '#2496ED', level: 'intermediate' },
    { name: 'Playwright', icon: 'simple-icons:playwright', color: '#2EAD33', level: 'intermediate' },
    { name: 'JUnit', icon: 'simple-icons:junit5', color: '#25A162', level: 'intermediate' },
  ],
  design: [
    { name: 'Adobe Suite', icon: 'simple-icons:adobe', color: '#FF0000', level: 'advanced' },
    { name: 'GIMP', icon: 'simple-icons:gimp', color: '#5C5543', level: 'intermediate' },
    { name: 'Blender', icon: 'simple-icons:blender', color: '#E87D0D', level: 'intermediate' },
  ],
};

/** Orden de categorias para render. */
export const skillCategoryOrder = ['frontend', 'backend', 'database', 'tools', 'design'] as const;