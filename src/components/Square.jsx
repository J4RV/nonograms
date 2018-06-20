import React from 'react'
import {connect} from 'react-redux'
import withStyles from 'react-jss'
import toggleSquare from '../actions/toggleSquare'
import setMouseDown from '../actions/setMouseDown'

const styles = theme => ({
  container: {
    padding: theme.separation,
    userSelect: 'none'
  },
  square: {
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
    boxShadow: theme.shadows[1],
    '&:hover': {
      background: theme.grey[0]
    }
  }
})

const Square = ({classes, row, column, ticked, mouseIsDown, lastClickSquareValue, toggleSquare, setMouseDown}) => {
  const handleOnHover = () => {
    if (mouseIsDown && ticked === lastClickSquareValue) {
      toggleSquare(row, column)
    }
  }
  return (
    <div
      className={classes.container}
      onMouseOver={() => handleOnHover()}
      onMouseDown={() => { setMouseDown(true); toggleSquare(row, column) }}
      onMouseUp={() => setMouseDown(false)}
    >
      <div
        className={`${classes.square} ${classes[ticked]}`}
      />
    </div>
  )
}

const mapStateToProps = ({nonogram, mouseIsDown, lastClickSquareValue}, {row, column}) =>
  ({ticked: nonogram.get(row, column), row, column, mouseIsDown, lastClickSquareValue})

export default connect(
  mapStateToProps,
  {toggleSquare, setMouseDown}
)(withStyles(styles)(Square))
