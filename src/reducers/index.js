import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import uiState from './uiState'
import home from './home'
import theme from './theme'
import article from './article'

export default combineReducers({
  uiState,
  home,
  theme,
  article,
  routing: routerReducer
})
