/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        minimal: {
          bg: '#FAFAFA',
          card: '#FFFFFF',
          border: '#E5E7EB',
          borderHover: '#D1D5DB',
          dark: '#111827',
          muted: '#6B7280',
          subtle: '#9CA3AF',
          accent: '#2563EB',
          accentBg: '#EFF6FF'
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        display: ['"Plus Jakarta Sans"', 'sans-serif']
      }
    },
  },
  plugins: [],
}
