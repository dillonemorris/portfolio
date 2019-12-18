const themes = {
  lightTheme: {
    dark: false,
    colors: {
      //backgrounds
      background: '#fff',
      secondaryBackground: '#F7FAFC',
      tertiaryBackground: '#f2f7ff',
      cardBackground: '#f5f9ff',
      calloutBackground: 'rgba(237, 242, 247, 0.75)',
      info: '#EBF4FF',
      primaryProjectBackground: '#EBF4FF',
      secondaryProjectBackground: '#EBF8FF',
      primaryTagBackground: '#C3DAFE',
      secondaryTagBackground: '#BEE3F8',

      // text
      heading: '#1A202C',
      secondaryHeading: '#4C51BF',
      body: '#1A202C',
      secondaryBody: '#1A202C',
      accentBody: '#2D3748',
      primaryTag: '#3C366B',
      secondaryTag: '#2C5282',

      // links
      primaryLink: '#4C51BF',
      secondaryLink: '#4C51BF',
      secondaryLinkHover: '#3C366B',
      accentLink: '#C3DAFE',
      navLink: '#1A202C',
      activeNavLink: '#5A67D8',
      backgroundLinkHover: '#C3DAFE',

      // borders
      linkBorder: '#A3BFFA',
      linkBorderHover: '#4C51BF',
      border: '#4C51BF',

      // buttons
      primaryButtonText: '#3C366B',

      // shapes
      bigBlob: '#4C51BF',
      blob: '#B2F5EA',
      triangleWiggle: '#FFF7E6',

      //icons
      navIcon: '#1A202C',
      socialIcon: '#4C51BF',

      //gradients
      homePageGradient:
        'linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(244,246,255,1) 0%, rgba(255,255,255,1) 100%)',

      // grays
      white: '#fff',
      gray100: '#F7FAFC',
      gray200: '#EDF2F7',
      gray300: '#E2E8F0',
      gray400: '#CBD5E0',
      gray500: '#A0AEC0',
      gray600: '#718096',
      gray700: '#4A5568',
      gray800: '#2D3748',
      gray900: '#1A202C',

      // primary
      primary050: '#f2f7ff',
      primary100: '#EBF4FF',
      primary200: '#C3DAFE',
      primary300: '#A3BFFA',
      primary400: '#7F9CF5',
      primary500: '#667EEA',
      primary600: '#5A67D8',
      primary: '#4C51BF',
      primary800: '#434190',
      primary900: '#3C366B',

      // secondary
      secondary100: '#E6FFFA',
      secondary200: '#B2F5EA',
      secondary300: '#81E6D9',
      secondary400: '#4FD1C5',
      secondary: '#38B2AC',
      secondary600: '#319795',
      secondary700: '#2C7A7B',
      secondary800: '#285E61',
      secondary900: '#234E52',

      // red
      red200: '#FED7D7',
      red600: '#E53E3E',
      red800: '#9B2C2C',

      // yellow
      yellow200: '#FEFCBF',
      yellow600: '#D69E2E',
      yellow800: '#975A16',

      // green
      green200: '#C6F6D5',
      green600: '#38A169',
      green800: '#276749',

      // blue
      blue200: '#BEE3F8',
      blue600: '#3182CE',
      blue800: '#2C5282',
    },

    // shadows
    shadow: {
      base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md:
        '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg:
        '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl:
        '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      xxl: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    },

    // typography
    fontFamily: {
      primary:
        '"Metropolis", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      secondary:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    },

    fontSize: {
      text_xs: {
        desktop: '.75rem',
        mobile: '.65rem',
      },
      text_sm: {
        desktop: '.875rem',
        mobile: '.75rem',
      },
      text_base: {
        desktop: '1rem',
        mobile: '.875rem',
      },
      text_lg: {
        desktop: '1.125rem',
        mobile: '1rem',
      },
      text_xl: {
        desktop: '1.25rem',
        mobile: '1.125rem',
      },
      text_2xl: {
        desktop: '1.5rem',
        mobile: '1.25rem',
      },
      text_3xl: {
        desktop: '1.875rem',
        mobile: '1.5rem',
      },
      text_4xl: {
        desktop: '2.25rem',
        mobile: '1.875rem',
      },
      text_5xl: {
        desktop: '2.75rem',
        mobile: '2.25rem',
      },
      text_6xl: {
        desktop: '4rem',
        mobile: '3rem',
      },
    },

    fontWeight: {
      light: 300,
      regular: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
      extraBold: 800,
      black: 900,
    },

    letterSpacing: {
      tighter: '-.05em',
      tight: '-.025em',
      normal: 0,
      wide: '0.025em',
      wider: '0.05em',
      widest: '.1em',
    },

    lineHeight: {
      none: 1,
      tight: 1.25,
      snug: 1.375,
      normal: 1.5,
      relaxed: 1.625,
      loose: 2,
    },

    // sizing
    maxWidth: {
      max_w_xs: '20rem',
      max_w_sm: '24rem',
      max_w_md: '28rem',
      max_w_lg: '32rem',
      max_w_xl: '36rem',
      max_w_2xl: '42rem',
      max_w_3xl: '48rem',
      max_w_4xl: '56rem',
      max_w_5xl: '64rem',
      max_w_6xl: '72rem',
      max_w_full: '100%',
    },

    // spacing
    spacing: {
      _0: '0',
      _1: '0.25rem',
      _2: '0.5rem',
      _3: '0.75rem',
      _4: '1rem',
      _5: '1.25rem',
      _6: '1.5rem',
      _8: '2rem',
      _10: '2.5rem',
      _12: '3rem',
      _16: '4rem',
      _20: '5rem',
      _24: '6rem',
      _32: '8rem',
      _40: '10rem',
      _48: '12rem',
      _56: '14rem',
      _64: '16rem',
    },

    // transitions
    transitions: {
      hover: 'all .2s ease',
    },

    // borders
    linkBorder: '#A3BFFA',
    border: '#4C51BF',

    // border radius
    borderRadius: {
      default: '0px',
      secondary: '4px',
    },

    // media queries
    mq: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280ox',
    },
  },

  darkTheme: {
    dark: true,
    colors: {
      //backgrounds
      background: '#1A202C',
      secondaryBackground: '#1A202C',
      tertiaryBackground: '#1A202C',
      cardBackground: '#2d3748',
      calloutBackground: 'rgba(45, 55, 72, 0.9)',
      info: '#2d3748',
      primaryProjectBackground: '#4A5568',
      secondaryProjectBackground: '#4A5568',
      primaryTagBackground: '#434190',
      secondaryTagBackground: '#2C5282',

      // text
      heading: '#fff',
      secondaryHeading: '#A3BFFA',
      body: '#fff',
      secondaryBody: '#CCE0FF',
      accentBody: '#fff',
      primaryTag: '#CCE0FF',
      secondaryTag: '#BEE3F8',

      // links
      primaryLink: '#fff',
      secondaryLink: '#EDF2F7',
      secondaryLinkHover: '#C3DAFE',
      accentLink: '#1A202C',
      navLink: '#fff',
      activeNavLink: '#7F9CF5',
      backgroundLinkHover: '#434190',

      // borders
      linkBorder: '#EBF4FF',
      linkBorderHover: '#C3DAFE',
      border: '#A3BFFA',

      // buttons
      primaryButtonText: '#fff',

      // shapes
      bigBlob: '#3C366B',
      blob: '#2d3748',
      triangleWiggle: '#3C366B',

      //icons
      navIcon: '#fff',
      socialIcon: '#fff',

      //gradients
      homePageGradient:
        'linear-gradient(180deg, rgba(2,0,36,1) 0%, #434190 0%, #4C51BF 100%)',

      // grays
      white: '#fff',
      gray100: '#F7FAFC',
      gray200: '#EDF2F7',
      gray300: '#E2E8F0',
      gray400: '#CBD5E0',
      gray500: '#A0AEC0',
      gray600: '#718096',
      gray700: '#4A5568',
      gray800: '#2D3748',
      gray900: '#1A202C',

      // primary
      primary050: '#f2f7ff',
      primary100: '#EBF4FF',
      primary200: '#C3DAFE',
      primary300: '#A3BFFA',
      primary400: '#7F9CF5',
      primary500: '#667EEA',
      primary600: '#5A67D8',
      primary: '#4C51BF',
      primary800: '#434190',
      primary900: '#3C366B',

      // blue
      blue200: '#BEE3F8',
      blue600: '#3182CE',
      blue800: '#2C5282',
    },

    fontSize: {
      text_xs: {
        desktop: '.75rem',
        mobile: '.65rem',
      },
      text_sm: {
        desktop: '.875rem',
        mobile: '.75rem',
      },
      text_base: {
        desktop: '1rem',
        mobile: '.875rem',
      },
      text_lg: {
        desktop: '1.125rem',
        mobile: '1rem',
      },
      text_xl: {
        desktop: '1.25rem',
        mobile: '1.125rem',
      },
      text_2xl: {
        desktop: '1.5rem',
        mobile: '1.25rem',
      },
      text_3xl: {
        desktop: '1.875rem',
        mobile: '1.5rem',
      },
      text_4xl: {
        desktop: '2.25rem',
        mobile: '1.875rem',
      },
      text_5xl: {
        desktop: '2.75rem',
        mobile: '2.25rem',
      },
      text_6xl: {
        desktop: '4rem',
        mobile: '3rem',
      },
    },

    fontWeight: {
      light: 300,
      regular: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
      extraBold: 800,
      black: 900,
    },

    letterSpacing: {
      tighter: '-.05em',
      tight: '-.025em',
      normal: 0,
      wide: '0.025em',
      wider: '0.05em',
      widest: '.1em',
    },

    lineHeight: {
      none: 1,
      tight: 1.25,
      snug: 1.375,
      normal: 1.5,
      relaxed: 1.625,
      loose: 2,
    },

    // sizing
    maxWidth: {
      max_w_xs: '20rem',
      max_w_sm: '24rem',
      max_w_md: '28rem',
      max_w_lg: '32rem',
      max_w_xl: '36rem',
      max_w_2xl: '42rem',
      max_w_3xl: '48rem',
      max_w_4xl: '56rem',
      max_w_5xl: '64rem',
      max_w_6xl: '72rem',
      max_w_full: '100%',
    },

    // spacing
    spacing: {
      _0: '0',
      _1: '0.25rem',
      _2: '0.5rem',
      _3: '0.75rem',
      _4: '1rem',
      _5: '1.25rem',
      _6: '1.5rem',
      _8: '2rem',
      _10: '2.5rem',
      _12: '3rem',
      _16: '4rem',
      _20: '5rem',
      _24: '6rem',
      _32: '8rem',
      _40: '10rem',
      _48: '12rem',
      _56: '14rem',
      _64: '16rem',
    },

    // transitions
    transitions: {
      hover: 'all .2s ease',
    },

    // shadows
    shadow: {
      base:
        '0 1px 3px 0 rgba(76, 81, 191, 0.1), 0 1px 2px 0 rgba(76, 81, 191, 0.06)',
      md:
        '0 4px 6px -1px rgba(76, 81, 191, 0.1), 0 2px 4px -1px rgba(76, 81, 191, 0.06)',
      lg:
        '0 10px 15px -3px rgba(76, 81, 191, 0.1), 0 4px 6px -2px rgba(76, 81, 191, 0.05)',
      xl:
        '0 20px 25px -5px rgba(76, 81, 191, 0.1), 0 10px 10px -5px rgba(76, 81, 191, 0.04)',
      xxl: '0 25px 50px -12px rgba(76, 81, 191, 0.25)',
    },

    // typography
    fontFamily: {
      primary:
        '"Metropolis", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      secondary:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    },

    // border radius
    borderRadius: {
      default: '0px',
      secondary: '4px',
    },

    // media queries
    mq: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280ox',
    },
  },
}

export default themes
