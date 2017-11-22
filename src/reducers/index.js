import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import uiState from './uiState'
import home from './home'
import column from './column'
import article from './article'

export default combineReducers({
  uiState,
  home,
  column,
  article,
  routing: routerReducer
})
