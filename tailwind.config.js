/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "turbo-pink": {
          DEFAULT: "#D7004D",
          50: "#FF90B7",
          100: "#FF7BAA",
          200: "#FF5290",
          300: "#FF2A76",
          400: "#FF015C",
          500: "#D7004D",
          600: "#9F0039",
          700: "#670025",
          800: "#2F0011",
          900: "#000000",
        },
        "turbo-gray": {
          DEFAULT: "#414141",
          50: "#9D9D9D",
          100: "#939393",
          200: "#7E7E7E",
          300: "#6A6A6A",
          400: "#555555",
          500: "#414141",
          600: "#252525",
          700: "#090909",
          800: "#000000",
          900: "#000000",
        },
      },
    },
  },
  plugins: [],
};
