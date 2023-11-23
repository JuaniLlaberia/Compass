/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'dark-bg-1': '#0A0A0A',
        'dark-bg-2': '#1D1B1B',
        'dark-bg-3': '#282626',
        'dark-text-1': '#F5F5F5',
        'dark-text-2': '#AEAEAE',
        'dark-text-3': '',
        'dark-shadow-1': '',
        'dark-shadow-2': '',
        'light-bg-1': '#FFFFFF',
        'light-bg-2': '#F4F4F4',
        'light-bg-3': '#EAEAE9',
        'light-text-1': '#0A0A0A',
        'light-text-2': '#8f8d8d',
        'light-text-3': '',
        'light-shadow-1': '',
        'light-shadow-2': '',
        'secondary-1': '#936CF5',
      },
    },
  },
  plugins: [],
};
