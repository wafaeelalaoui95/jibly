/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    // Avatar and dynamic icon backgrounds
    'bg-lavender-100', 'bg-lavender-200', 'text-lavender-500', 'text-lavender-600', 'text-lavender-700',
    'bg-butter-100', 'bg-butter-200', 'text-butter-500', 'text-butter-600', 'text-butter-700',
    'bg-mint-100', 'bg-mint-200', 'text-mint-500', 'text-mint-600', 'text-mint-700',
    'bg-sky-100', 'bg-sky-200', 'text-sky-500', 'text-sky-600', 'text-sky-700',
    'bg-blush-100', 'bg-blush-200', 'text-blush-500', 'text-blush-600', 'text-blush-700',
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FEFCF8',
          100: '#FAF6EF',
          200: '#F3EDE0',
          300: '#EBE1CC',
        },
        beige: {
          50: '#FBF7F1',
          100: '#F4ECDE',
          200: '#E8D9BD',
          300: '#D9C39A',
        },
        lavender: {
          50: '#F6F4FF',
          100: '#ECE6FF',
          200: '#D9CCFF',
          300: '#BFA8FF',
          400: '#A083FB',
          500: '#8466F0',
          600: '#6B4DD8',
          700: '#5538B8',
        },
        butter: {
          50: '#FFFBED',
          100: '#FFF4CC',
          200: '#FFE899',
          300: '#FFD966',
          400: '#FFCB3D',
          500: '#F4B81E',
          600: '#D49906',
        },
        sky: {
          50: '#F0F7FB',
          100: '#DDEDF5',
          200: '#B8DAEB',
          300: '#8BC3DC',
          400: '#5DA8C9',
          500: '#3E8DB0',
        },
        mint: {
          50: '#F1FAF6',
          100: '#DCF1E6',
          200: '#B3E2C9',
          300: '#82CDA8',
          400: '#54B387',
          500: '#369A6E',
        },
        blush: {
          50: '#FEF4F4',
          100: '#FCE4E4',
          200: '#F7C4C4',
          300: '#EF9C9C',
          400: '#E47373',
          500: '#D45252',
        },
        ink: {
          50: '#F7F5F2',
          100: '#E5E0DA',
          200: '#BFB6AB',
          300: '#857B6F',
          400: '#4F4639',
          500: '#2A241D',
          600: '#181410',
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
        soft: '0 4px 24px -8px rgba(42, 36, 29, 0.08)',
        glow: '0 8px 40px -12px rgba(132, 102, 240, 0.25)',
        float: '0 12px 40px -16px rgba(42, 36, 29, 0.15)',
        card: '0 1px 3px rgba(42, 36, 29, 0.06), 0 4px 16px -4px rgba(42, 36, 29, 0.08)',
      },
      animation: {
        'walk': 'walk 16s linear infinite',
        'float': 'float 5s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'cloud-drift': 'cloud-drift 40s linear infinite',
        'wheel-spin': 'wheel-spin 1s linear infinite',
        'plane-pass': 'plane-pass 18s linear infinite',
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
      },
      keyframes: {
        walk: {
          '0%': { transform: 'translateX(-10%)' },
          '100%': { transform: 'translateX(110vw)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'cloud-drift': {
          '0%': { transform: 'translateX(-20%)' },
          '100%': { transform: 'translateX(120%)' },
        },
        'wheel-spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'plane-pass': {
          '0%': { transform: 'translateX(-30%) translateY(0)' },
          '50%': { transform: 'translateX(50%) translateY(-8px)' },
          '100%': { transform: 'translateX(130%) translateY(0)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
      },
    },
  },
  plugins: [],
};
