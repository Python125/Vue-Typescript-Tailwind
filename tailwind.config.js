/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-darkblue": "#005ec7",
        "custom-lightblue": "#0573ee",
        "custom-gray": "#4d4d4d",
      },
      spacing: {
        "48rem": "48rem",
        "31rem": "31.2rem",
        "42rem": "42rem",
        "12.5rem": "12.5rem",
      },
    },
  },
  plugins: [],
};