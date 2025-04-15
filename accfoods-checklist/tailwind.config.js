/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Match all relevant files
  ],
  theme: {
    extend: {
      fontFamily: {
        pacifico: ['Pacifico', 'cursive'], // Ensure the font name is correct
      },
      colors: {
        'custom-green': '#16a34a',
        'custom-burgundy': '#FE5733',
        'custom-white': '#ffffff',
        'custom-black': '#000000',
        'custom-purple': '#342E48',
        'custom-lightGreen': '#28AF61',
        'custom-lightGrey': '#DEDEDE',
        'custom-superLightGreen': '#53D769',
      },
    },
  },
  plugins: [],
};
