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
          DEFAULT: "#FAAA01",
        },
        secondary: {
          DEFAULT: "#F17228",
        },
        tertiary: {
          DEFAULT: "#fce3d4",
        },
        success: {
          DEFAULT: "#79B93C",
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
        dangerBtn: {
          DEFAULT: "rgba(241, 114, 40, 0.2);",
        },
        successBtn: {
          DEFAULT: "rgba(121, 185, 60, 0.2);",
        },
      },
    },
  },
  plugins: [],
  //safelist: process.env.NODE_ENV === "development" ? [{ pattern: /.*/ }] : [],
};
