/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {},
    screens: {
      phone: { min: "120px", max: "440px" },
      tablet: { min: "441px", max: "1100px" },
    },
  },
  daisyui: {
    themes: ["cupcake", "dark", "cmyk"],
  },
  plugins: [require("daisyui")],
};
