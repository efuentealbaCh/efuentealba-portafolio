import { ui, defaultLang, routes } from './ui';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}

export function useTranslatedPath(lang: keyof typeof ui) {
  return function translatePath(path: string, l: string = lang) {
    const pathName = path.replaceAll('/', '');
    const hasTranslation = defaultLang in routes && pathName in routes[defaultLang as keyof typeof routes] && l in routes;
    
    if (hasTranslation) {
      const routeKey = Object.keys(routes[defaultLang as keyof typeof routes]).find(key => routes[defaultLang as keyof typeof routes][key as keyof typeof routes[typeof defaultLang]] === pathName);
      if (routeKey) {
        return `/${l}/${routes[l as keyof typeof routes][routeKey as keyof typeof routes[typeof defaultLang]]}`;
      }
    }
    
    return `/${l}${path}`;
  }
}
