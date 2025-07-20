/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0057B8', // azul fuerte
        secondary: '#FF6A00', // naranja brillante
        fondo: '#FDF6F0', // fondo suave, opcional
      },
    },
  },
  plugins: [],
}

