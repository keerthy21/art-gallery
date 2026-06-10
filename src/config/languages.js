/**
 * Language Configuration
 *
 * HOW TO ADD A NEW LANGUAGE:
 * 1. Create /src/locales/<code>.js  (e.g., fr.js)
 * 2. Copy en.js, translate all values (keep keys identical)
 * 3. Import it below and add an entry to LANGUAGES
 *
 * The LanguageSwitcher component reads this array automatically.
 */

import en from "../locales/en";
import de from "../locales/de";

/** All supported languages.
 *  code   — ISO 639-1 code used as the key in localStorage
 *  label  — Display name shown in the switcher
 *  flag   — Emoji flag (optional, for UI use)
 *  translations — The imported translation object
 */
export const LANGUAGES = [
  { code: "en", label: "English", flag: "🇬🇧", translations: en },
  { code: "de", label: "Deutsch", flag: "🇩🇪", translations: de },

  // ── Extend here ───────────────────────────────
  // { code: "fr", label: "Français", flag: "🇫🇷", translations: fr },
  // { code: "es", label: "Español",  flag: "🇪🇸", translations: es },
];

export const DEFAULT_LANGUAGE = "en";
