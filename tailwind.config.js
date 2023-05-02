/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';
console.log(colors);
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      spacing: { 18: '4.5rem' },
      colors: {
        primary: colors.purple,
      },
    },
  },
  plugins: [],
};
