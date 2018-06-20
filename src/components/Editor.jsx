import React from 'react'
import {connect} from 'react-redux'
import Nonogram from './Nonogram'
import Button from '@material-ui/core/Button'
import emptyLevel from '../actions/emptyLevel'
import invert from '../actions/invert'
import clear from '../actions/clearNonogram'

const getColumnsHints = (nonogram) => {
  const hints = []
  for (let i = 0; i < nonogram.width; i++) {
    hints.push(nonogram.getMarkedColumn(i))
  }
  return hints
}

const getRowsHints = (nonogram) => {
  const hints = []
  for (let i = 0; i < nonogram.height; i++) {
    hints.push(nonogram.getMarkedRow(i))
  }
  return hints
}

const getStateFromNonogram = (nonogram) => (
  `{
  rowsHints: ${JSON.stringify(getRowsHints(nonogram))},
  columnsHints: ${JSON.stringify(getColumnsHints(nonogram))}
}`
)

class Editor extends React.Component {
  // Change state from URL params
  componentWillMount () {
    const {match, emptyLevel} = this.props
    const {height, width} = match.params
    emptyLevel(height, width)
  }

  render () {
    console.log(getStateFromNonogram(this.props.nonogram))
    return <React.Fragment>
      <Nonogram editor />
      <Button
        color='primary'
        variant='raised'
        onClick={this.props.invert}
      >
        Invert
      </Button>
      <Button
        color='secondary'
        variant='raised'
        onClick={this.props.clear}
      >
        Clear
      </Button>
    </React.Fragment>
  }
}

export default connect(
  state => state,
  {emptyLevel, invert, clear}
)(Editor)
