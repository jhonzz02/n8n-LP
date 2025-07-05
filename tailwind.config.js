/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      screens: {
        xs: '400px', // Breakpoint personalizado (min-width: 400px)
      },
    },
  },
  plugins: [],
};
