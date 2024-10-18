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
        // Ginny and Molly
        "33.5rem": "33.5rem",
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
        // George and Snape
        "35.2rem": "35.2rem",
        // Fred
        "32.3rem": "32.3rem",
        // Mad-Eye Moody
        "35.7rem": "35.7rem",
        // Tonks
        "38.6rem": "38.6rem",
        // Neville
        "38.9rem": "38.9rem",
        // Draco
        "32.5rem": "32.5rem",
        // Narcissa
        "34.8rem": "34.8rem",
        // Voldemort
        "29.7rem": "29.7rem",
      },
    },
  },
  plugins: [],
};
