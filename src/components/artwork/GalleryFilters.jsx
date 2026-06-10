import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import { CATEGORIES } from "../../data/artworks";

export default function GalleryFilters({ category, sort, onCategory, onSort, totalCount }) {
  const { t } = useLanguage();

  const sortOptions = [
    { value: "newest", label: t("gallery.sortNewest") },
    { value: "price_asc", label: t("gallery.sortPriceAsc") },
    { value: "price_desc", label: t("gallery.sortPriceDesc") },
    { value: "title", label: t("gallery.sortTitle") },
  ];

  return (
    <div className="border-b border-gallery-border py-5">
      <div className="container-gallery">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
          {/* Category pills */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => onCategory("all")}
              className={`px-4 py-1.5 text-xs tracking-widest uppercase font-medium transition-all duration-200 border
                ${category === "all" || !category
                  ? "bg-gallery-ink text-white border-gallery-ink"
                  : "border-gallery-border text-gallery-muted hover:border-gallery-ink hover:text-gallery-ink"
                }`}
            >
              {t("gallery.filterAll")}
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => onCategory(cat)}
                className={`px-4 py-1.5 text-xs tracking-widest uppercase font-medium transition-all duration-200 border
                  ${category === cat
                    ? "bg-gallery-ink text-white border-gallery-ink"
                    : "border-gallery-border text-gallery-muted hover:border-gallery-ink hover:text-gallery-ink"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sort + count */}
          <div className="flex items-center gap-4 shrink-0">
            <span className="text-xs text-gallery-muted">
              {t("gallery.subtitle", { count: totalCount })}
            </span>
            <select
              value={sort}
              onChange={(e) => onSort(e.target.value)}
              className="text-xs border border-gallery-border bg-white px-3 py-1.5 text-gallery-muted
                         focus:outline-none focus:border-gallery-ink cursor-pointer"
            >
              {sortOptions.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
