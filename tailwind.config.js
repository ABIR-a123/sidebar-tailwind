const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    content: ['./public/**/*.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '22': '500px',
      },
      colors:{
        'cyan':colors.cyan,
        'teal':colors.teal
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
