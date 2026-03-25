/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        gold: { DEFAULT: '#8AA5B1', light: '#B5CAD3', dark: '#6B8A98' },
        cream: { DEFAULT: '#F0F5F7', dark: '#E2ECF0' },
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
