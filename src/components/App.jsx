import React from 'react'
import {connect} from 'react-redux'
import withStyles from 'react-jss'
import NonogramLevel from './NonogramLevel'
import {Route} from 'react-router-dom'
import CurrentMatrixState from './CurrentMatrixState'

const creator = true

const styles = theme => ({
  app: {
    fontFamily: ['Roboto', 'Arial', 'sans-serif'],
    textAlign: 'center',
    color: theme.grey[800]
  },
  header: {
  }
})

const App = ({classes, nonogram}) => {
  return (
    <div className={classes.app}>
      <div className={classes.header}>
        <h1>NONOGRAMS!</h1>
        <h3><a href='https://wikipedia.org/wiki/Nonogram'>What's a Nonogram?</a></h3>
      </div>
      <Route path='/level/:level/sublevel/:sublevel' component={NonogramLevel} />
      {
        creator
          ? <CurrentMatrixState />
          : null
      }
    </div>
  )
}

export default connect(
  (state) => state,
  {}
)(withStyles(styles)(App))
