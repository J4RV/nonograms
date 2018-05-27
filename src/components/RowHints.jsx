import React from 'react'
import {connect} from 'react-redux'
import withStyles from 'react-jss'

const styles = theme => ({
  rowHints: {
    padding: theme.separation,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: theme.hintsLength,
    height: theme.squareSize,
    textAlign: 'right',
    fontSize: theme.hintTextSize,
    letterSpacing: -theme.separation,
    fontFamily: ['Ubuntu Mono', 'monospace']
  },
  rowHint: {
    marginLeft: '1rem'
  },
  right: {
    color: '#1DE9B6'
  },
  wrong: {
    color: '#DD2C00'
  }
})

const RowHints = ({classes, hints, marked}) => (
  <div className={`${classes.rowHints} ${classes[marked.equals(hints) ? 'right' : 'wrong']}`}>
    {hints.map(hint =>
      <span className={classes.rowHint}>{hint}</span>
    )}
  </div>
)

const mapStateToProps = ({nonogram, rowsHints}, {rowIndex}) => ({
  hints: rowsHints[rowIndex],
  marked: nonogram.getMarkedRow(rowIndex)
})

export default connect(
  mapStateToProps,
  {}
)(withStyles(styles)(RowHints))
