import Nonogram from '../NonogramClass'
import {TOGGLE_SQUARE} from '../actions/toggleSquare'
import {LOAD_LEVEL} from '../actions/loadLevel'
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

const initState = {...emptyNonogram(0, 0), currLevel: [0][0]}

export default (state = initState, action) => {
  switch (action.type) {
    case TOGGLE_SQUARE:
      const {row, column} = action.payload
      return {...state, nonogram: state.nonogram.toggle(row, column)}
    case LOAD_LEVEL:
      const {level, sublevel} = action.payload
      console.log(level, sublevel)
      console.log(levels[level][sublevel])
      return {
        ...state,
        ...loadNonogram(levels[level][sublevel]),
        currLevel: [level][sublevel]
      }
    default:
      return state
  }
}
