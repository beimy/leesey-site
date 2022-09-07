/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'current',
      black: colors.black,
      white: colors.white,
      'stone-green': '#b8aa8d',
      'orange': '#c78869',
      'sage-green': '#bab78c',
      'true-grey': '#c1bca9',
      'dark-grey': '#67695e',
      'red-accent': '#8f665d',
      'taupe': '#f1e7cb',
      'warm-white': '#f4f1eb'
    },
    extend: {},
  },
  plugins: [],
}
