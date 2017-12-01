import HomeStore from './HomeStore'
import UiStore from './UiStore'
import ThemeStore from './ThemeStore'

class RootStore {
  constructor() {
    this.homeStore = new HomeStore()
    this.uiStore = new UiStore()
    this.themeStore = new ThemeStore()
  }
}

export default new RootStore()
