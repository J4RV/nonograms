import React from 'react'
import {connect} from 'react-redux'
import withStyles from 'react-jss'
import ColumnsHints from './ColumnsHints'
import RowHints from './RowHints'
import Square from './Square'

const styles = theme => ({
  container: {
    margin: 8,
    padding: 8,
    display: 'inline-flex',
    flexDirection: 'column'
  },
  row: {
    display: 'inline-flex',
    alignItems: 'flex-start'
  }
})

const NonogramRow = ({classes, squares, rowIndex}) => (
  <div className={classes.row}>
    <RowHints rowIndex={rowIndex} />
    {squares.map((square, squareIndex) => <Square row={rowIndex} column={squareIndex} />)}
  </div>
)

const Nonogram = ({classes, nonogram, toggleSquare}) => {
  return (
    <div className={classes.container}>
      <ColumnsHints />
      {nonogram.matrix.map((row, rowIndex) => (
        <NonogramRow rowIndex={rowIndex} squares={row} classes={classes} />
      ))}
    </div>
  )
}

export default connect(
  state => state,
  {}
)(withStyles(styles)(Nonogram))
