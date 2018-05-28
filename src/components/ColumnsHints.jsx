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
    margin: theme.separation,
    width: theme.squareSize,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    letterSpacing: -1,
    fontFamily: ['Ubuntu Mono', 'monospace']
  },
  columnHint: {
  },
  right: {
    color: theme.palette.primary.main
  },
  wrong: {
    color: theme.palette.secondary.main
  }
})

const ColumnHints = ({classes, hints, marked}) => (
  <div className={`${classes.columnHints} ${classes[marked.equals(hints) ? 'right' : 'wrong']}`}>
    {
      hints && hints.length > 0
        ? hints.map(hint =>
          <span className={classes.columnHint}>{hint}</span>)
        : 0
    }
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

const mapStateToProps = (state) => ({
  columnsHints: state.columnsHints, nonogram: state.nonogram
})

export default connect(mapStateToProps)(withStyles(styles)(ColumnsHints))
