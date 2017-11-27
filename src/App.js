import React, { Component } from 'react'
import './assets/style/app.styl'
import '@/assets/style/iconfont.css'
import Index from './views/Index/Index'
import SlideList from '@/components/SlideList/Index'
import { Route } from 'react-router-dom'
import Article from '@/views/Article/Index'
import Theme from '@/views/Theme/Index'

class App extends Component {
  render() {
    return (
      <div>
        <SlideList />
        <Route exact path='/' component={Index}></Route>
        <Route exact path='/theme/:id' component={Theme}></Route>
        <Route exact path='/article/:id' component={Article}></Route>
      </div>
    )
  }
}

export default App
