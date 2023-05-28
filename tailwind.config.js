/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'index.html',
    './node_modules/flowbite/**/*.js'
  ],
  darkMode: 'class',
  theme: {
    container:{
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary : '#14b8a6',
        secondary : '#64748b',
        dark : '#0f172a',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

