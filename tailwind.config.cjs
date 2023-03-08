/* eslint-disable */
const defaults = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      extend: {
        fontFamily: {
          // sans: ["InterVariable", "Inter", ...defaults.fontFamily.sans],
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
