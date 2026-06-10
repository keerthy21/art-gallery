import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { getFeaturedArtworks } from "../services/artworkService";
import ArtworkCard from "../components/artwork/ArtworkCard";
import { CATEGORIES } from "../data/artworks";

export default function HomePage() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [featured, setFeatured] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getFeaturedArtworks()
      .then(setFeatured)
      .finally(() => setLoading(false));
  }, []);

  const heroLines = t("home.heroTitle").split("\n");

  return (
    <div>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gallery-ink">
        {/* Background texture */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 70% 50%, #B5924C22 0%, transparent 60%), radial-gradient(circle at 20% 80%, #ffffff08 0%, transparent 50%)",
          }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-1/2 opacity-30"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1578926288207-a90a5366759d?w=1200&q=60')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            maskImage: "linear-gradient(to right, transparent 0%, black 40%)",
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 40%)",
          }}
        />

        <div className="container-gallery relative z-10 pt-24 pb-20">
          <div className="max-w-2xl">
            <div className="w-10 h-px bg-gallery-accent mb-8" />
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-tight">
              {heroLines.map((line, i) => (
                <span key={i} className={i === 1 ? "text-gallery-accent block" : "block"}>
                  {line}
                </span>
              ))}
            </h1>
            <p className="mt-6 text-lg text-white/60 max-w-md leading-relaxed">
              {t("home.heroSubtitle")}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/gallery" className="btn-primary bg-gallery-accent hover:bg-white hover:text-gallery-ink px-8 py-4 text-sm tracking-wide">
                {t("home.heroCta")}
              </Link>
              <Link to="/about" className="btn-ghost text-white/70 hover:text-white px-4 py-4">
                {t("home.heroSecondary")} →
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent" />
        </div>
      </section>

      {/* ── Featured Works ───────────────────────────────── */}
      <section className="section-pad">
        <div className="container-gallery">
          <div className="flex items-end justify-between mb-12">
            <div>
              <div className="divider-accent mb-4" />
              <h2 className="font-display text-3xl md:text-4xl font-semibold">
                {t("home.featuredTitle")}
              </h2>
              <p className="mt-2 text-gallery-muted">{t("home.featuredSubtitle")}</p>
            </div>
            <Link to="/gallery" className="btn-ghost hidden sm:flex">
              {t("common.viewAll")} →
            </Link>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="aspect-[4/5] bg-gallery-warm" />
                  <div className="p-5 space-y-2">
                    <div className="h-4 bg-gallery-warm rounded w-3/4" />
                    <div className="h-3 bg-gallery-warm rounded w-1/2" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featured.slice(0, 3).map((artwork) => (
                <ArtworkCard key={artwork.id} artwork={artwork} />
              ))}
            </div>
          )}

          <div className="mt-8 sm:hidden text-center">
            <Link to="/gallery" className="btn-secondary">{t("common.viewAll")}</Link>
          </div>
        </div>
      </section>

      {/* ── Browse by Category ───────────────────────────── */}
      <section className="section-pad bg-gallery-warm">
        <div className="container-gallery">
          <div className="mb-10">
            <div className="divider-accent mb-4" />
            <h2 className="font-display text-3xl font-semibold">{t("home.categoriesTitle")}</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => navigate(`/gallery?category=${encodeURIComponent(cat)}`)}
                className="bg-gallery-light border border-gallery-border px-4 py-5
                           text-sm font-medium text-gallery-ink text-center
                           hover:bg-gallery-ink hover:text-white hover:border-gallery-ink
                           transition-all duration-200"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── More featured (large format) ────────────────── */}
      {!loading && featured.length > 3 && (
        <section className="section-pad">
          <div className="container-gallery">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {featured.slice(3).map((artwork) => (
                <ArtworkCard key={artwork.id} artwork={artwork} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Newsletter ───────────────────────────────────── */}
      <section className="py-20 bg-gallery-ink text-white">
        <div className="container-gallery text-center max-w-xl mx-auto">
          <div className="w-10 h-px bg-gallery-accent mx-auto mb-6" />
          <h2 className="font-display text-3xl font-semibold">{t("home.newsletterTitle")}</h2>
          <p className="mt-3 text-white/60">{t("home.newsletterSubtitle")}</p>
          <form
            className="mt-8 flex gap-0 max-w-sm mx-auto"
            onSubmit={(e) => { e.preventDefault(); }}
          >
            <input
              type="email"
              placeholder={t("home.newsletterPlaceholder")}
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 text-white
                         placeholder-white/40 text-sm focus:outline-none focus:border-gallery-accent"
            />
            <button type="submit" className="px-5 py-3 bg-gallery-accent text-white text-sm font-medium
                                            hover:bg-white hover:text-gallery-ink transition-colors whitespace-nowrap">
              {t("home.newsletterCta")}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
