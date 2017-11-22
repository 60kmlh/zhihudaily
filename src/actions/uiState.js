import * as types from '@/constants/ActionType'

export function toggleSlide() {
  dispatch({type: TOGGLE_SLIDE})
}

export function loading() {
  dispatch({type: TOGGLE_LOADING})
}
