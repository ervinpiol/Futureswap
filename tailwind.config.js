/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        BiennaleLight: ["Biennale Light", "sans-serif"],
        BiennaleMedium: ["Biennale Medium", "sans-serif"],
        BiennaleBold: ["Biennale Bold", "sans-serif"],
        CodecCold: ["Codec Cold Trial Regular", "sans-serif"],
        CodecColdBold: ['"Codec Cold Trial Bold"', "sans-serif"],
      },
      colors: {
        BGColor: "#07071c",
        primarygreen100: "#4ee39d",
        neutralgrey2100: "#acacb5",
        blueblack: "#07071c",
        gradientpurplecolor1: "#9756ff",
        neutralgrey2100: "#acacb5",
        neutralgrey3100: "#5f6377",
        neutralgrey2100: "#acacb5",
      },
      screens: {
        xxs: "320px",
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },
  plugins: [],
};
