import React from 'react'
import {connect} from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import grey from '@material-ui/core/colors/grey'
import toggleSquare from '../actions/toggleSquare'

const styles = theme => ({
  square: {
    margin: 2,
    width: 24,
    height: 24,
    borderRadius: 3,
    position: 'relative'
  },
  true: {
    background: grey[800],
    boxShadow: theme.shadows[1],
    zIndex: 1,
    '&:hover': {
      boxShadow: theme.shadows[3],
      zIndex: 3
    }
  },
  false: {
    background: grey[200],
    boxShadow: theme.shadows[4],
    zIndex: 4,
    '&:hover': {
      boxShadow: theme.shadows[6],
      zIndex: 6
    }
  }
})

const Square = ({classes, row, column, ticked, toggleSquare}) => {
  return (
    <div
      className={`${classes.square} ${classes[ticked]}`}
      onClick={() => toggleSquare(row, column)}
    />
  )
}

const mapStateToProps = ({nonogram}, {row, column}) =>
  ({ticked: nonogram.get(row, column), row, column})

export default connect(
  mapStateToProps,
  {toggleSquare}
)(withStyles(styles)(Square))
