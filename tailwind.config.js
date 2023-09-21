/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "2rem",
        sm: "3rem",
        lg: "4rem",
      },
      center: true,
    },
    extend: {},
  },
  daisyui: {
    themes: ["bumblebee"],
  },
  plugins: [require("daisyui")],
};
