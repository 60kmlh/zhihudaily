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
          <div className='head_title'>{this.props.title}</div>
          :
          null
        }
        {
          this.props.type !== 'index' ?
          <div className='head_icon_wrap'>
            <i className='iconfont icon-share' onClick={() => this.copyLink()}></i>
            <i className='iconfont icon-collection'></i>
            <i className='iconfont icon-interactive'></i>
            <span>{this.props.comments}</span>
            <i className='iconfont icon-praise'></i>
            <span>{this.props.popularity}</span>
          </div>
          :
          null
        }
      </div>
    )
  }
  toggleSlide() {
    this.props.dispatch(toggleSlide)
  }
  copyLink() {
    var el = document.createElement('input')
    el.value = this.props.shareLink
    document.body.appendChild(el)
    el.select()
    document.execCommand("Copy")
    alert('分享链接已复制！')
    document.body.removeChild(el)
  }
}

export default connect()(Head)
