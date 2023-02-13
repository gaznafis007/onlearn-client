/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#8E44AD",
        secondary: "#3498DB",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "#9B59B6",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
