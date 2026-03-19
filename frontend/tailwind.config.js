/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        gold: { DEFAULT: '#C9A96E', light: '#E8D5B0', dark: '#A07840' },
        cream: { DEFAULT: '#F5F0E8', dark: '#EDE5D5' },
        charcoal: { DEFAULT: '#1A1A1A', light: '#2D2D2D' },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
