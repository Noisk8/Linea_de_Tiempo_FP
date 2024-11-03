module.exports = {
  darkMode: 'class', // Habilita el modo oscuro basado en una clase
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          background: '#E3DAC9',
          text: '#000000',
          card: '#E3DAC3',
        },
        dark: {
          background: '#1a202c',
          text: '#ffffff',
          card: '#2d3748',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}