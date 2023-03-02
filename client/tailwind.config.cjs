/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        app: {
          DEFAULT: "#4d5156",
        },
        iconColor: {
          DEFAULT: "#00000080",
        },
        white: {
          DEFAULT: "#FFFFFF",
        },
        primary: {
          DEFAULT: "#5DAD72",
        },
        secondary: {
          DEFAULT: "#f1b45b",
        },
        tertiary: {
          DEFAULT: "#A2A9B2",
        },
        success: {
          DEFAULT: "#28c76f",
        },
        danger: {
          DEFAULT: "#ea5455",
        },
        warning: {
          DEFAULT: "#ff9f43",
        },
        info: {
          DEFAULT: "#00cfe8",
        },
        dark: {
          DEFAULT: "#4b4b4b",
        },
      },
    },
  },
  plugins: [],
  //safelist: process.env.NODE_ENV === "development" ? [{ pattern: /.*/ }] : [],
};
