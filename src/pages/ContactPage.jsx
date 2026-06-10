import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function ContactPage() {
  const { t } = useLanguage();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Replace with real API call: POST /contact
    setSent(true);
  }

  const infoBlocks = [
    { title: t("contact.addressTitle"), text: t("contact.address") },
    { title: t("contact.emailTitle"), text: t("contact.emailValue") },
    { title: t("contact.hoursTitle"), text: t("contact.hours") },
  ];

  return (
    <div className="pt-18">
      <section className="bg-gallery-ink text-white py-20">
        <div className="container-gallery">
          <div className="w-10 h-px bg-gallery-accent mb-6" />
          <h1 className="font-display text-5xl font-bold">{t("contact.title")}</h1>
          <p className="mt-3 text-white/60 text-lg">{t("contact.subtitle")}</p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-gallery grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form */}
          <div>
            {sent ? (
              <div className="flex flex-col items-start gap-4 py-8">
                <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p className="text-gallery-ink font-medium">{t("contact.sent")}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="form-label">{t("contact.namePlaceholder")}</label>
                  <input
                    type="text" name="name" value={form.name} onChange={handleChange}
                    required placeholder={t("contact.namePlaceholder")}
                    className="form-input"
                  />
                </div>
                <div>
                  <label className="form-label">{t("contact.emailPlaceholder")}</label>
                  <input
                    type="email" name="email" value={form.email} onChange={handleChange}
                    required placeholder={t("contact.emailPlaceholder")}
                    className="form-input"
                  />
                </div>
                <div>
                  <label className="form-label">{t("contact.messagePlaceholder")}</label>
                  <textarea
                    name="message" value={form.message} onChange={handleChange}
                    required rows={6} placeholder={t("contact.messagePlaceholder")}
                    className="form-input resize-none"
                  />
                </div>
                <button type="submit" className="btn-primary py-4 px-8">
                  {t("contact.sendCta")}
                </button>
              </form>
            )}
          </div>

          {/* Info */}
          <div className="space-y-10">
            {infoBlocks.map((block) => (
              <div key={block.title}>
                <h3 className="text-xs tracking-widest uppercase text-gallery-muted mb-3">
                  {block.title}
                </h3>
                <p className="text-gallery-ink whitespace-pre-line leading-relaxed">
                  {block.text}
                </p>
              </div>
            ))}

            {/* Placeholder map */}
            <div className="aspect-video bg-gallery-warm border border-gallery-border flex items-center justify-center">
              <span className="text-xs text-gallery-muted tracking-wider uppercase">
                Map — embed Google Maps here
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
