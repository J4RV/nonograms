import * as React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {ThemeProvider} from 'react-jss'
import FastClick from 'fastclick'
import CssBaseline from '@material-ui/core/CssBaseline'
import { MuiThemeProvider } from '@material-ui/core/styles'
import App from './components/App'
import store from './store'
import theme from './theme'
import { BrowserRouter as Router, Route } from 'react-router-dom'
require('./global.css')
require('./prototypes/arrayEquals')

// To remove the 300ms lag for touchscreen devices
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function () {
    FastClick.attach(document.body)
  }, false)
}

const NonogramApp = () => (
  <Provider store={store}>
    <Router basename='/nonograms'>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Route path='*' exact component={App} />
      </MuiThemeProvider>
    </Router>
  </Provider>
)

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <NonogramApp />
  </ThemeProvider>,
  document.getElementById('root')
)
