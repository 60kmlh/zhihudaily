import React, { Component } from 'react'
import { proxyImg } from '@/lib/utils'
import { Link } from 'react-router-dom'
import Carousel from 'nuka-carousel'

class Banner extends Component {
  render() {
    return (
      <div className='index_banner'>
        <Carousel decorators={[]}>
        {
          this.props.list.map((item, index) => {
            return (
              <Link to={{pathname:'/article/'+item.id}} key={item.id}>
                <div>
                  <img src={proxyImg(item.image)} alt=""/>
                  <div className="artical_title">
                    <h2>{item.title}</h2>
                  </div>
                </div>
              </Link>
            )
          })
        }
        </Carousel>
      </div>
    )
  }
}

export default Banner
