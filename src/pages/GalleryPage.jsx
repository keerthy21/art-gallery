import React, { useEffect, useState, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { getArtworks } from "../services/artworkService";
import ArtworkCard from "../components/artwork/ArtworkCard";
import GalleryFilters from "../components/artwork/GalleryFilters";

export default function GalleryPage() {
  const { t } = useLanguage();
  const [searchParams, setSearchParams] = useSearchParams();

  const [artworks, setArtworks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const category = searchParams.get("category") || "all";
  const sort = searchParams.get("sort") || "newest";

  const fetchArtworks = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getArtworks({ category: category === "all" ? null : category, sort });
      setArtworks(data);
    } catch (e) {
      setError(t("common.error"));
    } finally {
      setLoading(false);
    }
  }, [category, sort]);

  useEffect(() => { fetchArtworks(); }, [fetchArtworks]);

  function handleCategory(cat) {
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      next.set("category", cat);
      return next;
    });
  }

  function handleSort(s) {
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      next.set("sort", s);
      return next;
    });
  }

  return (
    <div className="pt-18 min-h-screen">
      {/* Page header */}
      <div className="bg-gallery-ink text-white py-16">
        <div className="container-gallery">
          <div className="w-10 h-px bg-gallery-accent mb-6" />
          <h1 className="font-display text-4xl md:text-5xl font-semibold">{t("gallery.title")}</h1>
        </div>
      </div>

      {/* Filters */}
      <GalleryFilters
        category={category}
        sort={sort}
        onCategory={handleCategory}
        onSort={handleSort}
        totalCount={artworks.length}
      />

      {/* Grid */}
      <div className="container-gallery py-12">
        {error && (
          <div className="text-center py-16 text-gallery-muted">{error}</div>
        )}

        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="aspect-[4/5] bg-gallery-warm" />
                <div className="p-5 space-y-2">
                  <div className="h-4 bg-gallery-warm rounded w-3/4" />
                  <div className="h-3 bg-gallery-warm rounded w-1/2" />
                </div>
              </div>
            ))}
          </div>
        )}

        {!loading && !error && artworks.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gallery-muted mb-4">{t("gallery.noResults")}</p>
            <button
              onClick={() => handleCategory("all")}
              className="btn-secondary"
            >
              {t("gallery.clearFilters")}
            </button>
          </div>
        )}

        {!loading && !error && artworks.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {artworks.map((artwork) => (
              <ArtworkCard key={artwork.id} artwork={artwork} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
