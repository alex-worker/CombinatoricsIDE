// look this https://github.com/mui-org/material-ui/blob/master/examples/create-react-app/src/theme.js
import { createMuiTheme } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'

const cssStyles = {
  palette: {
    primary: {
      main: '#556cd6'
    },
    secondary: {
      main: '#19857b'
    },
    error: {
      main: red.A400
    },
    background: {
      default: '#fff'
    }
  }
}

const theme = createMuiTheme(cssStyles)

export default theme
