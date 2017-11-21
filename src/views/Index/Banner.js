import React, { Component } from 'react'
import Carousel from 'nuka-carousel'

class Banner extends Component {
  render() {
    return (
      <div className='index_banner'>
        <Carousel decorators={[]}>
          <div>
            <img src="https://mages.weserv.nl/?url=pic3.zhimg.com/v2-42b3513da24602a8c73e351a7fb97d8a.jpg" alt=""/>
          </div>
          <div>
            <img src="https://mages.weserv.nl/?url=pic3.zhimg.com/v2-42b3513da24602a8c73e351a7fb97d8a.jpg" alt=""/>
          </div>
          <div>
            <img src="https://mages.weserv.nl/?url=pic3.zhimg.com/v2-42b3513da24602a8c73e351a7fb97d8a.jpg" alt=""/>
          </div>
        </Carousel>
      </div>
    )
  }
}

export default Banner
