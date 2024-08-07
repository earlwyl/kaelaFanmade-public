/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        notosan: ["Noto Sans"],
        beau: ["Beau Rivage"],
      },
      backgroundImage: {
        "hero-pattern": "url('/img/hero.svg)",
      },
    },
  },
  plugins: [],
};
