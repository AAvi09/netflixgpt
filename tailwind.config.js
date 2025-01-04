/** @type {import('tailwindcss').Config} */
import scrollbarHide from "tailwind-scrollbar-hide";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // You can extend other themes here if needed
    },
  },
  plugins: [
    scrollbarHide, // This plugin hides the scrollbar
  ],
};
