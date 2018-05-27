import React from 'react'
import {connect} from 'react-redux'
import withStyles from 'react-jss'
import NonogramLevel from './NonogramLevel'
import LevelSelect from './LevelSelect'
import Editor from './Editor'
import {Route} from 'react-router-dom'

const styles = theme => ({
  app: {
    fontFamily: ['Roboto', 'Arial', 'sans-serif'],
    textAlign: 'center',
    color: theme.grey[800]
  },
  header: {
  }
})

const App = ({classes}) => {
  return (
    <div className={classes.app}>
      <div className={classes.header}>
        <h1>NONOGRAMS!</h1>
        <h3><a href='https://wikipedia.org/wiki/Nonogram'>What's a Nonogram?</a></h3>
      </div>
      <Route exact path='/' component={LevelSelect} />
      <Route path='/level/:level/sublevel/:sublevel' component={NonogramLevel} />
      <Route path='/editor/:height/:width' component={Editor} />
    </div>
  )
}

export default connect(
  (state) => state,
  {}
)(withStyles(styles)(App))
