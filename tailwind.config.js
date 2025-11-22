/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'pulse-slow': 'pulse 6s ease-in-out infinite',
        'marquee': 'marquee 30s linear infinite',
        'blink': 'blink 1s step-end infinite',
        'fade-in': 'fade-in 0.5s ease-out forwards',
        'fade-in-up': 'fade-in-up 0.3s ease-out forwards',
        'glitch-1': 'glitch-1 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite',
        'glitch-2': 'glitch-2 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite reverse',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        'fade-in': {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
        'fade-in-up': {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        'glitch-1': {
          '0%': { clipPath: 'inset(20% 0 80% 0)' },
          '20%': { clipPath: 'inset(60% 0 10% 0)' },
          '40%': { clipPath: 'inset(40% 0 50% 0)' },
          '60%': { clipPath: 'inset(80% 0 5% 0)' },
          '80%': { clipPath: 'inset(10% 0 70% 0)' },
          '100%': { clipPath: 'inset(30% 0 20% 0)' },
        },
        'glitch-2': {
          '0%': { clipPath: 'inset(10% 0 60% 0)' },
          '20%': { clipPath: 'inset(30% 0 10% 0)' },
          '40%': { clipPath: 'inset(80% 0 5% 0)' },
          '60%': { clipPath: 'inset(15% 0 50% 0)' },
          '80%': { clipPath: 'inset(60% 0 20% 0)' },
          '100%': { clipPath: 'inset(40% 0 40% 0)' },
        },
      }
    },
  },
  plugins: [],
}