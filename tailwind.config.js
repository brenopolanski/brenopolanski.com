/* eslint-disable @typescript-eslint/no-var-requires */
const defaultConfig = require('tailwindcss/defaultConfig')

module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    fontFamily: {
      sans: ['Inter', ...defaultConfig.theme.fontFamily.sans],
    },
    colors: {
      black: 'var(--theme-black)',
      white: 'var(--theme-white)',
      transparent: 'transparent',
      'theme-background': 'var(--theme-background-color)',
      'theme-text': 'var(--theme-text-color)',
      'theme-highlight': 'var(--theme-highlight-color)',
      'theme-border': 'var(--theme-border-color)',
      'theme-border-link': 'var(--theme-border-link-color)',
    },
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultConfig.theme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/ui'), require('tailwindcss-debug-screens')],
}
