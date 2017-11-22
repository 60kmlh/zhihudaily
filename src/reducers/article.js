import * as types from '@/constants/ActionTypes'

function article(state = {}, action) {
  switch(action.type) {
    case types.GET_CUR_ARTICLE:
      return action.data
    default:
      return state
  }
}

export default article
