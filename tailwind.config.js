const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '1.75rem' }],
      lg: ['1.125rem', { lineHeight: '2rem' }],
      xl: ['1.25rem', { lineHeight: '2rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['2rem', { lineHeight: '2.5rem' }],
      '4xl': ['2.5rem', { lineHeight: '3.5rem' }],
      '5xl': ['3rem', { lineHeight: '3.5rem' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1.1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    extend: {
      width: {
        110: '35rem',
        120: '40rem',
        140: '50rem',
      },

      borderRadius: {
        '4xl': '2rem',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white: '#ffffff',
        purple: '#3f3cbb',
        midnight: '#121063',
        metal: '#939598',
        tahiti: '#3ab7bf',
        silver: '#ecebff',
        'bubble-gum': '#ff77e9',
        bermuda: '#78dcca',
        main: {
          50: '#fff5f5',
          100: '#ffe3e3',
          200: '#ffc9c9',
          300: '#ffa8a8',
          400: '#ff8787',
          500: '#e8363b',
          600: '#ff5f5f',
          700: '#ff3f3f',
          800: '#ff1f1f',
          900: '#ff0f0f',
        },
        secondary: {
          50: '#fffff0',
          100: '#fefcbf',
          200: '#faf089',
          300: '#f6e05e',
          400: '#ecc94b',
          500: '#f0cd03',
          600: '#d69e2e',
          700: '#b7791f',
          800: '#975a16',
          900: '#744210',
        },
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        display: ['Lexend', ...defaultTheme.fontFamily.sans],
      },
      maxWidth: {
        '2xl': '40rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwindcss'),
    require('postcss-nested'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
