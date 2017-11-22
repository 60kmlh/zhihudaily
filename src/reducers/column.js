import * as types from '@/constants/ActionTypes'

function column(state = {}, action) {
  switch(action.type) {
    case types.GET_CUR_COLUMN:
      return action.data
    default:
      return state
  }
}

export default column
