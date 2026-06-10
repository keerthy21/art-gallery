import React, { useState, useRef, useEffect } from "react";
import { useLanguage } from "../../context/LanguageContext";

export default function LanguageSwitcher() {
  const { currentLang, setLanguage, languages } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // Close on outside click
  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const active = languages.find((l) => l.code === currentLang);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 text-sm text-gallery-muted hover:text-gallery-ink
                   transition-colors px-2 py-1.5"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span>{active?.flag}</span>
        <span className="font-medium uppercase tracking-wider text-xs">{currentLang}</span>
        <svg
          width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5"
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        >
          <polyline points="2 4 6 8 10 4" />
        </svg>
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute right-0 top-full mt-1 bg-gallery-light border border-gallery-border
                     shadow-lg py-1 min-w-[130px] z-50"
        >
          {languages.map((lang) => (
            <li key={lang.code}>
              <button
                role="option"
                aria-selected={lang.code === currentLang}
                onClick={() => { setLanguage(lang.code); setOpen(false); }}
                className={`w-full text-left px-4 py-2.5 flex items-center gap-2.5 text-sm
                            transition-colors hover:bg-gallery-warm
                            ${lang.code === currentLang ? "text-gallery-ink font-medium" : "text-gallery-muted"}`}
              >
                <span>{lang.flag}</span>
                <span>{lang.label}</span>
                {lang.code === currentLang && (
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor"
                       strokeWidth="2" className="ml-auto text-gallery-accent">
                    <polyline points="2 6 5 9 10 3" />
                  </svg>
                )}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
