/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      borderRadius: {
        '6xl': '3rem',  // Puedes ajustar este valor según lo necesites
      },
      colors: {
        'mcn-blue': '#102A41',
        'mcn-skyblue': '#98DBFF',
        'mcn-darksky': '#2EC3EE',
        'mcn-orange': '#F4B53E',
      },
    },
  },
  plugins: [],
}

