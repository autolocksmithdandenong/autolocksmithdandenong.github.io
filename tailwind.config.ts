import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './data/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#050b16',
          900: '#0a1220',
          800: '#0f1b30',
          700: '#162542',
          600: '#1e3358',
        },
        cyan: {
          400: '#38e0ff',
          500: '#0fc9f0',
          600: '#0aa3c2',
        },
        amber: {
          400: '#ffb547',
          500: '#f59e0b',
          600: '#d97706',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        xl: '0.875rem',
        '2xl': '1.25rem',
      },
      boxShadow: {
        soft: '0 8px 30px -12px rgba(5, 11, 22, 0.25)',
        card: '0 4px 20px -6px rgba(5, 11, 22, 0.15)',
      },
      maxWidth: {
        content: '1280px',
      },
    },
  },
  plugins: [],
};

export default config;
