/** @type {import('tailwindcss').Config} */
// ✨ showtime: polished UI/animation overhaul
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00B4D8",
        secondary: "#FFD166",
        accent: "#FF4D6D",
        surface: "#F8FAFC",
        baseDark: "#0F172A",
      },
      fontFamily: {
        display: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      dropShadow: {
        glow: "0 0 15px #00B4D866",
      },
    },
  },
  plugins: [],
};
