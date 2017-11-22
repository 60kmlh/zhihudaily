import React, { Component } from 'react'
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
                <img src={'https://images.weserv.nl/?url=' + item.image.replace('https://', '')} alt=""/>
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
