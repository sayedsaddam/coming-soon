/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit', // including dynamic classes on run-time
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
