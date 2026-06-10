/**
 * English translations
 *
 * HOW TO ADD A NEW LANGUAGE:
 * 1. Create a new file in /src/locales/ (e.g., fr.js for French)
 * 2. Copy this file and translate all string values (keep all keys identical)
 * 3. Register the new language in /src/config/languages.js
 * 4. The LanguageSwitcher component will automatically pick it up.
 */

const en = {
  // ── Navigation ──────────────────────────────────
  nav: {
    home: "Home",
    gallery: "Gallery",
    about: "About",
    contact: "Contact",
    cart: "Cart",
  },

  // ── Home page ────────────────────────────────────
  home: {
    heroTitle: "Art That Speaks\nTo the Soul",
    heroSubtitle: "A curated collection of original works by contemporary artist",
    heroCta: "Explore Gallery",
    heroSecondary: "Meet Our Artists",
    featuredTitle: "Featured Works",
    featuredSubtitle: "Hand-selected by our curators",
    categoriesTitle: "Browse by Category",
    newsletterTitle: "Stay in the Loop",
    newsletterSubtitle: "New arrivals, artist stories, and exclusive previews — delivered to your inbox.",
    newsletterPlaceholder: "Your email address",
    newsletterCta: "Subscribe",
  },

  // ── Gallery page ─────────────────────────────────
  gallery: {
    title: "The Collection",
    subtitle: "{{count}} works available",
    filterAll: "All",
    sortLabel: "Sort by",
    sortNewest: "Newest first",
    sortPriceAsc: "Price: low to high",
    sortPriceDesc: "Price: high to low",
    sortTitle: "Title A–Z",
    noResults: "No artworks match your filters.",
    clearFilters: "Clear filters",
  },

  // ── Artwork detail ───────────────────────────────
  artwork: {
    by: "by",
    category: "Category",
    medium: "Medium",
    dimensions: "Dimensions",
    year: "Year",
    addToCart: "Add to Cart",
    buyNow: "Buy Now",
    soldOut: "Sold Out",
    reserved: "Reserved",
    shareWork: "Share this work",
    relatedTitle: "You May Also Like",
  },

  // ── Cart ─────────────────────────────────────────
  cart: {
    title: "Your Cart",
    empty: "Your cart is empty.",
    browseCta: "Browse the gallery",
    remove: "Remove",
    quantity: "Qty",
    subtotal: "Subtotal",
    shipping: "Shipping",
    shippingFree: "Calculated at checkout",
    total: "Total",
    checkoutCta: "Proceed to Checkout",
    continueShopping: "Continue Shopping",
  },

  // ── Checkout ─────────────────────────────────────
  checkout: {
    title: "Checkout",
    stepShipping: "Shipping",
    stepPayment: "Payment",
    stepConfirm: "Confirm",
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email Address",
    phone: "Phone Number",
    address: "Street Address",
    city: "City",
    postalCode: "Postal Code",
    country: "Country",
    cardDetails: "Card Details",
    orderSummary: "Order Summary",
    placeOrder: "Place Order",
    processing: "Processing…",
    successTitle: "Order Confirmed!",
    successMessage: "Thank you for your purchase. You will receive a confirmation email shortly.",
    backToGallery: "Back to Gallery",
  },

  // ── About ────────────────────────────────────────
  about: {
    title: "About Art gallery",
    subtitle: "Where art finds its home.",
    missionTitle: "Our Mission",
    missionText:
      "Art gallery was founded with a single purpose: to connect collectors with original works that carry genuine meaning. We partner with emerging and established artists to bring their vision directly to you.",
    valuesTitle: "What We Stand For",
  },

  // ── Contact ──────────────────────────────────────
  contact: {
    title: "Get in Touch",
    subtitle: "We'd love to hear from you.",
    namePlaceholder: "Your name",
    emailPlaceholder: "Your email",
    messagePlaceholder: "Your message",
    sendCta: "Send Message",
    sent: "Message sent — we'll be in touch soon.",
    addressTitle: "Visit Us",
    address: "Maximilianstraße 12\n80539 Munich, Germany",
    emailTitle: "Email",
    emailValue: "hello@artelier.gallery",
    hoursTitle: "Gallery Hours",
    hours: "Tue – Sat: 10:00 – 18:00\nSun: 12:00 – 17:00",
  },

  // ── Common ───────────────────────────────────────
  common: {
    loading: "Loading…",
    error: "Something went wrong.",
    backButton: "Back",
    learnMore: "Learn More",
    viewAll: "View All",
    close: "Close",
    currency: "€",
  },
};

export default en;
