module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto': 'repeat(auto-fit, minmax(250px, 1fr))'
      }
    },
    minHeight: {
      'note': '270px',
     },
    minWidth: {
      'note': '250px'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
