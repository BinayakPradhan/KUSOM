/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        headingColor: "#2e2e2e",
        textColor: "#191406",
        yudhir: "#e98e72",
        primary: "#f9f3ef",
        secondary: "#301d86",
        tertiary: "#a13114",
        sworn: "#010A4F",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
