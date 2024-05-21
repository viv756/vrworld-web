/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        montserrat:["Montserrat","sans-serif"]
      },
      colors: {
        primary: "#00C2FF",
        secondary: "#DD08FF",
        dark: "#111111"
        
      },
      container: {
        center: "true",
        padding: {
          DEFAULT: "1rem",
          sm:"3rem"
        }
      }
    },
  },
  plugins: [],
};