import React from 'react'
import {connect} from 'react-redux'
import withStyles from 'react-jss'
import toggleSquare from '../actions/toggleSquare'

const styles = theme => ({
  square: {
    margin: theme.separation,
    width: theme.squareSize,
    height: theme.squareSize,
    borderRadius: theme.units,
    position: 'relative'
  },
  true: {
    background: theme.grey[800],
    boxShadow: theme.shadows[0],
    zIndex: 0,
    '&:hover': {
      boxShadow: theme.shadows[1],
      zIndex: 1
    }
  },
  false: {
    background: theme.grey[50],
    boxShadow: theme.shadows[1],
    zIndex: 2,
    '&:hover': {
      boxShadow: theme.shadows[2],
      zIndex: 3
    }
  }
})

const Square = ({classes, row, column, ticked, toggleSquare}) => {
  return (
    <div
      className={`${classes.square} ${classes[ticked]}`}
      onClick={(e) => toggleSquare(row, column)}
    />
  )
}

const mapStateToProps = ({nonogram}, {row, column}) =>
  ({ticked: nonogram.get(row, column), row, column})

export default connect(
  mapStateToProps,
  {toggleSquare}
)(withStyles(styles)(Square))
