module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'tablet': '600px',
      'desktop': '1200px',
      'portrait': {'raw': '(orientation: portrait)'},
    },
    extend: {
      backgroundImage: theme => ({
        'model-3': "url('/img/m3.jpeg')",
        'mobile-model-3': "url('/img/mobile-m3.jpeg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
