/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
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
        black: {
          70: {
            DEFAULT: "rgba(0, 0, 0, 0.7)",
          },
        },
        blue: {
          DEFAULT: "#5EACE5",
          dark: {
            DEFAULT: "#2962C8",
          },
        },
        background: {
          DEFAULT: "#f0f2f5",
        },
        transparent: "transparent",
      },
      boxShadow: {
        1: "0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12)!important",
        2: "0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)!important",
        3: "0 3px 3px -2px rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 1px 8px 0 rgba(0,0,0,.12)!important",
      },
      border: {
        DEFAULT: "1px",
      },
    },
  },
  plugins: [],
  //safelist: process.env.NODE_ENV === "development" ? [{ pattern: /.*/ }] : [],
};
