/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3b82f6",
        secondary: "#111427",
        focusColor: "#0095ff80",
        btnColorSecondary: "#000000",
        colorSection_1: "#f9fafb",
        colorSection_2: "#111427",
        colorTextFooter: "#f3f3f6bf",
        colorTextSecundary: "#363c50",
      },
      fontSize: {
        header: "1.125rem",
        main: "1.125rem",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      maxWidth: {
        containerMax: "1400px",
      },
      width: {
        containerWitdh: "95%",
        containerWitdhMain: "85%",
      },
      height: {
        header: "6rem",
      },
      borderRadius: {
        md: "0.375rem",
      },
      boxShadow: {
        "3xl": "0px 7px 29px 0px rgba(100, 100, 111, 0.2)",
      },
      lineHeight: {
        12: "4.5rem",
      },
    },
  },
  plugins: [],
};
