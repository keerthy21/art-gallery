/**
 * Language Context
 *
 * Provides:
 *   - currentLang  — active language code (e.g. "en")
 *   - t(key)       — translation helper, dot-notation keys ("nav.home")
 *   - setLanguage  — switch language
 */

import React, { createContext, useContext, useState, useCallback } from "react";
import { LANGUAGES, DEFAULT_LANGUAGE } from "../config/languages";
import { STORAGE_KEYS } from "../config/app";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [currentLang, setCurrentLang] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.language);
    return LANGUAGES.find((l) => l.code === saved) ? saved : DEFAULT_LANGUAGE;
  });

  const setLanguage = useCallback((code) => {
    if (LANGUAGES.find((l) => l.code === code)) {
      setCurrentLang(code);
      localStorage.setItem(STORAGE_KEYS.language, code);
    }
  }, []);

  /** Dot-notation translation helper.
   *  Supports simple interpolation: t("gallery.subtitle", { count: 12 })
   *  replaces "{{count}}" → "12"
   */
  const t = useCallback(
    (key, vars = {}) => {
      const lang = LANGUAGES.find((l) => l.code === currentLang);
      const translations = lang?.translations ?? {};
      const parts = key.split(".");
      let value = translations;
      for (const part of parts) {
        value = value?.[part];
        if (value === undefined) break;
      }
      if (typeof value !== "string") return key; // fallback to key
      return Object.entries(vars).reduce(
        (str, [k, v]) => str.replace(`{{${k}}}`, String(v)),
        value
      );
    },
    [currentLang]
  );

  return (
    <LanguageContext.Provider value={{ currentLang, setLanguage, t, languages: LANGUAGES }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
