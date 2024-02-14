// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#2a2a2a',
        secondary: '#767676',
        hover: '#ff9e0d',
        dark: '#333',
        grey: '#ddd',
        light: '#fcfcfc',
      },
    },
  },
  plugins: [],
};
