import React from 'react'
import {connect} from 'react-redux'
import withStyles from 'react-jss'
import Nonogram from './Nonogram'

const styles = theme => ({
  app: {
    fontFamily: ['Roboto', 'Arial', 'sans-serif'],
    textAlign: 'center',
    color: theme.grey[800]
  }
})

const App = ({classes, nonogram}) => {
  return (
    <div className={classes.app}>
      <h1>NONOGRAMS!</h1>
      <h3>
        <a href='https://wikipedia.org/wiki/Nonogram'>What's a Nonogram?</a>
      </h3>
      <Nonogram />
    </div>
  )
}

export default connect(
  (state) => state,
  {}
)(withStyles(styles)(App))
