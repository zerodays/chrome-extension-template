// Declaration file of all translations.
// Translations are located in /locales/{language}/{namespace}.ts

// Import namespaces for each language.
import commonEn from './en/common';

const resources = {
  // Define namespaces for each language.
  en: {
    common: commonEn,
  },
} as const;

export default resources;
