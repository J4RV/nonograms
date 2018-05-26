import React from 'react'
import {connect} from 'react-redux'
import Typography from '@material-ui/core/Typography'
import Nonogram from './Nonogram'

const App = ({nonogram}) => {
  return (
    <div>
      <Typography variant='title'>
        NONOGRAMS!
      </Typography>
      <Nonogram />
    </div>
  )
}

export default connect(
  (state) => state,
  {}
)(App)
