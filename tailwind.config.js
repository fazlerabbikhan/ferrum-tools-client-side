module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#a991f7",
          secondary: "#f6d860",
          accent: "#37cdbe",
          neutral: "#3d4451",
          background: "#F7F7F7",
          "base-100": "#ffffff",
          "--btn-text-case": "normal",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
