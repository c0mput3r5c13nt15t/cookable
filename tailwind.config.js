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
      }
    },
    variants: {
      extend: {
        blur: ["group-hover", "hover", "focus"],
        width: ["group-hover", "responsive", "hover", "focus"],
        display: ["group-hover", 'hover', 'focus'],
      },
    },
    plugins: [],
};
