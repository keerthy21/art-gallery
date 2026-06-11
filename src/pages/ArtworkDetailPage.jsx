import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { useCart } from "../context/CartContext";
import { getArtworkById, getRelatedArtworks } from "../services/artworkService";
import StatusBadge from "../components/common/StatusBadge";
import ArtworkCard from "../components/artwork/ArtworkCard";

export default function ArtworkDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useLanguage();
  const { addToCart, cartItems } = useCart();

  const [artwork, setArtwork] = useState(null);
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);
    setError(null);
    getArtworkById(id)
      .then((data) => {
        setArtwork(data);
        setSelectedImage(data.image); // ← add this line

        return getRelatedArtworks(id, data.category);
      })
      .then(setRelated)
      .catch(() => setError(t("common.error")))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="pt-18 min-h-screen flex items-center justify-center">
        <div className="text-gallery-muted animate-pulse">{t("common.loading")}</div>
      </div>
    );
  }

  if (error || !artwork) {
    return (
      <div className="pt-18 min-h-screen flex flex-col items-center justify-center gap-4">
        <p className="text-gallery-muted">{error || t("common.error")}</p>
        <Link to="/gallery" className="btn-primary">{t("nav.gallery")}</Link>
      </div>
    );
  }

  const inCart = cartItems.some((i) => i.id === artwork.id);
  const isAvailable = artwork.status === "available";

  function handleAddToCart() {
    addToCart(artwork);
  }

  function handleBuyNow() {
    addToCart(artwork);
    navigate("/checkout");
  }

  return (
    <div className="pt-18">
      {/* Breadcrumb */}
      <div className="container-gallery py-5 border-b border-gallery-border">
        <nav className="flex items-center gap-2 text-xs text-gallery-muted">
          <Link to="/" className="hover:text-gallery-ink transition-colors">Home</Link>
          <span>/</span>
          <Link to="/gallery" className="hover:text-gallery-ink transition-colors">{t("nav.gallery")}</Link>
          <span>/</span>
          <span className="text-gallery-ink">{artwork.title}</span>
        </nav>
      </div>

      {/* Main content */}
      <section className="container-gallery py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden bg-gallery-warm">
              <img
                src={selectedImage || artwork.image}                alt={artwork.title}
                className="w-full h-full object-cover transition-all duration-300"

              />
            </div>
           
          </div>

          {/* Details */}
          <div className="flex flex-col">
            <p className="text-xs tracking-widest uppercase text-gallery-muted mb-3">
              {artwork.category}
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight">
              {artwork.title}
            </h1>
            <p className="mt-2 text-lg text-gallery-muted">
              {t("artwork.by")} {artwork.artist}
            </p>

            <div className="mt-4 w-10 h-px bg-gallery-accent" />


            {/* Description */}
            <p className="mt-6 text-gallery-muted leading-relaxed">{artwork.description}</p>

            {/* Metadata table */}
            <dl className="mt-8 grid grid-cols-2 gap-y-4 gap-x-6 text-sm">
              {[
                [t("artwork.medium"), artwork.medium],
                [t("artwork.dimensions"), artwork.dimensions],
                [t("artwork.year"), artwork.year],
                [t("artwork.category"), artwork.category],
              ].map(([label, value]) => (
                <div key={label}>
                  <dt className="text-xs tracking-widest uppercase text-gallery-muted mb-1">{label}</dt>
                  <dd className="font-medium text-gallery-ink">{value}</dd>
                </div>
              ))}
            </dl>
            {/* ── Image Variants ─────────────────────────── */}
{artwork.variants && artwork.variants.length > 0 && (
  <div className="mt-8">
    <h4 className="text-xs tracking-widest uppercase text-gallery-muted mb-3">
      Preview Options
    </h4>
    <div className="flex flex-wrap gap-3">
      {artwork.variants.map((variant, index) => {
        const isSelected = selectedImage === variant.image;
        return (
          <button
            key={index}
            onClick={() => setSelectedImage(variant.image)}
            className={`flex flex-col items-center gap-1.5 p-1 border-2 transition-all duration-200
              ${isSelected
                ? "border-gallery-accent"
                : "border-gallery-border hover:border-gallery-ink"
              }`}
          >
            {/* Thumbnail image */}
            <div className="w-24 h-20 overflow-hidden bg-gallery-warm">
              <img
                src={variant.image}
                alt={variant.label}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Label */}
            <span className={`text-xs font-medium pb-0.5 ${
              isSelected ? "text-gallery-accent" : "text-gallery-muted"
            }`}>
              {variant.label}
            </span>
          </button>
        );
      })}
    </div>
  </div>
)}

         

          
          </div>
        </div>
      </section>

      {/* Related works */}
      {related.length > 0 && (
        <section className="section-pad bg-gallery-warm">
          <div className="container-gallery">
            <div className="divider-accent mb-4" />
            <h2 className="font-display text-2xl font-semibold mb-8">{t("artwork.relatedTitle")}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((a) => <ArtworkCard key={a.id} artwork={a} />)}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
