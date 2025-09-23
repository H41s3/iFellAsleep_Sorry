/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'comic': ['Fredoka', 'Comic Neue', 'Comic Sans MS', 'cursive', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
