import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gallery-ink text-white mt-auto">
      <div className="container-gallery py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <span className="font-display text-2xl font-semibold">Art gallery</span>
            <p className="mt-4 text-sm text-white/60 leading-relaxed max-w-xs">
              A curated platform connecting collectors with original works by contemporary artists.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs font-medium tracking-widest uppercase text-white/40 mb-4">
              Explore
            </h4>
            <ul className="space-y-3">
              {[
                { to: "/gallery", label: t("nav.gallery") },
                { to: "/about", label: t("nav.about") },
                { to: "/contact", label: t("nav.contact") },
              ].map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-medium tracking-widest uppercase text-white/40 mb-4">
              Legal
            </h4>
            <ul className="space-y-3">
              {["Privacy Policy", "Terms of Service", "Shipping & Returns"].map((label) => (
                <li key={label}>
                  <span className="text-sm text-white/40 cursor-default">{label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Artelier. All rights reserved.
          </p>
          <div className="flex gap-4">
            {["Instagram", "Pinterest", "LinkedIn"].map((s) => (
              <a
                key={s}
                href="#"
                className="text-xs text-white/30 hover:text-white/60 transition-colors"
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
