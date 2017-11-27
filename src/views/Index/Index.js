import React, { Component } from 'react'
import Head from '@/components/Head/Index'
import Banner from './Banner'
import List from '@/components/List/Index'
import { connect } from 'react-redux'
import { get_home_list, add_home_list } from '@/actions/home'
import './index.styl'

class Index extends Component {
  componentDidMount() {
    this.props.dispatch(get_home_list)
   //this.props.dispatch(add_home_list())
   console.log('object');
    window.addEventListener('scroll', this.handleScroll(), false)
  }
  componentWillUnmount() {
    console.log(213);
    window.removeEventListener('scroll', this.handleScroll(), false)
    console.log(23);
  }
  render() {
    return (
      <div>
        <Head type='index' title='首页' />
        <Banner list={this.props.topList} />
        {
          this.props.list.map((item, index) => {
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
        that.props.dispatch(add_home_list)
      }
    }
    // var documentH = document.body.offsetHeight
    // var scrollTop = document.body.scrollTop
    // var clientH = window.document.body.scrollHeight
    //console.log(documentH, screenTop, clientH);
    //console.log(window.innerHeight, document.body.offsetHeight, window.pageYOffset);
  }
}

const mapStateToProps = function(state) {
  return {
    list: state.home.list,
    topList: state.home.topList
  }
}

export default connect(mapStateToProps)(Index)
