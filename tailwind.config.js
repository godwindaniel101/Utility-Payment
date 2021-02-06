const colors = require('tailwindcss/colors')
module.exports = {
    purge:false,
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('autoprefixer'),
  ],
}