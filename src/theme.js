import { createTheme, responsiveFontSizes } from '@mui/material'

const theme = createTheme({
  palette: {
    primary: {
      main: '#5045FF',
      secondary: '#4D7178'
    },
    secondary: {
      main: '#fffafa'
    }
  },
  // Typpography for MUI theme
  typography: {
    // global font config
    fontFamily: "'Montserrat', sans-serif",
    /* -------------font config for headings ------------------ */
    h1: {
      fontFamily: "'Montserrat', sans-serif"
    },
    h2: {
      fontFamily: "'Montserrat', sans-serif"
    },
    h3: {
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: 500
    },
    h4: {
      fontFamily: "'Montserrat', sans-serif"
    },
    h5: {
      fontFamily: "'Montserrat', sans-serif"
    },
    h6: {
      fontFamily: "'Montserrat', sans-serif"
    },
    heading: {
      fontFamily: "'ITC Avant Garde Gothic Std Md', 'Montserrat', sans-serif"
    },
    heading2: {
      fontFamily: "'ITC Avant Garde Gothic Std Demi', 'Montserrat', sans-serif"
    },
    /* ------------Font colors------------ */
    body1: {
      color: '#5b5b65',
      fontWeight: '500'
    },
    body2: {
      color: '#5b5b65',
      fontFamily: "'Montserrat', sans-serif"
    },
    subtitle1: {
      fontFamily: "Montserrat', sans-serif"
    }
  },
  props: {
    MuiTooltip: {
      arrow: true
    }
  },
  shape: {
    borderRadius: 10
  },
  overrides: {
    MuiStepper: {
      root: {
        background: 'none',
        border: 'none'
      }
    }
  }
})

export default responsiveFontSizes(theme)
