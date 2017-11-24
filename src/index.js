import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import configureStore from './store'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <HashRouter basename = '/'>
      <App />
    </HashRouter>
  </Provider>, 
  document.getElementById('app'))
