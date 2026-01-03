/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          DEFAULT: '#00ff88',
          light: '#5effb1',
          dark: '#00cc6a'
        },
        darkbg: '#050505',
        glass: 'rgba(255, 255, 255, 0.05)'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}