/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#D22715",
        secondary: "#980a07",
        primaryDark: "#7e1108",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          // md: "4rem", // Optional: Add padding for medium screens
          // lg: "6rem", // Optional: Add padding for large screens
          // xl: "8rem", // Optional: Add padding for extra large screens
        },
      },
    },
  },
  plugins: [
    require('daisyui'),

  ],
}
