/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tech: {
          darkest: '#080C14',
          dark: '#0F1523',
          card: '#161F33',
          cardHover: '#1C2842',
          border: '#232F47',
          borderActive: '#00E5FF',
          cyan: '#00E5FF',
          emerald: '#00E676',
          amber: '#FF8C42',
          purple: '#B388FF',
          muted: '#94A3B8',
          subtle: '#475569',
          light: '#F8FAFC'
        }
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        body: ['"Plus Jakarta Sans"', 'sans-serif']
      },
      backgroundImage: {
        'grid-pattern': "radial-gradient(rgba(0, 229, 255, 0.08) 1px, transparent 0)",
        'dots-pattern': "radial-gradient(rgba(148, 163, 184, 0.15) 1px, transparent 0)"
      }
    },
  },
  plugins: [],
}
