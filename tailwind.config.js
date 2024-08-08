/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./**/*.{js,jsx,ts,tsx,vue}"],
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
