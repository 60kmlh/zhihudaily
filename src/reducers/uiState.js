import * as types from '@/constants/ActionTypes'

function uiState(state = {showSlide: false, loading: false}, action) {
  switch(action.type) {
    case(types.TOGGLE_SLIDE):
      return Object.assign({}, state, {showSlide: !state.showSlide})
    case(types.TOGGLE_LOADING):
      return Object.assign({}, state, {loading: !state.loading})
    default:
      return state
  }
}

export default uiState
