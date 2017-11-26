import * as types from '@/constants/ActionTypes'
import { latestAPI, beforeAPI } from '@/lib/api'

let loading = false
var date = new Date()
date = new Date(date.getTime() + 1000*60*60*24)


function dayNext() {
  var nextDay = date.getTime() - 1000*60*60*24
  date = new Date(nextDay)
  return date
}

export function get_home_list(dispatch) {
  axios.get(latestAPI).then(res => {
    dispatch({
      type: types.GET_HOME_LIST,
      data: {
        topList: res.data.top_stories,
        list: [res.data]
      }
    })
  })
}

export function add_home_list(dispatch) {
  if(loading) return
  loading = true
  dayNext()
  axios.get(beforeAPI + '/' +date.getFullYear() + (date.getMonth()+1) + date.getDate()).then((res) => {
    loading = false
    dispatch({
      type: types.ADD_HOME_LIST,
      data: res.data
    })
  })
}
