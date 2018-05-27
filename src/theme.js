const SHADOW_COLOUR = '#37474F44'
const SQUARE_SIZE = 64
const HINTS_LENGTH = SQUARE_SIZE * 2

const theme = {
  separation: 4,
  squareSize: SQUARE_SIZE,
  hintsLength: HINTS_LENGTH,
  hintTextSize: 40,
  shadows: {
    0: ['0px 0.1rem 0.1rem ' + SHADOW_COLOUR + ' inset'],
    1: ['0px 0.2rem 0.2rem ' + SHADOW_COLOUR + ' inset'],
    2: ['0px 0.3rem 0.3rem ' + SHADOW_COLOUR + ' inset'],
    3: ['0px 0.4rem 0.4rem ' + SHADOW_COLOUR + ' inset'],
    4: ['0px 0.5rem 0.5rem ' + SHADOW_COLOUR + ' inset']
  },
  grey: {
    50: '#ECEFF1',
    100: '#CFD8DC',
    400: '#78909C',
    800: '#37474F'
  }
}

export default theme
