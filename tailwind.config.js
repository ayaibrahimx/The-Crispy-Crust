/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        darkGray: '#020305',
      },
      fontFamily: {
        pacifico: 'Pacifico, cursive',
        roboto: 'Roboto, sans-serif',
      },
    },
  },
  plugins: [],
};
