export const LOAD_LEVEL = 'LOAD_LEVEL'

export default (level, sublevel) => ({
  type: LOAD_LEVEL,
  payload: {level, sublevel}
})
