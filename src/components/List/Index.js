import React, { Component } from 'react'
import './index.styl'

class List extends Component {
  render() {
    return (
      <div className='list'>
        <h2 className='title'>今日要闻</h2>
        <ul>
          <li className='list_item'>
            <div className='list_item_left'>
              <p>Atlas 机器人会跳跃、旋转、后空翻，这背后的技术是什么？</p>
            </div>
            <div className='list_item_right'>
              <img src="https://images.weserv.nl/?url=pic2.zhimg.com/v2-f39e6066d55d17b42dcf9975b5734461.jpg" alt=""/>
            </div>
          </li>
          <li className='list_item'>
            <div className='list_item_left'>
              <p>Atlas 机器人会跳跃、旋转、后空翻，这背后的技术是什么？</p>
            </div>
            <div className='list_item_right'>
              <img src="https://images.weserv.nl/?url=pic2.zhimg.com/v2-f39e6066d55d17b42dcf9975b5734461.jpg" alt=""/>
            </div>
          </li>
          <li className='list_item'>
            <div className='list_item_left'>
              <p>Atlas 机器人会跳跃、旋转、后空翻，这背后的技术是什么？</p>
            </div>
            <div className='list_item_right'>
              <img src="https://images.weserv.nl/?url=pic2.zhimg.com/v2-f39e6066d55d17b42dcf9975b5734461.jpg" alt=""/>
            </div>
          </li>
        </ul>
      </div>
    )
  }
}

export default List
