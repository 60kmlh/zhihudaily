import * as types from '@/constants/ActionTypes'

function column(state = {list: [], cur_column: {}}, action) {
  switch(action.type) {
    case types.GET_THEME_LIST:
      return Object.assign({}, state, {list: action.data})
    case types.GET_CUR_COLUMN:
      return Object.assign({}, state, {cur_colum: action.data})
    default:
      return state
  }
}

export default column
