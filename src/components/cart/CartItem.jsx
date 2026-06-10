import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import { useCart } from "../../context/CartContext";

export default function CartItem({ item }) {
  const { t } = useLanguage();
  const { removeFromCart } = useCart();

  return (
    <div className="flex gap-5 py-6 border-b border-gallery-border last:border-0">
      {/* Thumbnail */}
      <div className="w-24 h-24 shrink-0 overflow-hidden bg-gallery-warm">
        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
      </div>

      {/* Details */}
      <div className="flex-1 min-w-0">
        <h3 className="font-display text-base font-semibold leading-snug">{item.title}</h3>
        <p className="text-sm text-gallery-muted mt-0.5">
          {t("artwork.by")} {item.artist}
        </p>
        <p className="text-xs text-gallery-muted mt-1">{item.medium}</p>
      </div>

      {/* Price + remove */}
      <div className="flex flex-col items-end justify-between shrink-0">
        <span className="font-semibold text-gallery-ink">
          {t("common.currency")}{item.price.toLocaleString()}
        </span>
        <button
          onClick={() => removeFromCart(item.id)}
          className="text-xs text-gallery-muted hover:text-red-500 transition-colors underline underline-offset-2"
        >
          {t("cart.remove")}
        </button>
      </div>
    </div>
  );
}
