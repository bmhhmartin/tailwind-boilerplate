module.exports = {
  mode: "jit",
  purge: ["**/*.{html, js}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        primaryColor: "#764ABC",
        secondaryColor:{
          "900": "#DC4A38",
          "500": "#00DFFF"
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
