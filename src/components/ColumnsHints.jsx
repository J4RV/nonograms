import React from 'react'
import {connect} from 'react-redux'
import withStyles from 'react-jss'
import UpperLeftCorner from './UpperLeftCorner'

const styles = theme => ({
  container: {
    display: 'flex',
    textAlign: 'center',
    fontSize: theme.hintTextSize
  },
  columnHints: {
    padding: theme.separation,
    width: theme.squareSize,
    height: theme.hintsLength,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    letterSpacing: -1,
    fontFamily: ['Ubuntu Mono', 'monospace']
  },
  columnHint: {
  },
  right: {
    color: '#1DE9B6'
  },
  wrong: {
    color: '#DD2C00'
  }
})

const ColumnHints = ({classes, hints, marked}) => (
  <div className={`${classes.columnHints} ${classes[marked.equals(hints) ? 'right' : 'wrong']}`}>
    {hints.map(hint =>
      <span className={classes.columnHint}>{hint}</span>
    )}
  </div>
)

const ColumnsHints = ({classes, columnsHints, nonogram}) => {
  return (
    <div className={classes.container}>
      <UpperLeftCorner />
      {columnsHints.map((columnHints, index) =>
        <ColumnHints
          hints={columnHints}
          marked={nonogram.getMarkedColumn(index)}
          classes={classes}
        />
      )}
    </div>
  )
}

const mapStateToProps = ({nonogram, columnsHints}) => ({
  columnsHints, nonogram
})

export default connect(mapStateToProps)(withStyles(styles)(ColumnsHints))
