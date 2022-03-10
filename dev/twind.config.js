export default {
  extend: {
    fontFamily: {
      sofia: ['sofia-pro', 'sans-serif'],
    },
    fontSize: {
      xs: '0.625rem',
      sm: '0.688rem',
      tiny: '0.75rem',
      base: '0.875rem',
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
      gray: '#eeeeee',
      darkGray: '#999999',
    },
    spacing: {
      18: '4.5rem',
    },
    boxShadow: {
      't-md': '-1px -1px 11px 1px rgb(0 0 0 / 22%)',
    },
    animation: {
      fadeIn: 'fadeIn .5s forwards',
    },
    keyframes: {
      fadeIn: {
        '0%': {opacity: 0},
        '100%': {opacity: 1},
      },
    },
  },
};
