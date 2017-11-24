import * as types from '@/constants/ActionTypes'

export function toggleSlide() {
  return (dispatch) => {
    dispatch({type: types.TOGGLE_SLIDE})
  }
}

export function loading() {
  dispatch({type: types.TOGGLE_LOADING})
}
