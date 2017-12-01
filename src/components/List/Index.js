import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { proxyImg } from '@/lib/utils'
import './index.styl'

class List extends Component {
  render() {
    return (
      <div className='list'>
        <h2 className='title' >{this.props.title}</h2>
        {this.props.children}
        <ul>
          {
            this.props.list.map((item, index) => {
              return (
                <Link to={{pathname:'/article/'+item.id}} key={item.id}>
                  <li className='list_item'>
                    <div className='list_item_left'>
                      <p>{item.title}</p>
                    </div>
                    <div className='list_item_right'>
                      {
                        item.images ? 
                        <img src={proxyImg(item.images[0])} alt=""/>
                        :
                        null
                      }
                    </div>
                  </li>
                </Link>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default List
