import React from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import withStyles from 'react-jss'
import Nonogram from './Nonogram'
import loadLevel from '../actions/loadLevel'
import levels from '../nonograms/all'

const styles = theme => ({
  nextButton: {
    padding: theme.separation,
    borderRadius: theme.separation,
    color: 'white',
    backgroundColor: theme.palette.primary,
    maxWidth: '6rem',
    margin: [0, 'auto'],
    boxShadow: theme.shadows[1],
    '&:hover': {
      boxShadow: theme.shadows[2]
    },
    '&:active': {
      boxShadow: theme.shadows[3]
    }
  }
})

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

const NextLevelButton = ({level, sublevel, loadLevel, classes}) => {
  const nextLevelIndexes = getNextLevelIndexes(level, sublevel)
  if (nextLevelIndexes == null) return <h3>No more levels!</h3>

  const {nextLevel, nextSublevel} = getNextLevelIndexes(level, sublevel)
  return (
    <div className={classes.nextButton}>
      <Link
        to={`/level/${nextLevel}/sublevel/${nextSublevel}`}
        onClick={() => console.log(levels[level].length) || loadLevel(nextLevel, nextSublevel)}
      >
        NEXT!
      </Link>
    </div>
  )
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
    const {match, loadLevel, classes} = this.props
    const {level, sublevel} = match.params
    return <React.Fragment>
      <Nonogram />
      <NextLevelButton level={level} sublevel={sublevel} loadLevel={loadLevel} classes={classes} />
    </React.Fragment>
  }
}

export default connect(
  state => state,
  {loadLevel}
)(withStyles(styles)(NonogramLevel))
