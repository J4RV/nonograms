import React from 'react'
import {connect} from 'react-redux'
import withStyles from 'react-jss'
import ColumnsHints from './ColumnsHints'
import RowHints from './RowHints'
import Square from './Square'

const styles = theme => ({
  container: {
    margin: [theme.separation * 4, 0],
    padding: theme.separation * 2,
    display: 'inline-flex',
    flexDirection: 'column'
  },
  row: {
    display: 'inline-flex',
    alignItems: 'flex-start'
  }
})

const NonogramRow = ({classes, squares, editor, rowIndex}) => (
  <div className={classes.row}>
    {editor ? null : <RowHints rowIndex={rowIndex} />}
    {squares.map((square, squareIndex) => <Square row={rowIndex} column={squareIndex} />)}
  </div>
)

const Nonogram = ({classes, nonogram, editor, toggleSquare}) => {
  return (
    <div className={classes.container}>
      {editor ? null : <ColumnsHints />}
      {nonogram.matrix.map((row, rowIndex) => (
        <NonogramRow rowIndex={rowIndex} squares={row} classes={classes} editor={editor} />
      ))}
    </div>
  )
}

export default connect(
  state => state,
  {}
)(withStyles(styles)(Nonogram))
