/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif",
        italianno: "'Italianno', cursive",
        catamaran: "'Catamaran', sans-serif",
        roboto: "'Roboto Flex', sans-serif"
      },
      colors: {
        'light-mistyRose': '#F9E6E6',
        'light-oldLace': '#F9F6E6',
        'light-alabaster': '#EBF9E6',
        'light-honeydew': '#E6F9F1',
        'light-lavender': '#E6F1F9',
        'light-purpleDew': '#EBE6F9',
        'light-pinkLace': '#FFDDF4',
        'light-softGrey': '#f2f2f2',
        'charcoal': '#36454F',
      }
    },
  },
  plugins: [],
}

