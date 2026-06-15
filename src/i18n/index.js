import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import pt from './locales/pt.json';
import ro from './locales/ro.json';

const resources = {
  en: { translation: en },
  pt: { translation: pt },
  ro: { translation: ro },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    supportedLngs: ['en', 'pt', 'ro'],
    // Map regional variants (e.g. pt-PT, en-GB) to their base language
    // so a Portuguese browser resolves to 'pt' instead of falling back to 'en'.
    load: 'languageOnly',
    nonExplicitSupportedLngs: true,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
      lookupLocalStorage: 'mindset-language',
    },
  });

export default i18n;
