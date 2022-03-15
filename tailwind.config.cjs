module.exports = {
  content: ['./dev/**/*.{html,js}'],
  theme: {
    extend: {
      screens: {
        sm: '650px',
      },
      opacity: {
        15: 0.15,
      },
      fontFamily: {
        inherit: 'inherit',
        sofia: ['sofia-pro', 'sans-serif'],
      },
      colors: {
        black: '#1a2433',
        lightBlue: '#eaeff7',
        red: '#f82858',
        purple: '#fae4fe',
        cyan: '#a8ebe9',
        white: '#f9f9f9',
        orange: '#FFA626',
        yellow: '#FFBC3F',
        lightGray: '#f1f5fa',
        gray: '#eeeeee',
        mediumGray: '#D5D7DB',
        darkGray: '#999999',
      },
      boxShadow: {
        't-md': '-1px -1px 11px 1px rgb(0 0 0 / 22%)',
      },
      animation: {
        slideIn: 'slideIn 1s ease-in-out forwards',
        slideInAlt: 'slideInAlt .75s ease-in-out forwards',
        fadeIn: 'fadeIn .5s .5s ease-in-out forwards',
        fadeInAlt: 'fadeIn .5s ease-in-out forwards',
      },
      keyframes: {
        slideIn: {
          '0%': {
            'max-height': '0vh',
          },
          '100%': {
            'max-height': '100vh',
          },
        },
        slideInAlt: {
          '0%': {
            'max-height': '0px',
            opacity: 0,
          },
          '100%': {
            'max-height': '300px',
            opacity: 1,
          },
        },
        fadeIn: {
          '0%': {
            opacity: 0,
          },
          '100%': {
            opacity: 1,
          },
        },
      },
    },
  },
  plugins: [],
};