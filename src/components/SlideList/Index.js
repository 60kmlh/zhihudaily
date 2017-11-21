import React, { Component } from 'react'
import './index.styl'
class SlideList extends Component {
  render() {
    return (
      <div className='slidelist'>
        <div className='cover'></div>
        <div className='slidelist_wrap'>
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
            <div className='slidelist_list_first'>
              <i className='iconfont icon-homepage'></i>
              <span>首页</span>
            </div>
            <ul>
              <li>
                <span>日常心理学</span>
                <i className='iconfont icon-add'></i>
              </li>
              <li>
                <span>用户推荐日报</span>
                <i className='iconfont icon-add'></i>
              </li>
              <li>
                <span>用户推荐日报</span>
                <i className='iconfont icon-add'></i>
              </li>
              <li>
                <span>用户推荐日报</span>
                <i className='iconfont icon-add'></i>
              </li>
              <li>
                <span>用户推荐日报</span>
                <i className='iconfont icon-add'></i>
              </li>
              <li>
                <span>用户推荐日报</span>
                <i className='iconfont icon-add'></i>
              </li>
              <li>
                <span>用户推荐日报</span>
                <i className='iconfont icon-add'></i>
              </li>
              <li>
                <span>用户推荐日报</span>
                <i className='iconfont icon-add'></i>
              </li>
              <li>
                <span>用户推荐日报</span>
                <i className='iconfont icon-add'></i>
              </li>
              <li>
                <span>用户推荐日报</span>
                <i className='iconfont icon-add'></i>
              </li>
              <li>
                <span>用户推荐日报</span>
                <i className='iconfont icon-add'></i>
              </li>
              <li>
                <span>用户推荐日报</span>
                <i className='iconfont icon-add'></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default SlideList
