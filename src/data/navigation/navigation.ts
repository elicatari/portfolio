import type { NavItem } from '@/types';

/** Anclas de la home (one-page). Los textos salen de nav.* en i18n. */
export const navItems: NavItem[] = [
  { key: 'home', anchor: '#inicio' },
  { key: 'projects', anchor: '#proyectos' },
  { key: 'about', anchor: '#sobre-mi' },
  { key: 'skills', anchor: '#skills' },
  { key: 'contact', anchor: '#contacto' },
];