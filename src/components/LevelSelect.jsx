import React from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import withStyles from 'react-jss'

const styles = theme => ({
  container: {
    padding: '1rem'
  }
})

const LevelSelect = ({classes}) => (
  <ul className={classes.container}>
    <li><Link to='/level/0/sublevel/0'>Tutorial</Link></li>
    <li><Link to='/level/1/sublevel/0'>Easy</Link></li>
    <li>Normal (not yet)</li>
    <li>Hard (not yet)</li>
  </ul>
)

export default connect()(withStyles(styles)(LevelSelect))
