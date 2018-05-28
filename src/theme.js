import { createMuiTheme } from '@material-ui/core/styles'

const GREY = {
  0: '#FFFFFF',
  50: '#ECEFF1',
  100: '#CFD8DC',
  400: '#78909C',
  700: '#455A64',
  800: '#37474F',
  900: '#263238'
}
const SHADOW_COLOUR = GREY[900] + '55'
const SQUARE_SIZE = 32
const HINTS_LENGTH = SQUARE_SIZE

const theme = {
  separation: 1,
  squareSize: SQUARE_SIZE,
  hintsLength: HINTS_LENGTH,
  hintTextSize: 20,

  grey: GREY
}

export default createMuiTheme(theme)
