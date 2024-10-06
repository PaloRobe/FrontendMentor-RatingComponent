/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        OverPass: ["Overpass", "sans-serif"],
      },
      colors:{
        Orange: "hsl(25, 97%, 53%)",
        White: "hsl(0, 0%, 100%)",
        LightGrey: "hsl(217, 12%, 63%)",
        DarkBlue: "hsl(213, 19%, 18%)",
        VeryDarkBlue:"hsl(216, 12%, 8%)"
      }
    },
  },
  plugins: [
    plugin(function({ addBase }) {
     addBase({
        'html': { fontSize: "15px" },
      })
    }),
  ],
}

