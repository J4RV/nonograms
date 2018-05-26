import React from 'react'
import {connect} from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import red from '@material-ui/core/colors/red'
import blue from '@material-ui/core/colors/blue'

const styles = theme => ({
  container: {
    margin: 2,
    width: 24 * 3,
    height: 24,
    textAlign: 'right',
    letterSpacing: -1,
    fontFamily: ['Ubuntu Mono', 'monospace']
  },
  rowHint: {
    marginRight: 4
  },
  right: {
    color: blue[400]
  },
  wrong: {
    color: red[600]
  }
})

const RowHints = ({classes, hints, marked}) => {
  console.log(marked, hints, marked === hints)
  return (
    <div className={`${classes.container} ${classes[marked.equals(hints) ? 'right' : 'wrong']}`}>
      {hints.map(hint =>
        <span className={classes.rowHint}>{hint}</span>
      )}
    </div>
  )
}

const mapStateToProps = ({nonogram, rowsHints}, {rowIndex}) => ({
  hints: rowsHints[rowIndex],
  marked: nonogram.getMarkedRow(rowIndex)
})

export default connect(
  mapStateToProps,
  {}
)(withStyles(styles)(RowHints))
