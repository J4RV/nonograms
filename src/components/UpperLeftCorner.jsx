import React from 'react'
import { withStyles } from '@material-ui/core/styles'

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
