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
        'mcn-skyblue': '#0859C6',
        'mcn-darksky': '#10A5F5',
        'mcn-orange': '#F4B53E',
      },
    },
  },
  plugins: [],
}

