export const EMPTY_LEVEL = 'EMPTY_LEVEL'

export default (height, width) => ({
  type: EMPTY_LEVEL,
  payload: {height, width}
})
