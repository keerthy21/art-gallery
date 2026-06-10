import React from "react";
import { BrowserRouter, Routes, Route, ScrollRestoration } from "react-router-dom";

// Context providers
import { LanguageProvider } from "./context/LanguageContext";
import { CartProvider } from "./context/CartContext";

// Layout
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

// Pages
import HomePage from "./pages/HomePage";
import GalleryPage from "./pages/GalleryPage";
import ArtworkDetailPage from "./pages/ArtworkDetailPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";

/**
 * App
 *
 * Wraps the entire app in:
 *   LanguageProvider  — i18n state
 *   CartProvider      — shopping cart state
 *   BrowserRouter     — React Router v6
 *
 * Routes are defined here. To add a new page:
 *   1. Create /src/pages/YourPage.jsx
 *   2. Import it above
 *   3. Add a <Route path="/your-path" element={<YourPage />} /> below
 */
export default function App() {
  return (
    <LanguageProvider>
      <CartProvider>
        <BrowserRouter>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/gallery" element={<GalleryPage />} />
                <Route path="/artwork/:id" element={<ArtworkDetailPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />

                {/* ── Future pages ────────────────────────────
                  <Route path="/admin" element={<AdminDashboard />} />
                  <Route path="/artist/login" element={<ArtistLogin />} />
                  <Route path="/wishlist" element={<WishlistPage />} />
                  <Route path="/blog" element={<BlogPage />} />
                  <Route path="/blog/:slug" element={<BlogPostPage />} />
                  <Route path="/search" element={<SearchPage />} />
                  <Route path="/orders" element={<OrdersPage />} />
                ─────────────────────────────────────────────── */}

                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </CartProvider>
    </LanguageProvider>
  );
}
