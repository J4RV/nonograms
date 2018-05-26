export const TOGGLE_SQUARE = 'TOGGLE_SQUARE'

export default (row, column) => ({
  type: TOGGLE_SQUARE,
  payload: {row, column}
})
