/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "dark": "#1b1b1b",
        "dark-100": "#272727",
        "main": "#F8AD00",
        "rust": "#cd412b"
      }
    },
  },
  plugins: [],
}