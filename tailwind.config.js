/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgMain: '#ffffff',
        bgPanel: '#ffffff',
        border: 'rgba(0,0,0,0.08)',
        textPrimary: '#1a1a1a',
        textSecondary: '#4a4a4a',
        textMuted: '#71717a',
        accent: '#000000',
        accentHover: '#333333',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        display: ['Outfit', 'Montserrat', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
