import React, { Component } from 'react'
import Head from '@/components/Head/Index'
import Banner from './Banner'
import List from '@/components/List/Index'
import { inject, observer } from 'mobx-react'
import './index.styl'

@inject('rootStore')
@observer
class Index extends Component {
  componentDidMount() {
    //this.props.dispatch(get_home_list)
   //this.props.dispatch(add_home_list())
   this.props.rootStore.homeStore.get_home_list()
    window.addEventListener('scroll', this.handleScroll(), false)
  }
  componentWillUnmount() {
    console.log(213);
    window.removeEventListener('scroll', this.handleScroll(), false)
    console.log(23);
  }
  render() {
    var state = this.props.rootStore.homeStore
    return (
      <div>
        <Head type='index' title='首页' />
        <Banner list={state.top_stories} />
        {
          state.stories.map((item, index) => {
            return (
              <List title={item.date} list={item.stories} key={item.date} />
            )
          })
        }
      </div>
    )
  }

  handleScroll() {
    var that = this
    return () => {
      if(document.body.offsetHeight - window.innerHeight - window.pageYOffset < 50) {
        that.props.rootStore.homeStore.add_home_list()
      }
    }
    // var documentH = document.body.offsetHeight
    // var scrollTop = document.body.scrollTop
    // var clientH = window.document.body.scrollHeight
    //console.log(documentH, screenTop, clientH);
    //console.log(window.innerHeight, document.body.offsetHeight, window.pageYOffset);
  }
}


export default Index
