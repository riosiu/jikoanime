/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {},
    screens: {
      phone: { max: "440px" },
      tablet: { max: "1100px" },
    },
  },
  daisyui: {
    themes: ["cupcake", "dark", "cmyk"],
  },
  plugins: [require("daisyui")],
};
