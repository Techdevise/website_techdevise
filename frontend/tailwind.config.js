/** @type {import('tailwindcss').Config} */

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat'],
      },
      screens: {
        'xs': '475px', 
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1680px',
      },
      colors: {
        'primary-green': '#A3C3BC',
        'secondary-green': '#8CBEB7',
        'background-dark': '#061611',
        'overlay-dark': '#0A1F1A',
        'border-green': '#41B883',
        'vision-blue': '#2563eb',
      },
      borderRadius: {
        'custom': '20px 40px 60px 80px',
        '26': '26px',
        'mixed-vision': '30px 60px 30px 60px',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
