import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './index.styl'

class List extends Component {
  render() {
    return (
      <div className='list'>
        <h2 className='title'>{this.props.title}</h2>
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
                        <img src={"https://images.weserv.nl/?url=" + item.images[0].replace('http://', '').replace('https://', '')} alt=""/>
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
