/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        consolata: ['Inconsolata', 'monospace'],
      },
      colors: {
        "primary-dark": "#1B1A17",
        "primary-gray": "#1F1E1B",
        "primary-orange": "#A35709",
        "primary-yellow": "#FF8303",
        "primary-white": "#F0E3CA",
        "primary-button": "#32312E",
      },
      backgroundImage: {
        "card-portfolio": "url('/card_portfolio.png')",
      },
    },
  },
  plugins: [],
}
