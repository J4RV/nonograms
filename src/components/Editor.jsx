import React from 'react'
import {connect} from 'react-redux'
import Nonogram from './Nonogram'
import emptyLevel from '../actions/emptyLevel'

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
    return <Nonogram editor />
  }
}

export default connect(
  state => state,
  {emptyLevel}
)(Editor)
