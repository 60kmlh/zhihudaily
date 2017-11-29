import React, { Component } from 'react'
import { proxyImg } from '@/lib/utils'
import Carousel from 'nuka-carousel'

class Banner extends Component {
  render() {
    return (
      <div className='index_banner'>
        <Carousel decorators={[]}>
        {
          this.props.list.map((item, index) => {
            return (
              <div key={item.id}>
                <img src={proxyImg(item.image)} alt=""/>
                <div className="artical_title">
                  <h2>{item.title}</h2>
                </div>
              </div>
            )
          })
        }
        </Carousel>
      </div>
    )
  }
}

export default Banner
