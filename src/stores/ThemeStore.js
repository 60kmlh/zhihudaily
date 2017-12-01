import { observable, action, runInAction } from 'mobx'
import { themeListAPI, themeContentAPI } from '@/lib/api'

class ThemeStore {
  @observable theme_list
  @observable theme_content

  constructor() {
    this.theme_list = []
    this.theme_content = {stories:[], image:'', editors:[]}
  }

  @action get_theme_list() {
    axios.get(themeListAPI).then(res => {
      runInAction(() => {
        this.theme_list = res.data.others
      })
    })
  }

  @action get_theme_content(id) {
    axios.get(themeContentAPI + '/' + id).then(res => {
      runInAction(() => {
        this.theme_content = res.data
      })
    })
  }
}

export default ThemeStore
