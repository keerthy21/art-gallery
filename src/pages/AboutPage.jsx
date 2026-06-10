import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

const VALUES = [
  {
    icon: "◈",
    titleEn: "Authenticity",
    titleDe: "Authentizität",
    textEn: "Every work in our collection is verified original — directly sourced from the artist.",
    textDe: "Jedes Werk in unserer Sammlung ist ein verifiziertes Original — direkt vom Künstler bezogen.",
  },
  {
    icon: "◇",
    titleEn: "Curation",
    titleDe: "Kuration",
    textEn: "Our team reviews thousands of works each year to select only those with lasting value.",
    textDe: "Unser Team sichtet jährlich tausende Werke, um nur jene mit dauerhaftem Wert auszuwählen.",
  },
  {
    icon: "◉",
    titleEn: "Community",
    titleDe: "Gemeinschaft",
    textEn: "We believe art belongs in lived spaces, and we support the artists who make that possible.",
    textDe: "Wir glauben, dass Kunst in gelebte Räume gehört, und unterstützen die Künstler, die das möglich machen.",
  },
];

const TEAM = [
  { name: "Lena Fischer", role: "Founder & Director", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" },
  { name: "Marco Reyes", role: "Head of Curation", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80" },
  { name: "Sophie Keller", role: "Artist Relations", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80" },
];

export default function AboutPage() {
  const { t, currentLang } = useLanguage();
  const isDe = currentLang === "de";

  return (
    <div className="pt-18">
      {/* Hero */}
      <section className="bg-gallery-ink text-white py-24">
        <div className="container-gallery max-w-3xl">
          <div className="w-10 h-px bg-gallery-accent mb-8" />
          <h1 className="font-display text-5xl md:text-6xl font-bold leading-tight">{t("about.title")}</h1>
          <p className="mt-4 text-xl text-white/60">{t("about.subtitle")}</p>
        </div>
      </section>

      {/* Mission */}
      <section className="section-pad">
        <div className="container-gallery grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="divider-accent mb-6" />
            <h2 className="font-display text-3xl font-semibold mb-6">{t("about.missionTitle")}</h2>
            <p className="text-gallery-muted leading-relaxed text-lg">{t("about.missionText")}</p>
            <Link to="/gallery" className="btn-primary mt-8 inline-flex">
              {t("home.heroCta")}
            </Link>
          </div>
          <div className="aspect-video overflow-hidden bg-gallery-warm">
            <img
              src="https://images.unsplash.com/photo-1565034946487-077786996e27?w=900&q=80"
              alt="Gallery interior"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad bg-gallery-warm">
        <div className="container-gallery">
          <div className="divider-accent mb-6" />
          <h2 className="font-display text-3xl font-semibold mb-12">{t("about.valuesTitle")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {VALUES.map((v) => (
              <div key={v.icon} className="bg-gallery-light border border-gallery-border p-8">
                <span className="text-3xl text-gallery-accent block mb-4">{v.icon}</span>
                <h3 className="font-display text-xl font-semibold mb-3">
                  {isDe ? v.titleDe : v.titleEn}
                </h3>
                <p className="text-gallery-muted text-sm leading-relaxed">
                  {isDe ? v.textDe : v.textEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-pad">
        <div className="container-gallery">
          <div className="divider-accent mb-6" />
          <h2 className="font-display text-3xl font-semibold mb-12">
            {isDe ? "Unser Team" : "Our Team"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {TEAM.map((member) => (
              <div key={member.name} className="text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 bg-gallery-warm">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-display text-lg font-semibold">{member.name}</h3>
                <p className="text-sm text-gallery-muted mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
