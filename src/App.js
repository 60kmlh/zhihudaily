import React, { Component } from 'react'
import './assets/style/app.styl'
import '@/assets/style/iconfont.css'
import Index from './views/Index'
import SlideList from '@/components/SlideList'

import Artical from '@/views/Article'

class App extends Component {
  render() {
    return (
      <div>
        <Artical />
        {
        //   <Index />
        // <SlideList />
      }
      </div>
    )
  }
}

export default App
