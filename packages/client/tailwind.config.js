/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Bowlby One SC", "sans-serif"],
      },
    },
  },
  plugins: [],
};
