import i18n from 'i18next'
import { reactI18nextModule } from 'react-i18next'
import en from './translations/en'
import fr from './translations/fr'

i18n.use(reactI18nextModule).init({
  interpolation: {
    escapeValue: false
  },
  lng: 'en',
  resources: {
    en: {
      translation: en
    },
    fr: {
      translation: fr
    }
  },
  keySeparator: '#####'
})

export default i18n
