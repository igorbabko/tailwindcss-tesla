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
      boxShadow: {
        border: '0 2px 0 0 #181b21'
      },
      backgroundImage: theme => ({
        'model-s': "url('/img/model-s.jpeg')",
        'mobile-model-s': "url('/img/mobile-model-s.jpeg')",
        'model-y': "url('/img/model-y.jpeg')",
        'mobile-model-y': "url('/img/mobile-model-y.jpeg')",
        'model-3': "url('/img/model-3.jpeg')",
        'mobile-model-3': "url('/img/mobile-model-3.jpeg')",
        'model-x': "url('/img/model-x.jpeg')",
        'mobile-model-x': "url('/img/mobile-model-x.jpeg')",
        'solar-panels': "url('/img/solar-panels.jpeg')",
        'mobile-solar-panels': "url('/img/mobile-solar-panels.jpeg')",
        'solar-roof': "url('/img/solar-roof.jpeg')",
        'mobile-solar-roof': "url('/img/mobile-solar-roof.jpeg')",
        'accessories': "url('/img/accessories.jpeg')",
        'mobile-accessories': "url('/img/mobile-accessories.jpeg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
