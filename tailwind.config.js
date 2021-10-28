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
        },
        colors: {
          brown1: {
            100: '#f8d9a3',
            200: '#ffcb71',
            300: '#ffbd4f'
          },
          brown2: {
            100: '#f8c4a3',
            200: '#f5a979',
            300: '#f69151'
          },
        }
      }
    },
    variants: {
      extend: {
        blur: ["group-hover", "hover", "focus"],
        width: ["group-hover", "responsive", "hover", "focus"],
        display: ["group-hover", 'hover', 'focus'],
        height: ["first", "even", "odd"],
        zIndex: ["first", "even", "odd", "hover"],
        margin: ["first", "even", "odd"],
        transitionProperty: ['hover', 'focus'],
        scale: ['group-hover'],
      },
    },
    plugins: [
      require('@tailwindcss/line-clamp'),
    ],
};
