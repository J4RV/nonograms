import React from 'react'
import {connect} from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import ColumnsHints from './ColumnsHints'
import RowHints from './RowHints'
import Square from './Square'

const styles = theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column'
  },
  row: {
    display: 'flex'
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
