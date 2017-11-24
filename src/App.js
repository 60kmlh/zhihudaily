import React, { Component } from 'react'
import './assets/style/app.styl'
import '@/assets/style/iconfont.css'
import Index from './views/Index'
import SlideList from '@/components/SlideList'
import { Route } from 'react-router-dom'
import Artical from '@/views/Article'

class App extends Component {
  render() {
    return (
      <div>
        <SlideList />
        <Route exact path='/' component={Index}></Route>
        <Route exact path='/article/:id' component={Artical}></Route>
      </div>
    )
  }
}

export default App
