/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        camphor: ['Camphor', 'Open Sans', 'Segoe UI', 'sans-serif'],
        monaco: ['Monaco', 'Consolas', 'Lucida Console', 'monospace']
      },
      colors: {
        purple: '#747fe0',
        yellow: '#fdbc3d',
        grey: '#525f7f',
        lightGrey: '#f0f0f0',
        fadedPurple: '#5a5d7a',
        fadedBlue: '#7795f8',
        fadedYellow: '#e7d184',
        highlighterGreen: '#92eac0',
        fadedWhite: '#f7f7f7',
        linkTeal: '#35feff',
      }
    },
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    }
  },
  plugins: []
}
