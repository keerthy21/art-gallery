import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

export default function NotFoundPage() {
  const { t } = useLanguage();
  return (
    <div className="pt-18 min-h-screen flex flex-col items-center justify-center text-center px-4">
      <p className="font-display text-8xl font-bold text-gallery-warm select-none">404</p>
      <h1 className="font-display text-3xl font-semibold mt-4">Page Not Found</h1>
      <p className="mt-3 text-gallery-muted">The page you're looking for doesn't exist.</p>
      <Link to="/" className="btn-primary mt-8">Go Home</Link>
    </div>
  );
}
