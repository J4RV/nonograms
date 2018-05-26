import * as React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {ThemeProvider} from 'react-jss'
import App from './components/App'
import store from './store'
require('./prototypes/arrayEquals')

const shadowColour = '#37474F88'

const theme = {
  shadows: [
    '0px 1px 1px ' + shadowColour,
    '0px 2px 2px ' + shadowColour,
    '0px 3px 3px ' + shadowColour,
    '0px 4px 4px ' + shadowColour,
    '0px 5px 5px ' + shadowColour
  ],
  grey: {
    50: '#ECEFF1',
    100: '#CFD8DC',
    400: '#78909C',
    800: '#37474F'
  }
}

const NonogramApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <NonogramApp />
  </ThemeProvider>,
  document.getElementById('root')
)
