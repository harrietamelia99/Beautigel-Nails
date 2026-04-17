import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#F5F0EB',
        nude: '#EDE6DC',
        mocha: '#9A8E82',
        'blue-accent': '#b4cbe6',
        navy: '#b4cbe6',
        charcoal: '#111111',
      },
      fontFamily: {
        sans: ['Henderson Sans Basic', 'ui-sans-serif', 'system-ui', '-apple-system', '"Segoe UI"', 'Roboto', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      letterSpacing: {
        widest: '0.2em',
        'extra-wide': '0.15em',
      },
      backgroundImage: {
        'gradient-ivory': 'linear-gradient(135deg, #F7F4EF 0%, #EDE8E0 100%)',
      },
      animation: {
        ticker: 'ticker 30s linear infinite',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.4s ease-out forwards',
        'slide-out-right': 'slideOutRight 0.4s ease-in forwards',
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideOutRight: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
