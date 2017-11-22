import React, { Component } from 'react'
import Head from '@/components/Head'
import Banner from './Banner'
import List from '@/components/List'
import { connect } from 'react-redux'
import { get_home_list, add_home_list } from '@/actions/home'
import './index.styl'

class Index extends Component {
  componentDidMount() {
    this.props.dispatch(get_home_list())
    this.props.dispatch(add_home_list())
  }
  render() {
    return (
      <div>
        <Head />
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
}

const mapStateToProps = function(state) {
  return {
    list: state.home.list,
    topList: state.home.topList
  }
}

export default connect(mapStateToProps)(Index)
