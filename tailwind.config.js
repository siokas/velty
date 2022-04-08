module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          primary: "#55efc4",
          secondary: "#5013B8",
          accent: "#227093",
        },
        dark: {
          ...require("daisyui/src/colors/themes")["[data-theme=dark]"],
          primary: "#55efc4",
          secondary: "#bdc3c7",
          accent: "#f39c12",
        }
      },
    ],
    darkTheme: "dark"
  },
}
