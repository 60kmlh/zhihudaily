import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleSlide } from '@/actions/uiState'
import './index.styl'

class Head extends Component {
  render() {
    return (
      <div className='head'>
        <div className='head_icon'>
          {this.props.type === 'index' ? 
            <i className='iconfont icon-other' onClick={() => this.toggleSlide()}></i>
            :
            <i className='iconfont icon-return' onClick={() => window.history.go(-1)}></i>
          }
        </div>
        {
          this.props.type === 'index' ?
          <div className='head_title'>首页</div>
          :
          null
        }
        {
          this.props.type !== 'index' ?
          <div className='head_icon_wrap'>
            <i className='iconfont icon-share'></i>
            <i className='iconfont icon-collection'></i>
            <i className='iconfont icon-interactive'></i>
            <span>12</span>
            <i className='iconfont icon-praise'></i>
            <span>43</span>
          </div>
          :
          null
        }
      </div>
    )
  }
  toggleSlide() {
    this.props.dispatch(toggleSlide())
  }
}

export default connect()(Head)
