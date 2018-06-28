import React from 'react'
import {connect} from 'react-redux'
import withStyles from 'react-jss'
import {arrayEquals} from '../prototypes/arrayEquals'

const styles = theme => ({
  rowHints: {
    padding: theme.separation,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexGrow: 1,
    height: theme.squareSize,
    textAlign: 'right',
    fontSize: theme.hintTextSize,
    letterSpacing: -theme.separation,
    fontFamily: ['Ubuntu Mono', 'monospace']
  },
  rowHint: {
    margin: [0, '0.25rem']
  },
  right: {
    color: theme.palette.primary.main
  },
  wrong: {
    color: theme.palette.secondary.main
  }
})

const RowHints = ({classes, hints, marked}) => (
  <div className={`${classes.rowHints} ${classes[arrayEquals(marked, hints) ? 'right' : 'wrong']}`}>
    {
      hints && hints.length > 0
        ? hints.map(hint =>
          <span className={classes.rowHint}>{hint}</span>)
        : 0
    }
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
