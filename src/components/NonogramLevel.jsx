import React from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import Nonogram from './Nonogram'
import loadLevel from '../actions/loadLevel'
import levels from '../nonograms/all'

const getNextLevelIndexes = (level, sublevel) => {
  level = parseInt(level, 10)
  sublevel = parseInt(sublevel, 10)
  if (sublevel + 1 < levels[level].length) {
    return {nextLevel: level, nextSublevel: sublevel + 1}
  } else {
    if (level + 1 < levels.length) {
      return {nextLevel: level + 1, nextSublevel: 0}
    } else {
      // No more levels!
      return null
    }
  }
}

const NextLevelButton = ({level, sublevel, loadLevel}) => {
  const nextLevelIndexes = getNextLevelIndexes(level, sublevel)
  if (nextLevelIndexes == null) return <h3>No more levels!</h3>

  const {nextLevel, nextSublevel} = getNextLevelIndexes(level, sublevel)
  return <Link
    to={`/level/${nextLevel}/sublevel/${nextSublevel}`}
    onClick={() => console.log(levels[level].length) || loadLevel(nextLevel, nextSublevel)}
  >
    NEXT!
  </Link>
}

class NonogramLevel extends React.Component {
  componentWillMount () {
    // Load the first Nonogram puzzle
    // Next puzzles will be loaded when the 'Next' button is pressed
    const {match, loadLevel} = this.props
    const {level, sublevel} = match.params
    loadLevel(level, sublevel)
  }

  render () {
    const {match, loadLevel} = this.props
    const {level, sublevel} = match.params
    return <React.Fragment>
      <Nonogram />
      <NextLevelButton level={level} sublevel={sublevel} loadLevel={loadLevel} />
    </React.Fragment>
  }
}

export default connect(
  state => state,
  {loadLevel}
)(NonogramLevel)
