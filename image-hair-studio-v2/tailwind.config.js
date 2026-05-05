/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette — strict
        ink: '#1A1A1A',        // primary text / headers
        cream: 'C9A0A0',      // background — warmer, slightly darker
        walnut: '#6B4B2A',     // secondary / accents / CTAs
        sand: '#D8CFC4',       // neutral sections
        // Subtle supporting tones derived from the palette
        'walnut-soft': '#8C6840',
        'walnut-deep': '#4F371F',
        'cream-deep': '#EDE8E0',
        'ink-soft': '#2B2724',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'tightest': '-0.04em',
        'tighter-x': '-0.02em',
        'wider-x': '0.18em',
        'widest-x': '0.32em',
      },
      transitionTimingFunction: {
        'out-soft': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slow-zoom': {
          '0%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.9s cubic-bezier(0.22, 1, 0.36, 1) both',
        'fade-in': 'fade-in 1.2s ease-out both',
        'slow-zoom': 'slow-zoom 8s ease-out both',
      },
    },
  },
  plugins: [],
};
