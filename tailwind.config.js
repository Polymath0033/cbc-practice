/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["Inconsolata", "monospace"],
        serif: ["Lora", "serif"],
      },
      colors: {
        purple: "#A445ED",
        "dark-bg": "#050505",
        "text-light": "#2D2D2D",
        "grey-light": "#E9E9E9",
        "grey-dark": "#3A3A3A",
        grey: "#757575",
        border: "#E9E9E9",
      },
    },
  },
  plugins: [],
};
