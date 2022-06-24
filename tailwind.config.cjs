/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        primary: '#f6d428',
        secondary: '#2e2e2e',
      },
    },
  },
  plugins: [],
  content: ["./index.html",'./src/**/*.{svelte,js,ts}'],
}
