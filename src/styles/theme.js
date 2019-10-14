const theme = {
  // colors
  colors: {
    // grays
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
    primary100: '#A3BFFA',
    primary200: '#7F9CF5',
    primary300: '#667EEA',
    primary400: '#5A67D8',
    primary: '#4C51BF',
    primary600: '#434190',
    primary700: '#3C366B',

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
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg:
      '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl:
      '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    xxl: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  },

  // fonts
  fonts: {
    fontFamily: {
      primary:
        '"Metropolis", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      secondary:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    },
    fontSize: {
      text_xs: '.75rem',
      text_sm: '.875rem',
      text_base: '1rem',
      text_lg: '1.125rem',
      text_xl: '1.25rem',
      text_2xl: '1.5rem',
      text_3xl: '1.875rem',
      text_4xl: '2.25rem',
      text_5xl: '3rem',
      text_6xl: '4rem',
    },
    fontWeight: {
      thin: 200,
      light: 300,
      regular: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
      extraBold: 800,
      black: 900,
    },
  },
}

export default theme
