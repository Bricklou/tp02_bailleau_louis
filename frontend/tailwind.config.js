/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,css}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ['emerald']
  },
  plugins: [require('daisyui')],
}

