/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primario1: '#0755A3',
        primario2: '#2661b1',
        primario3: '#396bdf',
        primario4: '#4A7ACD',
        secundario4: '#E9E9E9'
      }
    }
  },
  plugins: [],
}
