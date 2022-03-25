const themeOptions = {
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1380,
    },
  },
  palette: {
    type: 'light',
    primary: {
      main: '#4956F9',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#e740af',
    },
    error: {
      main: '#e52d42',
    },
  },
  typography: {
    button: {
      fontWeight: 700,
    },
    fontFamily: 'Montserrat',
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 99,
      },
    },
  },
};

export default themeOptions;
