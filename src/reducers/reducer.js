import Nonogram from '../NonogramClass'
import {TOGGLE_SQUARE} from '../actions/toggleSquare'
import {LOAD_LEVEL} from '../actions/loadLevel'
import {EMPTY_LEVEL} from '../actions/emptyLevel'
import {CLEAR_NONOGRAM} from '../actions/clearNonogram'
import {SET_MOUSE_DOWN} from '../actions/setMouseDown'
import {INVERT} from '../actions/invert'
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

const initState = {...emptyNonogram(0, 0), lastClickSquareValue: true, mouseIsDown: false, isCorrect: false}

const withIsCorrect = (state) => {
  const {nonogram, rowsHints, columnsHints} = state
  // if (nonogram == null || rowHints === null || columnHints == null) return state
  return {...state, isCorrect: nonogram.isCorrect(rowsHints, columnsHints)}
}

export default (state = initState, action) => {
  switch (action.type) {
    case TOGGLE_SQUARE:
      let {row, column} = action.payload
      return withIsCorrect({
        ...state,
        lastClickSquareValue: state.nonogram.get(row, column),
        nonogram: state.nonogram.toggle(row, column)
      })

    case INVERT:
      return withIsCorrect({
        ...state,
        nonogram: state.nonogram.invert()
      })

    case LOAD_LEVEL:
      let {level, sublevel} = action.payload
      let loadedNonogram = loadNonogram(levels[level][sublevel])
      return withIsCorrect({
        ...state,
        ...loadedNonogram
      })

    case EMPTY_LEVEL:
      let {height, width} = action.payload
      return withIsCorrect({
        ...state,
        ...emptyNonogram(height, width)
      })

    case CLEAR_NONOGRAM:
      return withIsCorrect(
        {...state, nonogram: new Nonogram(state.nonogram.height, state.nonogram.width)})

    case SET_MOUSE_DOWN:
      return {...state, mouseIsDown: action.payload.mouseIsDown}

    default:
      return state
  }
}
