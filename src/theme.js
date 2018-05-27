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
const SHADOWS = [
  ['0px 0.1rem 0.1rem ' + SHADOW_COLOUR, ', 0px 0 0.2rem ' + SHADOW_COLOUR],
  ['0px 0.2rem 0.2rem ' + SHADOW_COLOUR, ', 0px 0 0.4rem ' + SHADOW_COLOUR],
  ['0px 0.3rem 0.3rem ' + SHADOW_COLOUR, ', 0px 0 0.6rem ' + SHADOW_COLOUR],
  ['0px 0.4rem 0.4rem ' + SHADOW_COLOUR, ', 0px 0 0.8rem ' + SHADOW_COLOUR],
  ['0px 0.5rem 0.5rem ' + SHADOW_COLOUR, ', 0px 0 1.0rem ' + SHADOW_COLOUR]
]

const theme = {
  separation: 1,
  squareSize: SQUARE_SIZE,
  hintsLength: HINTS_LENGTH,
  hintTextSize: 20,

  shadows: SHADOWS,
  insetShadows: SHADOWS.map(shadow => shadow.map(s => s + ' inset')),

  grey: GREY,
  palette: {
    primary: '#1DE9B6',
    secondary: '#DD2C00'
  }
}

export default theme
