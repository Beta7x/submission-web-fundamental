/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "media",
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 1)',
      },
      colors: {
        'green-htb': '#9FEF00',
        'primary': '#1A2332',
        'secondary': '#0b1728',
        'white': '#A4B1CD',
        'white-hover': '#fff',
        'black-search': '#06101D',
        'danger': '#ff3e3e',
      },
    },
  },
  plugins: [],
}
