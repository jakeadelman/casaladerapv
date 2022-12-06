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
    },
    extend: {},
  },
  plugins: [],
};
