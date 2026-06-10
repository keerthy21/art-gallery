/**
 * Artwork Service
 *
 * All data access for artworks goes through this module.
 * Currently uses the local mock data file.
 *
 * HOW TO CONNECT A REAL BACKEND:
 * 1. Set REACT_APP_API_URL in .env
 * 2. Replace the mock implementations below with real fetch() calls, e.g.:
 *
 *   export async function getArtworks() {
 *     const res = await fetch(`${API_BASE_URL}/artworks`);
 *     if (!res.ok) throw new Error("Failed to fetch artworks");
 *     return res.json();
 *   }
 *
 * 3. For authentication add an Authorization header using a token from your
 *    auth context / localStorage.
 */

import { artworks } from "../data/artworks";
import { API_BASE_URL, USE_REAL_API } from "../config/app";

/** Simulates a small network delay in development so loading states are visible */
const mockDelay = (ms = 300) => new Promise((r) => setTimeout(r, ms));

// ─── Public API ─────────────────────────────────────────────────────────────

/** Fetch all artworks (with optional category filter & sort) */
export async function getArtworks({ category, sort } = {}) {
  if (USE_REAL_API) {
    const params = new URLSearchParams();
    if (category) params.set("category", category);
    if (sort) params.set("sort", sort);
    const res = await fetch(`${API_BASE_URL}/artworks?${params}`);
    if (!res.ok) throw new Error("Failed to fetch artworks");
    return res.json();
  }

  await mockDelay();
  let result = [...artworks];

  if (category && category !== "all") {
    result = result.filter((a) => a.category === category);
  }

  if (sort === "price_asc") result.sort((a, b) => a.price - b.price);
  else if (sort === "price_desc") result.sort((a, b) => b.price - a.price);
  else if (sort === "title") result.sort((a, b) => a.title.localeCompare(b.title));
  // default: newest first (by id descending for mock data)
  else result.sort((a, b) => Number(b.id) - Number(a.id));

  return result;
}

/** Fetch a single artwork by id */
export async function getArtworkById(id) {
  if (USE_REAL_API) {
    const res = await fetch(`${API_BASE_URL}/artworks/${id}`);
    if (!res.ok) throw new Error("Artwork not found");
    return res.json();
  }

  await mockDelay(200);
  const artwork = artworks.find((a) => a.id === id);
  if (!artwork) throw new Error("Artwork not found");
  return artwork;
}

/** Fetch featured artworks for the home page */
export async function getFeaturedArtworks() {
  if (USE_REAL_API) {
    const res = await fetch(`${API_BASE_URL}/artworks?featured=true&limit=5`);
    if (!res.ok) throw new Error("Failed to fetch featured artworks");
    return res.json();
  }

  await mockDelay();
  return artworks.filter((a) => a.featured);
}

/** Fetch related artworks (same category, excluding current) */
export async function getRelatedArtworks(id, category) {
  if (USE_REAL_API) {
    const res = await fetch(`${API_BASE_URL}/artworks?category=${category}&exclude=${id}&limit=3`);
    if (!res.ok) throw new Error("Failed to fetch related artworks");
    return res.json();
  }

  await mockDelay(150);
  return artworks.filter((a) => a.category === category && a.id !== id).slice(0, 3);
}
