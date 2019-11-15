

import * as Localization from 'expo-localization';
import i18n from 'i18n-js';

// languages
const en = require('./languages/en');
const es = require('./languages/es');
const fr = require('./languages/fr');

i18n.fallbacks = true;
i18n.translations = {
  en,
  es,
  fr
};

// `Localization.locale` can come in the form of `en-US` sometimes, so we just
// take the 1st part.
i18n.locale = (Localization.locale || 'en').split('-')[0];

export {
  i18n
};
