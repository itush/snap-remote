/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    screens: {
      vvvsm: "320px",
      vvsm:	"375px",
      vsm: "425px",		
      sm: "640px",
      md:	"768px",
      lg:	"1024px",
      xl:	"1280px",      
      xl2: "1536px",

    },
    extend: {
      colors: {
        AlmostWhite: "hsl(0, 0%, 98%)",
        MediumGray: "hsl(0, 0%, 41%)",
        AlmostBlack: "hsl(0, 0%, 8%)",
      }
    },
  },
  plugins: [],
}
