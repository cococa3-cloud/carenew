
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mint: {
          50: '#E6FFFA',
          100: '#B2F5EA',
          200: '#81E6D9',
          500: '#38B2AC',
          600: '#319795',
        }
      }
    },
  },
  plugins: [],
}
