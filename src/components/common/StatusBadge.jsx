import React from "react";
import { useLanguage } from "../../context/LanguageContext";

const STATUS_MAP = {
  available: "badge-available",
  sold: "badge-sold",
  reserved: "badge-reserved",
};

const LABELS = {
  available: "Available",
  sold: "Sold",
  reserved: "Reserved",
};

const DE_LABELS = {
  available: "Verfügbar",
  sold: "Verkauft",
  reserved: "Reserviert",
};

export default function StatusBadge({ status }) {
  const { currentLang } = useLanguage();
  const labels = currentLang === "de" ? DE_LABELS : LABELS;
  return (
    <span className={STATUS_MAP[status] || "badge bg-gray-100 text-gray-500"}>
      {labels[status] ?? status}
    </span>
  );
}
