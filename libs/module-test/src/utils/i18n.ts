import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import { translationEn } from './locales';

const resources = {
  en: {
    translation: translationEn
  }
};

export const i18n = i18next
.use(LanguageDetector)
.use(initReactI18next)
  .init({
    resources,
    debug: false,
    ns: ['translation'],
    fallbackLng: 'en',
    keySeparator: '.',
    nsSeparator: false,
    react: {
      useSuspense: true,
    },
    interpolation: {
      escapeValue: true,
    },
    supportedLngs: ['en', 'es'],
  });
