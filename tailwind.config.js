module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        michelangelo: {
          blue: "#42819F",
          brown: "#CBB396",
          green: "#86AA7D",
          yellow: "#555234",
          orange: "#4D280F",
          white: "#F4EEF3",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
