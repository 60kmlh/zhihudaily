import * as types from '@/constants/ActionTypes'

function home(state = {topList: [], list: []}, action) {
  switch(action.type) {
    case types.GET_HOME_LIST: 
      return action.data
    case types.ADD_HOME_LIST:
      return Object.assign({}, state, {list: [...state.list,action.data]})
    default:
      return state
  }
}

export default home
