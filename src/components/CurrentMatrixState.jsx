import React from 'react'
import {connect} from 'react-redux'
import withStyles from 'react-jss'

const styles = theme => ({
  container: {
    margin: 8,
    padding: 8,
    textAlign: 'left'
  }
})

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
  columnsHints: ${JSON.stringify(getColumnsHints(nonogram))},
  nonogram: new Nonogram(${nonogram.height}, ${nonogram.width})
}`
)

const Component = ({classes, nonogram}) => {
  console.log(getStateFromNonogram(nonogram))
  return null
}

export default connect(
  state => ({nonogram: state.nonogram})
)(withStyles(styles)(Component))
