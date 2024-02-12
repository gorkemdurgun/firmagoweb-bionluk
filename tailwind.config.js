import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      sky: colors.sky,
      blue: colors.blue,
      red: colors.red,
      green: colors.green,
      purple: colors.purple,
      pink: colors.pink,
      orange: colors.orange,
      teal: colors.teal,
      lime: colors.lime,
      cyan: colors.cyan,
      rose: colors.rose,
      fuchsia: colors.fuchsia,
      amber: colors.amber,
      navy: {
        50: "#E5E3FC",
        100: "#CBC8F9",
        200: "#9790F3",
        300: "#6359EE",
        400: "#2E21E8",
        500: "#1F14BD",
        600: "#160E86",
        700: "#0D084D",
        800: "#080533",
        900: "#05031C",
        950: "#02010E",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
