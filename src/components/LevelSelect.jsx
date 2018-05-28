import React from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import withStyles from 'react-jss'
import {LEVEL_NAMES} from '../nonograms/all'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Collapse from '@material-ui/core/Collapse'

const styles = theme => ({
  container: {
    padding: '1rem',
    maxWidth: 360,
    margin: [0, 'auto']
  },
  option: {
    margin: '0.5rem'
  },
  notAvailableOption: {
    margin: '0.5rem',
    color: theme.grey[400]
  }
})

const LevelCategory = ({classes, diff}) => (
  <ListItem button component={Link} to={'/level/' + diff + '/sublevel/0'}>
    <ListItemText primary={LEVEL_NAMES[diff]} />
  </ListItem>
)

const LevelSelect = ({classes}) => (
  <List className={classes.container} component="nav">
    <LevelCategory classes={classes} diff={0} />
    <LevelCategory classes={classes} diff={1} />
    <LevelCategory classes={classes} diff={2} />
    <LevelCategory classes={classes} diff={3} />
  </List>
)

export default connect()(withStyles(styles)(LevelSelect))
