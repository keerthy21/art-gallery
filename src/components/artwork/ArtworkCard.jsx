import React from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import { useCart } from "../../context/CartContext";
import StatusBadge from "../common/StatusBadge";

export default function ArtworkCard({ artwork }) {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const { addToCart, cartItems } = useCart();

  const inCart = cartItems.some((i) => i.id === artwork.id);
  const isAvailable = artwork.status === "available";

  function handleCardClick() {
    navigate(`/artwork/${artwork.id}`);
  }

  function handleAddToCart(e) {
    e.stopPropagation();
    if (isAvailable && !inCart) addToCart(artwork);
  }

  return (
    <article className="artwork-card group" onClick={handleCardClick}>
      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/5] bg-gallery-warm">
        <img
          src={artwork.image}
          alt={artwork.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
          loading="lazy"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gallery-ink/0 group-hover:bg-gallery-ink/10 transition-colors duration-300" />
        <div className="absolute top-3 left-3">
        </div>
      </div>

      {/* Info */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-display text-lg font-semibold leading-tight text-gallery-ink">
              {artwork.title}
            </h3>
            <p className="mt-0.5 text-sm text-gallery-muted">
              {t("artwork.by")} {artwork.artist}
            </p>
          </div>
        
        </div>

        <p className="mt-2 text-xs text-gallery-muted tracking-wider uppercase">
          {artwork.category}
        </p>

        
      </div>
    </article>
  );
}
