import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { useCart } from "../context/CartContext";
import OrderSummary from "../components/checkout/OrderSummary";
import StripePaymentForm from "../components/checkout/StripePaymentForm";

const STEPS = ["shipping", "payment", "confirm"];

export default function CheckoutPage() {
  const { t } = useLanguage();
  const { cartItems, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();

  const [step, setStep] = useState(0); // 0=shipping 1=payment 2=confirm
  const [orderComplete, setOrderComplete] = useState(false);
  const [paymentError, setPaymentError] = useState(null);

  const [shippingData, setShippingData] = useState({
    firstName: "", lastName: "", email: "", phone: "",
    address: "", city: "", postalCode: "", country: "DE",
  });

  if (cartItems.length === 0 && !orderComplete) {
    return (
      <div className="pt-18 min-h-screen flex flex-col items-center justify-center gap-4">
        <p className="text-gallery-muted">{t("cart.empty")}</p>
        <Link to="/gallery" className="btn-primary">{t("cart.browseCta")}</Link>
      </div>
    );
  }

  // ── Order success ──────────────────────────────────────
  if (orderComplete) {
    return (
      <div className="pt-18 min-h-screen flex flex-col items-center justify-center text-center px-4">
        <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mb-6">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h1 className="font-display text-3xl font-semibold">{t("checkout.successTitle")}</h1>
        <p className="mt-3 text-gallery-muted max-w-sm leading-relaxed">
          {t("checkout.successMessage")}
        </p>
        <Link to="/gallery" className="btn-primary mt-8">{t("checkout.backToGallery")}</Link>
      </div>
    );
  }

  // ── Shipping fields ────────────────────────────────────
  function handleShippingChange(e) {
    setShippingData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleShippingSubmit(e) {
    e.preventDefault();
    setStep(1);
  }

  // ── Payment success ────────────────────────────────────
  function handlePaymentSuccess(paymentIntent) {
    clearCart();
    setOrderComplete(true);
  }

  const stepLabels = [
    t("checkout.stepShipping"),
    t("checkout.stepPayment"),
    t("checkout.stepConfirm"),
  ];

  return (
    <div className="pt-18 min-h-screen">
      <div className="bg-gallery-ink text-white py-12">
        <div className="container-gallery">
          <h1 className="font-display text-4xl font-semibold">{t("checkout.title")}</h1>
          {/* Step indicator */}
          <div className="flex items-center gap-3 mt-6">
            {stepLabels.map((label, i) => (
              <React.Fragment key={i}>
                <div className={`flex items-center gap-2 text-sm ${i === step ? "text-white" : "text-white/40"}`}>
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium border
                    ${i < step ? "bg-gallery-accent border-gallery-accent text-white"
                    : i === step ? "border-white text-white"
                    : "border-white/30 text-white/40"}`}>
                    {i < step ? "✓" : i + 1}
                  </span>
                  {label}
                </div>
                {i < stepLabels.length - 1 && (
                  <div className="flex-1 h-px bg-white/20 max-w-12" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      <div className="container-gallery py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form area */}
          <div className="lg:col-span-2">

            {/* ── Step 0: Shipping ── */}
            {step === 0 && (
              <form onSubmit={handleShippingSubmit} className="space-y-6">
                <h2 className="font-display text-2xl font-semibold">{t("checkout.stepShipping")}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    ["firstName", t("checkout.firstName")],
                    ["lastName", t("checkout.lastName")],
                    ["email", t("checkout.email")],
                    ["phone", t("checkout.phone")],
                  ].map(([name, label]) => (
                    <div key={name}>
                      <label className="form-label">{label}</label>
                      <input
                        type={name === "email" ? "email" : "text"}
                        name={name}
                        value={shippingData[name]}
                        onChange={handleShippingChange}
                        required={["firstName", "lastName", "email"].includes(name)}
                        className="form-input"
                      />
                    </div>
                  ))}
                  <div className="sm:col-span-2">
                    <label className="form-label">{t("checkout.address")}</label>
                    <input
                      type="text" name="address" value={shippingData.address}
                      onChange={handleShippingChange} required className="form-input"
                    />
                  </div>
                  <div>
                    <label className="form-label">{t("checkout.city")}</label>
                    <input type="text" name="city" value={shippingData.city}
                           onChange={handleShippingChange} required className="form-input" />
                  </div>
                  <div>
                    <label className="form-label">{t("checkout.postalCode")}</label>
                    <input type="text" name="postalCode" value={shippingData.postalCode}
                           onChange={handleShippingChange} required className="form-input" />
                  </div>
                </div>
                <button type="submit" className="btn-primary py-4 px-8">
                  Continue to Payment →
                </button>
              </form>
            )}

            {/* ── Step 1: Payment ── */}
            {step === 1 && (
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <button onClick={() => setStep(0)} className="btn-ghost pl-0">← {t("common.backButton")}</button>
                  <h2 className="font-display text-2xl font-semibold">{t("checkout.stepPayment")}</h2>
                </div>
                {paymentError && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 text-sm">
                    {paymentError}
                  </div>
                )}
                <StripePaymentForm
                  amount={cartTotal}
                  onSuccess={handlePaymentSuccess}
                  onError={(msg) => { setPaymentError(msg); }}
                />
              </div>
            )}
          </div>

          {/* Order summary sidebar */}
          <div>
            <OrderSummary showItems={true} />
          </div>
        </div>
      </div>
    </div>
  );
}
