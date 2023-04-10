/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        banner: {
          50: '#F9F9FF',
        }
      }
    },
  },
  plugins: [require("daisyui")],
}

