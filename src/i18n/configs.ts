import i18n from 'i18next'
import { useTranslation, initReactI18next } from 'react-i18next'

import translation_en from './en.json'
import translation_zh from './zh.json'

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: translation_en
      },
      zh: {
        translation: translation_zh
      },
    },
    lng: 'zh',
    fallbackLng: 'zh',

    interpolation: {
      escapeValue: false,
    },
  })
export default i18n