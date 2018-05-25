import React from 'react'
import {connect} from 'react-redux'
import Typography from '@material-ui/core/Typography'

const App = ({name}) => {
  return (
    <Typography variant="title">
      {name}
    </Typography>
  )
}

export default connect(
  (state) => state,
  {}
)(App)
