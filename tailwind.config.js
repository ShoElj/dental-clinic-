module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', 
    './public/index.html'
  ],
  darkMode: 'media', // or remove this line if you don't use dark mode
  theme: {
    extend: {
      colors: {
        primary: '#1a202c',
        secondary: '#2d3748',
        accent: '#4a5568',
      },
    },
  },
  plugins: [],
};
