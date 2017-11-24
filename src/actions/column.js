import * as types from '@/constants/ActionTypes'
import { themeListAPI } from '@/lib/api'

export function getThemeList(dispatch) {
  axios.get(themeListAPI).then(res => {
    dispatch({
      type: types.GET_THEME_LIST,
      data: res.data.others
    })
  })
}
