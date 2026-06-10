/**
 * App Configuration
 * Central place for environment-aware constants.
 *
 * HOW TO CONNECT A REAL BACKEND:
 * 1. Set REACT_APP_API_URL in your .env file
 *    e.g.  REACT_APP_API_URL=https://api.yoursite.com/v1
 * 2. Replace the mock functions in /src/services/artworkService.js
 *    with real fetch/axios calls using API_BASE_URL below.
 * 3. Update /src/data/artworks.js to be the fallback/mock only.
 */

export const APP_NAME = "Artelier";
export const APP_TAGLINE = "Fine Art Gallery";

/** API base URL — set REACT_APP_API_URL in .env to enable backend mode */
export const API_BASE_URL = process.env.REACT_APP_API_URL || null;

/** Whether the app is currently running against a real API */
export const USE_REAL_API = Boolean(API_BASE_URL);

/** Number of artworks per page in the gallery */
export const PAGE_SIZE = 12;

/** localStorage keys */
export const STORAGE_KEYS = {
  cart: "artelier_cart",
  language: "artelier_lang",
  wishlist: "artelier_wishlist", // reserved for future use
};
