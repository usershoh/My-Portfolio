/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: "#c49b1d",
        dark: "#333333",
        backround: "#f5f5f5",
        hover: "#ccae62",
      },
    },
  },
  plugins: [],
};
