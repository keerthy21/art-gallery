/**
 * Stripe Payment Service
 *
 * Wraps Stripe's client-side SDK.
 * The actual charge is processed server-side via a PaymentIntent.
 *
 * In production you need a backend endpoint that:
 *   POST /create-payment-intent  { amount, currency, metadata }
 *   → returns { clientSecret }
 *
 * For now, the createPaymentIntent function mocks this call.
 * Replace the mock with a real fetch to your backend.
 *
 * HOW TO REPLACE WITH PAYPAL:
 * 1. Create /src/services/paypalService.js with the same exported function
 *    signatures (createPaymentIntent, etc.)
 * 2. Change ACTIVE_GATEWAY in /src/config/payment.js to "paypal"
 * 3. The checkout page will automatically use the new service.
 */

import { loadStripe } from "@stripe/stripe-js";
import { PAYMENT_GATEWAYS } from "../config/payment";

let stripePromise = null;

/** Returns a cached Stripe instance */
export function getStripe() {
  if (!stripePromise) {
    stripePromise = loadStripe(PAYMENT_GATEWAYS.stripe.publishableKey);
  }
  return stripePromise;
}

/**
 * Creates a PaymentIntent on the server and returns the clientSecret.
 *
 * MOCK implementation — replace the body with a real API call:
 *   const res = await fetch(`${API_BASE_URL}/create-payment-intent`, {
 *     method: "POST",
 *     headers: { "Content-Type": "application/json" },
 *     body: JSON.stringify({ amount, currency }),
 *   });
 *   return res.json(); // { clientSecret }
 */
export async function createPaymentIntent({ amount, currency = "eur", metadata = {} }) {
  // ── MOCK ─────────────────────────────────────────────
  // Simulate a server round-trip
  await new Promise((r) => setTimeout(r, 800));
  // Return a fake client secret so the UI can demonstrate the flow
  return {
    clientSecret: "pi_mock_secret_" + Math.random().toString(36).slice(2),
    mock: true,
  };
  // ── END MOCK ─────────────────────────────────────────
}
