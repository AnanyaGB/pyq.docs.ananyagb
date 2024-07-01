/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Mulish", "sans-serif"],
        serif: ["Lora", "serif"],
        mono: ["Roboto Mono", "monospace"],
        cursive: ["Handlee", "cursive"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
