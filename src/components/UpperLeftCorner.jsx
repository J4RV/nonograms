import React from 'react'
import withStyles from 'react-jss'

// Upper left corner of a Nonogram puzzle
// An ugly/hacky way to align the column hints

const styles = theme => ({
  upperLeftCorner: {
    margin: 2,
    width: 24 * 3,
    height: 24 * 3
  }
})

const UpperLeftCorner = ({classes}) => <div className={classes.upperLeftCorner} />

export default (withStyles(styles)(UpperLeftCorner))
