import * as types from '@/constants/ActionTypes'
import { themeListAPI, themeContentAPI } from '@/lib/api'

export function getThemeList(dispatch) {
  axios.get(themeListAPI).then(res => {
    dispatch({
      type: types.GET_THEME_LIST,
      data: res.data.others
    })
  })
}

export function getThemeContent(id) {
  return (dispatch) => {
    axios.get(themeContentAPI+ '/' +id).then(res => {
      dispatch({
        type: types.GET_THEME_CONTENT,
        data: res.data
      })
    })
  }
}
