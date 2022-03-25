/* eslint-disable import/no-extraneous-dependencies */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4654f9ff',
        },
        secondary: {
          DEFAULT: '#e640b0ff',
        },
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => { // Custom utilities
      const newUtilities = {
        '.row': {
          display: 'flex',
          'flex-wrap': 'wrap',
        },
        '.stack': {
          display: 'flex',
          'flex-direction': 'column',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    }),
  ],
};
