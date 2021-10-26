const { guessProductionMode } = require("@ngneat/tailwind");

module.exports = {
    prefix: '',
    purge: {
      enabled: guessProductionMode(),
      content: [
        './src/**/*.{html,ts}',
      ]
    },
    darkMode: 'class', // or 'media' or 'class'
    theme: {
      fontFamily: {
        'sans': ['Zen Kaku Gothic Antique', 'sans-serif']
      },
      extend: {
        blur: {
          none: '0px',
          xs: '2px',
        },
        lineClamp: {
          7: '7',
          8: '8',
          9: '9',
          10: '10',
        }
      }
    },
    variants: {
      extend: {
        blur: ["group-hover", "hover", "focus"],
        width: ["group-hover", "responsive", "hover", "focus"],
        display: ["group-hover", 'hover', 'focus'],
        height: ["first", "last", "even"],
        zIndex: ["first", "last", "even", "hover"],
        margin: ["first", "last", "even"],
        transitionProperty: ['hover', 'focus'],
        scale: ['group-hover'],
      },
    },
    plugins: [
      require('@tailwindcss/line-clamp'),
    ],
};
