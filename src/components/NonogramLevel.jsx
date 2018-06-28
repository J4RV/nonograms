import React from 'react'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'
import withStyles from 'react-jss'
import Button from '@material-ui/core/Button'
import ConfirmationButton from './subcomponents/ConfirmationButton'
import Nonogram from './Nonogram'
import loadLevel from '../actions/loadLevel'
import clear from '../actions/clearNonogram'
import levels, {LEVEL_NAMES} from '../nonograms/all'

const styles = theme => ({
  container: {
    margin: ['1rem', 'auto']
  },
  button: {
    display: 'inline',
    margin: theme.spacing.unit
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

const NextButton = withRouter(({loadLevel, nextLevel, nextSublevel, disabled, history, classes}) => (
  <Button
    className={classes.button}
    color='primary'
    variant='raised'
    disabled={disabled}
    onClick={() => {
      history.push(`/level/${nextLevel}/sublevel/${nextSublevel}`)
      loadLevel(nextLevel, nextSublevel)
    }}
  >
    Next
  </Button>
))

const Buttons = ({level, sublevel, loadLevel, clear, classes, isCorrect}) => {
  const nextLevelIndexes = getNextLevelIndexes(level, sublevel)
  if (nextLevelIndexes == null) return <h3>No more levels!</h3>
  return (
    <div>
      <ConfirmationButton
        className={classes.button}
        label='Clear'
        color='secondary'
        title='Clear Nonogram'
        onConfirm={clear}
        variant='outlined'
        message='Do you really want to start over?'
      />
      <NextButton
        {...nextLevelIndexes}
        loadLevel={loadLevel}
        classes={classes}
        disabled={!isCorrect}
      />
    </div>
  )
}

const LevelName = ({level, sublevel}) => (
  <h2>{`${LEVEL_NAMES[level]} - ${parseInt(sublevel, 10) + 1}`}</h2>
)

class NonogramLevel extends React.Component {
  componentWillMount () {
    // Load the first Nonogram puzzle
    // Next puzzles will be loaded when the 'Next' button is pressed
    const {match, loadLevel} = this.props
    const {level, sublevel} = match.params
    loadLevel(level, sublevel)
  }

  componentWillReceiveProps (nextProps) {
    // Update the puzzle if the URL level params changed
    const {level, sublevel} = this.props.match.params
    const newLevel = nextProps.match.params.level
    const newSublevel = nextProps.match.params.sublevel
    if (level !== newLevel || sublevel !== newSublevel) {
      const {loadLevel} = this.props
      loadLevel(newLevel, newSublevel)
    }
  }

  render () {
    const {match, loadLevel, clear, classes, isCorrect} = this.props
    const {level, sublevel} = match.params
    return <div className={classes.container}>
      <LevelName level={level} sublevel={sublevel} />
      <Nonogram />
      <Buttons level={level} sublevel={sublevel} loadLevel={loadLevel} clear={clear} classes={classes} isCorrect={isCorrect} />
    </div>
  }
}

export default connect(
  state => state,
  {loadLevel, clear}
)(withStyles(styles)(NonogramLevel))
