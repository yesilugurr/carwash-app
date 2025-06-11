/** @type {import('tailwindcss').Config} */
// 💄 UI polish
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',
        secondary: '#f97316',
      },
      fontFamily: {
        display: ['Poppins', 'sans-serif'],
      },
      dropShadow: {
        glow: '0 0 15px #2563eb66',
      },
    },
  },
  plugins: [],
};
