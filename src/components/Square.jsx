import React from 'react'
import {connect} from 'react-redux'
import withStyles from 'react-jss'
import toggleSquare from '../actions/toggleSquare'

const styles = theme => ({
  square: {
    margin: theme.separation,
    width: theme.squareSize,
    height: theme.squareSize,
    borderRadius: 3
  },
  true: {
    background: theme.grey[800],
    '&:hover': {
      background: theme.grey[700]
    }
  },
  false: {
    background: theme.grey[50],
    position: 'relative',
    boxShadow: theme.shadows[0],
    '&:hover': {
      background: theme.grey[0]
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
