/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
  
],
  // fontFamily: {
  //   serif: ['Georgia','serif']
  // },
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ]
  
}
