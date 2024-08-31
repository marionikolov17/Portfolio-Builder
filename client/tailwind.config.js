/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        mainBackground: "#E8E8E8",
        primaryBlue: "#5D5FEF",
        blueGray: "#737791",
        primaryGray: "#F9FAFB",
        supportingYellow: "#FFA412",
        secondaryYellow: "#FFFAF1",
        strongRed: "#EB5757"
      },
      fontFamily: {
        montserrat: "'Montserrat', sans-serif",
      }
    },
  },
  plugins: [],
}

