module.exports = {
  darkMode: 'class', // Habilita el modo oscuro basado en una clase
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          background: '#ffffff',
          text: '#000000',
          card: '#f3f4f6',
        },
        dark: {
          background: '#1a202c',
          text: '#ffffff',
          card: '#2d3748',
        },
      },
    },
  },
  plugins: [],
}