/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#191919', // Dark background
        darker: '#000', // Darker background
      },
      zIndex: {
        '110': '110',
      },
    },
  },
  plugins: [],
}
