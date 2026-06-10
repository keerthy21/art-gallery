/**
 * Cart Context
 *
 * Persists cart to localStorage.
 * Provides: cartItems, addToCart, removeFromCart, clearCart,
 *           cartCount, cartTotal
 */

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { STORAGE_KEYS } from "../config/app";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.cart);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Persist on every change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.cart, JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = useCallback((artwork) => {
    setCartItems((prev) => {
      const exists = prev.find((i) => i.id === artwork.id);
      if (exists) return prev; // artwork is unique; can't add twice
      return [...prev, { ...artwork, quantity: 1 }];
    });
  }, []);

  const removeFromCart = useCallback((id) => {
    setCartItems((prev) => prev.filter((i) => i.id !== id));
  }, []);

  const clearCart = useCallback(() => setCartItems([]), []);

  const cartCount = cartItems.reduce((sum, i) => sum + i.quantity, 0);
  const cartTotal = cartItems.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, cartCount, cartTotal }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
