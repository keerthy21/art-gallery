import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { useCart } from "../context/CartContext";
import CartItem from "../components/cart/CartItem";
import OrderSummary from "../components/checkout/OrderSummary";

export default function CartPage() {
  const { t } = useLanguage();
  const { cartItems } = useCart();
  const navigate = useNavigate();

  return (
    <div className="pt-18 min-h-screen">
      <div className="bg-gallery-ink text-white py-12">
        <div className="container-gallery">
          <h1 className="font-display text-4xl font-semibold">{t("cart.title")}</h1>
        </div>
      </div>

      <div className="container-gallery py-12">
        {cartItems.length === 0 ? (
          <div className="text-center py-24">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gallery-warm flex items-center justify-center">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                   strokeWidth="1.5" className="text-gallery-muted">
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
            </div>
            <p className="text-gallery-muted mb-6">{t("cart.empty")}</p>
            <Link to="/gallery" className="btn-primary">{t("cart.browseCta")}</Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Items */}
            <div className="lg:col-span-2">
              {cartItems.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
              <Link
                to="/gallery"
                className="mt-6 inline-flex text-sm text-gallery-muted hover:text-gallery-ink transition-colors gap-1"
              >
                ← {t("cart.continueShopping")}
              </Link>
            </div>

            {/* Summary */}
            <div className="lg:col-span-1">
              <OrderSummary showItems={false} />
              <button
                onClick={() => navigate("/checkout")}
                className="btn-primary w-full py-4 mt-4 text-sm tracking-wide"
              >
                {t("cart.checkoutCta")}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
