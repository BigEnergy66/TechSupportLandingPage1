/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Outfit"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        brand: {
          navy: {
            950: '#050811',
            900: '#0a0f1d',
            850: '#0d1527',
            800: '#121d36',
            700: '#1b2848',
            600: '#273863',
          },
          electric: {
            300: '#7dd3fc',
            400: '#38bdf8',
            500: '#0ea5e9',
            600: '#0284c7',
            700: '#0369a1',
          },
          terminal: {
            300: '#6ee7b7',
            400: '#34d399',
            500: '#10b981',
            glow: '#00ff9d',
            dark: '#032616',
          },
          sunny: {
            300: '#fde047',
            400: '#facc15',
            500: '#eab308',
            warm: '#ffb703',
          },
          flame: '#fb923c',
        }
      },
      boxShadow: {
        'glow-terminal': '0 0 30px -5px rgba(0, 255, 157, 0.35)',
        'glow-electric': '0 0 30px -5px rgba(14, 165, 233, 0.35)',
        'glow-sunny': '0 0 30px -5px rgba(250, 204, 21, 0.35)',
        'glow-card': '0 10px 40px -10px rgba(2, 132, 199, 0.15)',
        'tactile': '0 8px 0px 0px rgba(10, 15, 29, 0.8), 0 15px 25px -5px rgba(0, 0, 0, 0.5)',
        'tactile-pressed': '0 2px 0px 0px rgba(10, 15, 29, 0.8), 0 5px 10px -2px rgba(0, 0, 0, 0.5)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 7s ease-in-out 2s infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'cursor-blink': 'blink 1s step-start infinite',
        'scanline': 'scanline 8s linear infinite',
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.9' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
