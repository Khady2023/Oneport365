/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#b9edda",
        secondary: "#797a7a",
        green: "#04bd6d"
        
      }
    },
  },
  plugins: [],
}

