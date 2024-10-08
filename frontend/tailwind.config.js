/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary":"#FF6A00",
        "secoundary": "#52220A"
      }
    },
  },
  plugins: [],
}

