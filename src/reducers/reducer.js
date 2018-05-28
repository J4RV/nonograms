import Nonogram from '../NonogramClass'
import {TOGGLE_SQUARE} from '../actions/toggleSquare'
import {LOAD_LEVEL} from '../actions/loadLevel'
import {EMPTY_LEVEL} from '../actions/emptyLevel'
import {CLEAR_NONOGRAM} from '../actions/clearNonogram'
import levels from '../nonograms/all'

const emptyNonogram = (width, height) => ({
  rowsHints: new Array(height).fill([]),
  columnsHints: new Array(width).fill([]),
  nonogram: new Nonogram(height, width)
})

const loadNonogram = ({rowsHints, columnsHints}) => ({
  rowsHints,
  columnsHints,
  nonogram: new Nonogram(rowsHints.length, columnsHints.length)
})

const initState = {...emptyNonogram(0, 0)}

export default (state = initState, action) => {
  switch (action.type) {
    case TOGGLE_SQUARE:
      let {row, column} = action.payload
      return {...state, nonogram: state.nonogram.toggle(row, column)}

    case LOAD_LEVEL:
      let {level, sublevel} = action.payload
      return {
        ...state,
        ...loadNonogram(levels[level][sublevel])
      }

    case EMPTY_LEVEL:
      let {height, width} = action.payload
      return {
        ...state,
        ...emptyNonogram(height, width)
      }

    case CLEAR_NONOGRAM:
      return {...state, nonogram: new Nonogram(state.nonogram.height, state.nonogram.width)}

    default:
      return state
  }
}
