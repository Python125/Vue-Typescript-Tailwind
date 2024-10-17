/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "3xl": "1920px",
        "4xl": "3840px",
      },
      colors: {
        "custom-darkblue": "#005ec7",
        "custom-lightblue": "#0573ee",
        "custom-gray": "#4d4d4d",
      },
      spacing: {
        /* --- 3840 x 2160 --- */
        // General
        "48rem": "48rem",
        "31rem": "31.2rem",
        "42rem": "42rem",
        "12.7rem": "12.7rem",
        // Ginny
        "33.6rem": "33.6rem",
        // Ron
        "31.8rem": "31.8rem",
        // Hermione
        "37.7rem": "37.7rem",
        // Luna and Lupin
        "34.5rem": "34.5rem",
        // Sirius
        "30.3rem": "30.3rem",
        // Dumbledore
        "41.6rem": "41.6rem",
        // McGonagall
        "41rem": "41rem",
        // Snape
        "35.2rem": "35.2rem",
      },
    },
  },
  plugins: [],
};
