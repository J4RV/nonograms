export const SET_MOUSE_DOWN = 'SET_MOUSE_DOWN'

export default (mouseIsDown) => ({
  type: SET_MOUSE_DOWN,
  payload: {mouseIsDown}
})
