import React, { Component } from 'react'
import './assets/style/app.styl'
import '@/assets/style/iconfont.css'
import Index from './views/Index'
import SlideList from '@/components/SlideList'

import { Route } from 'react-router-dom'
import Devtools from 'mobx-react-devtools'
import Theme from '@/views/Theme'
import Article from '@/views/Article'

class App extends Component {
  render() {
    return (
      <div>
        <Devtools />
        <SlideList />
        <Route exact path='/' component={Index}></Route>
        <Route exact path='/theme/:id' component={Theme}></Route>
        <Route exact path='/article/:id' component={Article}></Route>
      </div>
    )
  }
}

export default App
