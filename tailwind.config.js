/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        red: '#E50914',
        black: '#221F1F',
        white: '#F5F5F1',
        lightBlack: '#0000006f',
        lightGrey: '#dfe2e7',
      },
    },
  },
  plugins: [
    plugin(({ addUtilities, theme, variants }) => {
      addUtilities({
        '@keyframes shimmer': {
          '0%': {
            'background-position': '-1000%',
          },
          '100%': {
            'background-position': '1000%',
          },
        },
        '.shimmer-animation': {
          animation: 'shimmer 4s infinite linear',
          background: `linear-gradient(90deg, ${theme('colors.white')} 25%, ${theme('colors.lightGrey')} 70%, ${theme('colors.white')} 75%)`,
          'background-size': '200% 100%',
          'box-shadow': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        },
      }, variants('animation'));
    }),
  ],
};
