import * as types from '@/constants/ActionTypes'

function theme(state = {list: [], theme_content: {stories:[]}}, action) {
  switch(action.type) {
    case types.GET_THEME_LIST:
      return Object.assign({}, state, {list: action.data})
    case types.GET_THEME_CONTENT:
      return Object.assign({}, state, {theme_content: action.data})
    default:
      return state
  }
}

export default theme
