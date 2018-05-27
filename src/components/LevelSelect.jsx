import React from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import withStyles from 'react-jss'

const styles = theme => ({
  container: {
    padding: '1rem'
  },
  option: {
    margin: theme.separation
  },
  notAvailableOption: {
    margin: theme.separation,
    color: theme.grey[400]
  }
})

const LevelSelect = ({classes}) => (
  <ul className={classes.container}>
    <li className={classes.option}><Link to='/level/0/sublevel/0'>Tutorial</Link></li>
    <li className={classes.option}><Link to='/level/1/sublevel/0'>Easy</Link></li>
    <li className={classes.notAvailableOption}>Normal (not yet)</li>
    <li className={classes.notAvailableOption}>Hard (not yet)</li>
  </ul>
)

export default connect()(withStyles(styles)(LevelSelect))
