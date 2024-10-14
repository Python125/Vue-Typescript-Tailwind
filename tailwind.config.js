/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-darkblue": "#005ec7",
        "custom-lightblue": "#0573ee",
      },
    },
  },
  plugins: [],
};