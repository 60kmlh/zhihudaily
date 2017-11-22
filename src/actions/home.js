import * as types from '@/constants/ActionTypes'
import { latestAPI, beforeAPI } from '@/lib/api'

export function get_home_list() {
  return (dispatch) => {
    axios.get(latestAPI).then(res => {
      dispatch(set_data(
        types.GET_HOME_LIST,
        {
          topList: res.data.top_stories,
          list: [res.data]
        }
      ))
    })
  }
}

export function add_home_list() {
  return (dispatch) => {
    axios.get(beforeAPI+'20131119').then((res) => {
      dispatch(set_data(
        types.ADD_HOME_LIST,
        res.data
      ))
    })
  }
}

function set_data(type,data) {
  return {
    type: type,
    data: data
  }
}