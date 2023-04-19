/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6469ff",
        primary_100: "#F0F0FF",
        primary_200: "#E0E1FF",
        primary_600: "#5054cc",
        primary_700: "#464ab3",
        "gray-800": "#202123",
        "gray-500": "#353740",
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
};
