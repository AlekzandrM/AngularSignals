/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      maxWidth: {
        '1200': '1200px',
      }
    },
  },
  plugins: [],
}

