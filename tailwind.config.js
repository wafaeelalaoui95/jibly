/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Cream backgrounds
        cream: {
          50: '#FDFAF5',
          100: '#FAF4EA',
          200: '#F4E9D5',
          300: '#EDDDBE',
        },
        // Warm peach
        peach: {
          50: '#FFF4ED',
          100: '#FFE4D1',
          200: '#FFC9A8',
          300: '#FFA678',
          400: '#FF8552',
          500: '#F26B3A',
          600: '#D9521F',
        },
        // Sky blue
        sky: {
          50: '#EEF8FB',
          100: '#D7EEF5',
          200: '#A8DCE8',
          300: '#74C4D7',
          400: '#4FA8BF',
          500: '#3A8BA3',
        },
        // Soft green
        sage: {
          50: '#F0F5EE',
          100: '#DEE9D7',
          200: '#BFD4B0',
          300: '#9CBA84',
          400: '#7A9F60',
          500: '#5E8245',
        },
        // Sand
        sand: {
          50: '#FAF6EE',
          100: '#F2E8D0',
          200: '#E5D4A8',
          300: '#D4BB7B',
          400: '#C19E52',
          500: '#9E8038',
        },
        // Terracotta
        terra: {
          50: '#FBEFEA',
          100: '#F4D4C7',
          200: '#E8AB94',
          300: '#D9805F',
          400: '#C25A36',
          500: '#A24322',
        },
        // Ink (deep neutral instead of black)
        ink: {
          50: '#F5F2EE',
          100: '#E3DDD5',
          200: '#B8AEA0',
          300: '#7C7264',
          400: '#4A4136',
          500: '#2D2620',
          600: '#1C1813',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        soft: '0 4px 24px -8px rgba(74, 65, 54, 0.12)',
        warm: '0 8px 32px -12px rgba(242, 107, 58, 0.25)',
        float: '0 12px 40px -16px rgba(74, 65, 54, 0.18)',
      },
      animation: {
        'walk': 'walk 12s linear infinite',
        'float': 'float 4s ease-in-out infinite',
        'float-slow': 'float 7s ease-in-out infinite',
        'cloud-drift': 'cloud-drift 30s linear infinite',
        'wiggle': 'wiggle 0.6s ease-in-out infinite',
        'bounce-soft': 'bounce-soft 2s ease-in-out infinite',
      },
      keyframes: {
        walk: {
          '0%': { transform: 'translateX(-10%)' },
          '100%': { transform: 'translateX(110vw)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'cloud-drift': {
          '0%': { transform: 'translateX(-20%)' },
          '100%': { transform: 'translateX(120%)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
        'bounce-soft': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
    },
  },
  plugins: [],
};
