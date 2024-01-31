/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        darkGrey : "#2D2D2D",
        darkNavy : "#012639"
      },
      fontFamily:{
        Montserrat : ["Montserrat", "sans-sarif"],
        openSans : ["Open Sans", "sans-sarif"]
      }
    },
  },
  plugins: [],
}