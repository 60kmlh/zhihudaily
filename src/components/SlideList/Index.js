import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getThemeList } from '@/actions/theme'
import { toggleSlide } from '@/actions/uiState'
import './index.styl'

class SlideList extends Component {
  componentDidMount() {
    this.props.dispatch(getThemeList)
  }
  render() {
    return (
      <div className='slidelist'>
        <div
         className='cover' 
         style={{display: this.props.showSlide ? 'block' : 'none'}}
         onClick={() => this.closeSlide()}></div>
        <div className='slidelist_wrap' style = {{transform: this.props.showSlide ? 'translateX(0)' : 'translateX(-100vw)'}}>
          <div className='slidelist_header'>
            <div className='slidelist_header_info'>
              <img src="http://7xqch8.com1.z0.glb.clouddn.com/4.pic_hd.jpg" alt=""/>
              <span>60kmlh</span>
            </div>
            <div className='slidelist_function'>
              <div className='slidelist_function_item'>
                <i className='iconfont icon-collection'></i>
                <span>我的收藏</span>
              </div>
            </div>
          </div>
          <div className='slidelist_list'>
            <Link to='/'>
            <div className='slidelist_list_first' onClick={ () => this.closeSlide()}>
              <i className='iconfont icon-homepage'></i>
                <span>首页</span>
            </div>
            </Link>
            <ul>
              {
                this.props.theme.map((item, index) => {
                  return (
                    <Link to={'/theme/' + item.id} key={item.id}>
                      <li onClick={() => this.closeSlide()}>
                        <span>{item.name}</span>
                        <i className='iconfont icon-add'></i>
                      </li>
                    </Link>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </div>
    )
  }

  closeSlide() {
    this.props.dispatch(toggleSlide)
  }
}

const mapStateToProps = function(state) {
  return {
    showSlide: state.uiState.showSlide,
    theme: state.theme.list
  }
}

export default connect(mapStateToProps)(SlideList)
