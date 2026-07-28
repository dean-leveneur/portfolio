/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          bg: '#F5F3EF',
          grid: '#E4E0D7',
          card: '#FFFFFF',
          cardHover: '#FAF8F5',
          border: '#E2DDD3',
          borderActive: '#1E3A8A'
        },
        ink: {
          dark: '#17191C',
          muted: '#5C6470',
          subtle: '#8C95A3',
          light: '#F8FAFC'
        },
        blueprint: {
          DEFAULT: '#1E3A8A',
          hover: '#1D4ED8',
          light: '#EFF6FF'
        },
        copper: {
          DEFAULT: '#B95000',
          hover: '#D97706',
          light: '#FFFBEB'
        },
        emeraldSeal: {
          DEFAULT: '#059669',
          light: '#ECFDF5'
        }
      },
      fontFamily: {
        display: ['"Syne"', '"Space Grotesk"', 'sans-serif'],
        serif: ['"Source Serif 4"', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        body: ['"Source Serif 4"', 'serif'],
        sans: ['"Space Grotesk"', 'sans-serif']
      }
    },
  },
  plugins: [],
}
