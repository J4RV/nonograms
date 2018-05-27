import React from 'react'
import {connect} from 'react-redux'
import Nonogram from './Nonogram'
import loadLevel from '../actions/loadLevel'

class NonogramLevel extends React.Component {
  componentWillMount () {
    const {loadLevel} = this.props
    const {level, sublevel} = this.props.match.params
    loadLevel(level, sublevel)
  }
  render () {
    return <Nonogram />
  }
}

export default connect(
  (state) => null,
  {loadLevel}
)(NonogramLevel)
