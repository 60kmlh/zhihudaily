import React, { Component } from 'react'
import Head from '@/components/Head'
import './index.styl'

class Artical extends Component {
  render() {
    return (
      <div className='artical'>
        <Head />
        <div className='artical_banner'>
          <img src="https://images.weserv.nl/?url=pic4.zhimg.com/v2-3906b3c995be10c4a89a15527479ad93.jpg" alt=""/>
          <div className='artical_title'>
            <h2>说到「全球最繁忙的机场」，前一架还没离地，后一架就准备起飞了</h2>
            <span>Public Domain</span>
          </div>
        </div>
        <div className='artical_main'>
          
        </div>
        {
          // <div className='artical_bottom'>
          //   <div className='btn'>查看知乎讨论</div>
          // </div>
        }
      </div>
    )
  }
}

export default Artical
