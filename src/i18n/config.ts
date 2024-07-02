import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import resources from './resources';

// Get the user's language. Expo's getLocales() function returns an array of
// objects with languageCode and countryCode properties. We are only interested
// in the first one (first user preference).
const userLanguage = 'en';

i18n.use(initReactI18next).init({
  lng: userLanguage,
  fallbackLng: 'en',
  debug: false, // __DEV__ Enable debug mode in development.
  resources,
});

export default i18n;
