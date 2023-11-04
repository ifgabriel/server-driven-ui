/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          50: '#EDEDED',
          100: '#bebebf',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
