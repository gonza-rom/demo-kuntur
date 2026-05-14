/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Syne"', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
      colors: {
        brand: {
          50:  '#edfaf5',
          100: '#d2f3e7',
          200: '#a8e7d1',
          300: '#6fd4b5',
          400: '#35bb95',
          500: '#1a9f7d',
          600: '#138167',
          700: '#116754',
          800: '#115244',
          900: '#0f4438',
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease both',
        'pulse-slow': 'pulse 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};