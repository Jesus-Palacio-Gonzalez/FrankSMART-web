/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        podium: ["'FSP DEMO - PODIUM Sharp 4.11'", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        background: "#0A0A0A",
        foreground: "#F5F5F5",
        muted: "#A1A1AA",
        accent: "#10B981",
        gold: "#D4AF37",
      },
      boxShadow: {
        glow: "0 0 40px rgba(16,185,129,0.25)",
        "glow-sm": "0 0 20px rgba(16,185,129,0.25)",
      },
    },
  },
  plugins: [],
};