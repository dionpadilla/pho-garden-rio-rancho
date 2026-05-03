import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './data/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        emeraldMain: '#0A6B3E',
        spring: '#4ADE80',
        garden: '#A8E6CF',
        rice: '#F8F4ED',
        gold: '#D4AF77',
        broth: '#9C2A2A',
        ink: '#1A1A1A'
      },
      fontFamily: {
        serif: ['var(--font-display)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'Inter', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        glow: '0 24px 80px rgba(10,107,62,0.24)',
        gold: '0 18px 70px rgba(212,175,119,0.25)'
      },
      backgroundImage: {
        'garden-radial': 'radial-gradient(circle at top left, rgba(74,222,128,.22), transparent 35%), radial-gradient(circle at bottom right, rgba(212,175,119,.22), transparent 40%)'
      }
    }
  },
  plugins: []
};
export default config;
