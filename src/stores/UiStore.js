import { observable, action } from 'mobx'

class UiStore {
  @observable showSlide
  
  constructor() {
    this.showSlide = false
  }

  @action toggle_slide() {
    this.showSlide = !this.showSlide
  }
}

export default UiStore
