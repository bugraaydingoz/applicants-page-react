import i18n from 'i18next'
import en from './en'
import { initReactI18next } from 'react-i18next'

export function setupLocale() {
  i18n.use(initReactI18next).init({
    resources: {
      en,
    },
    lng: 'en',
    fallbackLng: 'en',

    interpolation: {
      escapeValue: false,
    },
  })
}
