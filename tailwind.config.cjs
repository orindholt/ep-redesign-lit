const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./dev/components/game-big.js'],
  theme: {
    content: {
      none: "''",
    },
    screens: {
      xs: '430px',
      sm: '650px',
      semi: '950px',
      'max-md': {raw: '(max-width: 768px)'},
      'h-sm': {raw: '(max-height: 800px)'},
      'h-xs': {raw: '(min-height: 720px)'},
      ...defaultTheme.screens,
    },
    extend: {
      borderWidth: {
        3: '3px',
      },
      borderRadius: {
        10: '10px',
      },
      flex: {
        2: '2 2 0%',
        3: '3 3 0%',
        4: '4 4 0%',
      },
      lineHeight: {
        2: 0.3,
        1: 0.2,
      },
      transitionDuration: {
        0: '0ms',
        2000: '2000ms',
      },
      spacing: {
        3.5: '0.875rem',
        18: '4.5rem',
        26: '6.5rem',
        62: '15.625rem',
        '1_2': '50%',
        '1_4': '25%',
        '4_5': '80%',
        '5_100': '5%',
        '2_100': '2%',
        '10_100': '10%',
        '15_100': '15%',
        '0_1': '1px',
        '0_2': '2px',
      },
      fontSize: {
        xxs: '0.5rem',
        medium: '17px',
      },
      height: {
        'screen-1/2': '50vh',
        'screen-35': '35vh',
      },
      width: {
        'screen-1/2': '50vw',
        'screen-35': '35vw',
      },
      opacity: {
        15: 0.15,
      },
      fontFamily: {
        inherit: 'inherit',
        sofia: ['sofia-pro', 'sans-serif'],
      },
      minWidth: {
        ...defaultTheme.spacing,
        25: '6.25rem',
        17: '4.375rem',
      },
      minHeight: {
        ...defaultTheme.spacing,
        25: '6.25rem',
        17: '4.375rem',
      },
      maxHeight: {
        ...defaultTheme.spacing,
        login: '43.125rem',
      },
      colors: {
        black: '#1a2433',
        darkBlue: '#546583',
        lightBlue: '#eaeff7',
        red: '#f82858',
        sunset: '#FF5858',
        purpleBright: '#FF0080',
        purple: '#fae4fe',
        cyan: '#a8ebe9',
        blue: '#3585DF',
        blueBright: '#0060e9',
        blueDark: '#0b119b',
        teal: '#80bad0',
        white: '#f9f9f9',
        orange: '#FFA626',
        yellow: '#ffd45b',
        green: '#259c63',
        greenBright: '#0fd792',
        lightGray: '#f1f5fa',
        gray: '#eeeeee',
        mediumGray: '#D5D7DB',
        darkGray: '#999999',
        'white-10': '#ffffff10',
        'white-20': '#ffffff20',
        'white-30': '#ffffff30',
        'white-40': '#ffffff40',
        'white-50': '#ffffff50',
        'white-60': '#ffffff60',
        'white-70': '#ffffff70',
        'white-80': '#ffffff80',
        'white-90': '#ffffff90',
        'black-10': '#00000010',
        'black-20': '#00000020',
        'black-30': '#00000030',
        'black-40': '#00000040',
        'black-50': '#00000050',
        'black-60': '#00000060',
        'black-70': '#00000070',
        'black-80': '#00000080',
        'black-90': '#00000090',
      },
      boxShadow: {
        't-md': '-1px -1px 11px 1px rgb(0 0 0 / 22%)',
      },
      animation: {
        slideIn: 'slideIn 1s ease-in-out forwards',
        slideInAlt: 'slideInAlt .75s ease-in-out forwards',
        fadeIn: 'fadeIn .5s .5s ease-in-out forwards',
        fadeInAlt: 'fadeIn .5s ease-in-out forwards',
        rotate: 'rotate 1s linear infinite',
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
        rotate: {
          '0%': {
            transform: 'rotate(0deg)',
          },
          '100%': {
            transform: 'rotate(360deg)',
          },
        },
      },
    },
  },
  plugins: [],
};
