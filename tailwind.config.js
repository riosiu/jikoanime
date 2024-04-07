/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["cupcake", "dark", "cmyk"],
  },
  plugins: [require("daisyui")],
};
