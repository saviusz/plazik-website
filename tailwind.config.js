/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#4ADE80",
        "primary-dark": "#16a34a",
        "background-light": "#f0fdf4",
        "background-dark": "#052e16",
        "text-main": "#1a2e05",
        "text-secondary": "#3f6212",
        "accent-light": "#dcfce7",
        "accent-border": "#86efac",
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', "sans-serif"],
        pixel: ["VT323", "monospace"],
        hand: ['"Patrick Hand"', "cursive"],
      },
      boxShadow: {
        retro: "4px 4px 0px 0px #1a2e05",
        "retro-hover": "6px 6px 0px 0px #1a2e05",
        "retro-sm": "2px 2px 0px 0px #1a2e05",
      },
      animation: {
        "bounce-slow": "bounce 3s infinite",
        "spin-slow": "spin 10s linear infinite",
      },
    },
  },
  plugins: [],
};
