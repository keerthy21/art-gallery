/**
 * StripePaymentForm
 *
 * Uses @stripe/react-stripe-js Elements.
 * In the mock mode (no real Stripe key), this shows a placeholder card UI.
 *
 * To enable real Stripe payments:
 * 1. Set REACT_APP_STRIPE_PUBLISHABLE_KEY in .env
 * 2. Implement the /create-payment-intent endpoint on your server
 * 3. Update createPaymentIntent() in /src/services/stripeService.js
 */

import React, { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";

export default function StripePaymentForm({ onSuccess, onError, amount }) {
  const { t } = useLanguage();
  const [processing, setProcessing] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setProcessing(true);

    // ── MOCK PAYMENT ────────────────────────────────
    // In production, replace with real Stripe confirmPayment call:
    //
    //   const stripe = await getStripe();
    //   const { clientSecret } = await createPaymentIntent({ amount });
    //   const result = await stripe.confirmPayment({
    //     elements,
    //     confirmParams: { return_url: window.location.origin + "/checkout/success" },
    //     redirect: "if_required",
    //   });
    //   if (result.error) onError(result.error.message);
    //   else onSuccess(result.paymentIntent);
    //
    await new Promise((r) => setTimeout(r, 1500));
    setProcessing(false);
    onSuccess({ id: "pi_mock_" + Date.now(), mock: true });
    // ── END MOCK ────────────────────────────────────
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Mock card input UI — replace with <CardElement> from @stripe/react-stripe-js */}
      <div>
        <label className="form-label">{t("checkout.cardDetails")}</label>
        <div className="form-input flex items-center gap-3 text-gallery-muted text-sm select-none">
          <svg width="32" height="20" viewBox="0 0 32 20" fill="none" className="opacity-50">
            <rect width="32" height="20" rx="3" fill="#1A1A1A" opacity="0.08"/>
            <rect x="0" y="6" width="32" height="5" fill="#1A1A1A" opacity="0.15"/>
          </svg>
          <input
            type="text"
            placeholder="4242 4242 4242 4242"
            className="flex-1 bg-transparent outline-none text-gallery-ink placeholder-gallery-muted/60"
            readOnly
          />
          <span className="text-xs opacity-50">MM/YY CVC</span>
        </div>
        <p className="mt-2 text-xs text-gallery-muted">
          Demo mode — no real charge will be made.
        </p>
      </div>

      <button
        type="submit"
        disabled={processing}
        className="btn-primary w-full py-4 text-sm tracking-wide disabled:opacity-60"
      >
        {processing
          ? t("checkout.processing")
          : `${t("checkout.placeOrder")} · ${t("common.currency")}${amount?.toLocaleString()}`}
      </button>
    </form>
  );
}
