module.exports = {
   mode: 'jit',
   purge: [
    './public/templates/**/*.twig',
     './public/web/src/**/*.css'
   ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'reg': ['"Mulish", "sans-serif"'],
      'reg-italic': ['"Mulish", "sans-serif"'],
      'bold': ['"Mulish", "sans-serif"'],
      'bold-italic': ['"Mulish", "sans-serif"'],
      },
    fontSize: {
      '4xs': '10px',
      '3xs': '12px',
      '2xs': '14px',
      'xs': '16px',   //16px
      'sm': '18px',   //18px
      'base': '20px',    //20px
      'lg': '22px',    //22px
      'xl': '24px',     //24px
      '2xl': '28px',   //28px
      '3xl': '30px',  //30px
      '4xl': '34px',  //34px
      '5xl': '44px',   //60px
      '6xl': '54px',
      '7xl': '64px',
      '8xl': '74px',
      '9xl': '84px',
    },
    minWidth: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
    },
    maxWidth: {
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
    },
    minHeight: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
    },
    screens: {
      'xxxs': '109px',
      'xxs': '209px',
      'xs': '320px',
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
      '2xl': '2000px',
    },
    extend: {
      width: {
        '1/7': '14.2857143%',
        '2/7': '28.5714286%',
        '3/7': '42.8571429%',
        '4/7': '57.1428571%',
        '5/7': '71.4285714%',
        '6/7': '85.7142857%',
        '11/20': '49%',
      },
      colors: {
        'green-light': '#92C83E',
        'green-dark': '#6C9926',
        'yellow': '#FFC82C',
        'orange-light': '#F5864F',
        'orange-dark': '#E76828',
        'black': '#232020',
        'charcoal': '#58585A',
        'cream': '#FFFDF6',
        'sage': '#FAFDF5',
        'rose': '#FFF8F5',
        'grey':'#EFF3E8'
      },
      dropShadow: {
        'nav': '2px 2px 0px rgba(255, 200, 44, 1)',
        'nav-over': '2px 2px 1px rgba(146, 200, 62, 1)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    // Generates 10 widths and heights in pxs
    require('tailwindcss-pixel-dimensions')({
      width: {
        total: 1400,
        startingSize: 50,
      },
      // height: {
      //   total: 10, // 900 is the default
      // startingSize: 0, // default
      // },
    }),
  ],
}
