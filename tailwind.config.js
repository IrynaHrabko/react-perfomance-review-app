/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-main': '#A6A2A2',
        'brand-secondary': '#C1839F',
        'brand-accent': '#406E8E',
        'brand-strong': '#00171F',
        'brand-white': '#EDF5FC',
      },
    },
    fontFamily: {
      'playfair-display': ['Playfair Display', 'sans-serif'],
      montserrat: ['Montserrat', 'serif'],
    },
  },
  plugins: [],
};
