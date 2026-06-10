/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Playfair Display'", "Georgia", "serif"],
        body: ["'Inter'", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      colors: {
        gallery: {
          ink: "#1A1A1A",
          canvas: "#F8F6F2",
          warm: "#E8E2D9",
          accent: "#B5924C",
          muted: "#7A7370",
          light: "#FDFCFA",
          border: "#D9D3CB",
        },
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
      },
    },
  },
  plugins: [],
};
