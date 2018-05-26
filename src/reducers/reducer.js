import Nonogram from '../NonogramClass'
import {TOGGLE_SQUARE} from '../actions/toggleSquare'

const initState = {
  rowsHints: [[], [], [2, 2], [], [], [2, 1], [1], []],
  columnsHints: [[], [], [1, 1], [1, 1], [], [1, 2], [1], []],
  nonogram: new Nonogram(8, 8)
}

export default (state = initState, action) => {
  switch (action.type) {
    case TOGGLE_SQUARE:
      const {row, column} = action.payload
      return {...state, nonogram: state.nonogram.toggle(row, column)}
    default:
      return state
  }
}
