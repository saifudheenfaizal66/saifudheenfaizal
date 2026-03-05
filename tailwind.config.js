/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: '#0A0A0A',
        secondary: '#1A1A1A',
        accent: '#FF5F1F',
        'accent-light': '#FF7A40',
        'accent-glow': 'rgba(255,95,31,0.3)',
        glass: 'rgba(255,255,255,0.05)',
        'glass-border': 'rgba(255,255,255,0.1)',
      },
      fontFamily: {
        display: ['Syncopate', 'sans-serif'],
        heading: ['Lexend', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'orange-glow': 'radial-gradient(ellipse at center, rgba(255,95,31,0.15) 0%, transparent 70%)',
      },
      boxShadow: {
        'orange-sm': '0 0 15px rgba(255,95,31,0.3)',
        'orange-md': '0 0 30px rgba(255,95,31,0.4)',
        'orange-lg': '0 0 60px rgba(255,95,31,0.5)',
        'glass': '0 8px 32px rgba(0,0,0,0.4)',
      },
      animation: {
        'shimmer': 'shimmer 2.5s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(255,95,31,0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(255,95,31,0.7)' },
        }
      },
    },
  },
  plugins: [],
}
