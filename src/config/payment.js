/**
 * Payment Gateway Configuration
 *
 * HOW TO CONFIGURE STRIPE:
 * 1. Create a .env file in the project root (copy .env.example)
 * 2. Add your Stripe publishable key:
 *    REACT_APP_STRIPE_PUBLISHABLE_KEY=pk_test_...
 * 3. For production, replace with pk_live_...
 * 4. Your SECRET key belongs ONLY on the server — never in this file.
 *
 * HOW TO ADD ANOTHER PAYMENT GATEWAY (e.g. PayPal):
 * 1. Add a new entry to PAYMENT_GATEWAYS below
 * 2. Create /src/services/paypalService.js mirroring stripeService.js
 * 3. Switch ACTIVE_GATEWAY to "paypal"
 * The checkout page reads ACTIVE_GATEWAY and renders the right component.
 */

export const PAYMENT_GATEWAYS = {
  stripe: {
    name: "Stripe",
    publishableKey: process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY || "pk_test_REPLACE_WITH_YOUR_KEY",
  },

  // paypal: {
  //   name: "PayPal",
  //   clientId: process.env.REACT_APP_PAYPAL_CLIENT_ID || "",
  // },
};

/** Switch this to change the active payment gateway globally. */
export const ACTIVE_GATEWAY = "stripe";

/** Currency code used across the app. Change to "USD", "GBP", etc. as needed. */
export const CURRENCY = "eur";
export const CURRENCY_SYMBOL = "€";
