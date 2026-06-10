import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import { useCart } from "../../context/CartContext";

export default function OrderSummary({ showItems = false }) {
  const { t } = useLanguage();
  const { cartItems, cartTotal } = useCart();

  return (
    <div className="bg-gallery-warm border border-gallery-border p-6">
      <h3 className="font-display text-lg font-semibold mb-5">
        {t("checkout.orderSummary")}
      </h3>

      {showItems && (
        <ul className="mb-5 space-y-3">
          {cartItems.map((item) => (
            <li key={item.id} className="flex justify-between text-sm">
              <span className="text-gallery-muted truncate pr-4">{item.title}</span>
              <span className="font-medium shrink-0">
                {t("common.currency")}{item.price.toLocaleString()}
              </span>
            </li>
          ))}
        </ul>
      )}

      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-gallery-muted">{t("cart.subtotal")}</span>
          <span>{t("common.currency")}{cartTotal.toLocaleString()}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gallery-muted">{t("cart.shipping")}</span>
          <span className="text-gallery-muted text-xs">{t("cart.shippingFree")}</span>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-gallery-border flex justify-between font-semibold">
        <span>{t("cart.total")}</span>
        <span>{t("common.currency")}{cartTotal.toLocaleString()}</span>
      </div>
    </div>
  );
}
