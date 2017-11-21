import React, { Component } from 'react'
import './index.styl'

class Head extends Component {
  render() {
    return (
      <div className='head'>
        <div className='head_icon'>
          {this.props.type === 'index' ? 
            <i className='iconfont icon-other'></i>
            :
            <i className='iconfont icon-return'></i>
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
}

export default Head
