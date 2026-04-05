export const languages = {
  es: 'Español',
  en: 'English',
};

export const defaultLang = 'es';

export const ui = {
  es: {
    'nav.inicio': 'Inicio',
    'nav.experiencia': 'Experiencia',
    'nav.proyectos': 'Proyectos',
    'nav.habilidades': 'Habilidades',
    'nav.sobre-mi': 'Sobre mí',
    'nav.contacto': 'Contacto',
    'nav.descargar_cv': 'Descargar CV',
    'hero.available': 'Disponible para nuevos proyectos',
    'hero.title': 'Ingeniero Civil en Informática',
    'hero.subtitle': 'Backend Developer',
    'hero.description': 'Especializado en APIs, microservicios y arquitecturas modernas con Node.js, TypeScript y PHP (Laravel/Lumen). Orientado al código limpio, la escalabilidad y la mejora continua.',
    'hero.view_projects': 'Ver proyectos',
    'hero.contact_me': 'Contáctame',
    'hero.stat.years': 'Años de experiencia',
    'hero.stat.teams': 'Empresas & equipos',
    'hero.stat.techs': 'Tecnologías dominadas',
    'footer.rights': 'Todos los derechos reservados.',
    'footer.back_to_top': 'Volver arriba',
  },
  en: {
    'nav.inicio': 'Home',
    'nav.experiencia': 'Experience',
    'nav.proyectos': 'Projects',
    'nav.habilidades': 'Skills',
    'nav.sobre-mi': 'About Me',
    'nav.contacto': 'Contact',
    'nav.descargar_cv': 'Download CV',
    'hero.available': 'Available for new projects',
    'hero.title': 'Computer Civil Engineer',
    'hero.subtitle': 'Backend Developer',
    'hero.description': 'Specialized in APIs, microservices, and modern architectures with Node.js, TypeScript, and PHP (Laravel/Lumen). Focused on clean code, scalability, and continuous improvement.',
    'hero.view_projects': 'View projects',
    'hero.contact_me': 'Contact me',
    'hero.stat.years': 'Years of experience',
    'hero.stat.teams': 'Companies & teams',
    'hero.stat.techs': 'Mastered technologies',
    'footer.rights': 'All rights reserved.',
    'footer.back_to_top': 'Back to top',
  },
} as const;

export const routes = {
  es: {
    'index': '',
    'sobre-mi': 'sobre-mi',
    'experiencia': 'experiencia',
    'proyectos': 'proyectos',
    'habilidades': 'habilidades',
    'contacto': 'contacto',
  },
  en: {
    'index': '',
    'sobre-mi': 'about',
    'experiencia': 'experience',
    'proyectos': 'projects',
    'habilidades': 'skills',
    'contacto': 'contact',
  },
} as const;
