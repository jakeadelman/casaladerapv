const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      blue: colors.blue,
      one: "#E7F6F2",
      two: "#A5C9CA",
      three: "#395B64",
      four: "#2C3333",
      five: "#cdb4db",
      white: colors.white,
      pink: "#fd90b0",
      six: "#215482",
      seven: "#f0f0f1",
      black: colors.black,
      eight: "#f5f5f5",
    },
    extend: {},
    screens: {
      sm: "0px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
