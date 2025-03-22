/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        'xs': '375px', // Extra small screens
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
        },
      },
      colors: {
        'primary-light': '#48B2E7',
        'primary': '#0076B1',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(270deg, #48B2E7, #0076B1)',
      },
    },
  },
  plugins: [],
} 