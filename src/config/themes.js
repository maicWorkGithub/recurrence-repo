import { createMuiTheme } from '@material-ui/core/styles'

export const darkTheme = createMuiTheme({
  palette: {
    type: 'dark', // Switching the dark mode on is a single property value change.
  },
  typography: {
    useNextVariants: true,
  },
})

export const lightTheme = createMuiTheme({
  palette: {
    secondary: {
      light: '#5f5fc4',
      main: '#283593',
      dark: '#001064',
      contrastText: '#fff',
    },
  },
  typography: {
    useNextVariants: true,
  },
})
