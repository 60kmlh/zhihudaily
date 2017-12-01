import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'
import App from './App'
import { HashRouter } from 'react-router-dom'
import rootStore from '@/stores/RootStore'

ReactDOM.render(
  <Provider rootStore={rootStore}>
    <HashRouter base='/'>
      <App /> 
    </HashRouter>
  </Provider>,
  document.getElementById('app'))
