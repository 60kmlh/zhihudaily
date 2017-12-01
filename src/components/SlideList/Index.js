import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { observer, inject } from 'mobx-react'
import './index.styl'

@inject('rootStore')
@observer
class SlideList extends Component {
  componentDidMount() {
    this.props.rootStore.themeStore.get_theme_list()
  }
  render() {
    var {uiStore, themeStore} = this.props.rootStore
    return (
      <div className='slidelist'>
        <div
         className='cover' 
         style={{display: uiStore.showSlide ? 'block' : 'none'}}
         onClick={() => this.closeSlide()}></div>
        <div className='slidelist_wrap' style = {{transform: uiStore.showSlide ? 'translateX(0)' : 'translateX(-100vw)'}}>
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
                themeStore.theme_list.map((item, index) => {
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
    this.props.rootStore.uiStore.toggle_slide()
  }
}


export default SlideList
