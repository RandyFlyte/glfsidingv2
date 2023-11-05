/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        '5xl': '5px 10px 20px 20px rgba(0, 0, 0, 0.8)',
      },
      colors: {
        'navyblue1': {
          200: '#112B3C',
        },
        'custom-color': {
          200: '#abcdef',
        },
      },
      fontFamily: {
        'sans': ['Times New Roman', 'Courier New', 'monospace'],
      },
    },
    plugins: [],
    corePlugins: {
      scrollSnapType: true,
    },
    darkMode: 'class',
  },
};
