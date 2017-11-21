import React, { Component } from 'react'
import Head from '@/components/Head'
import Banner from './Banner'
import List from '@/components/List'
import './index.styl'

class Index extends Component {
  render() {
    return (
      <div>
        <Head />
        <Banner />
        <List />
      </div>
    )
  }
}

export default Index
