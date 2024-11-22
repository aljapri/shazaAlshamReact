/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enable dark mode using the 'class' strategy
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        "primary": '#166534',
        "secondary": '#F65005',
        "light": '#F7F8FC',
        "dark": '#111111',
        "darkBackground": '#1a1a1a', // Example dark background color
        "darkText": '#ffffff', // White text color
        "darkBlue":"#0D1B2A"
      }
    },

  },
  plugins: [],
}
