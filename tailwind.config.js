/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0d1117',
          accent: '#00ff95'
        },
        light: {
          bg: '#f9f9f9',
          accent: '#007acc'
        }
      },
      animation: {
        'cursor-pulse': 'cursor-pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'cursor-pulse': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
      },
    },
  },
  plugins: [],
}