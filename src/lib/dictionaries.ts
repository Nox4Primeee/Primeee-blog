import 'server-only'

const dictionaries = {
  fr: () => import('../locales/fr.json').then((module) => module.default),
  en: () => import('../locales/en.json').then((module) => module.default),
}

export const getDictionary = async (locale: string) => {
  if (!locale || (locale !== 'fr' && locale !== 'en')) {
    return dictionaries.fr()
  }
  return dictionaries[locale as 'fr' | 'en']()
}
