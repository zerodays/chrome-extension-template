import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import resources from './resources';

const userLanguage = 'en';

i18n.use(initReactI18next).init({
  lng: userLanguage,
  fallbackLng: 'en',
  debug: false,
  resources,
});
