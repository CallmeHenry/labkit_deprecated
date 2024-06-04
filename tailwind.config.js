/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{jsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],
}
