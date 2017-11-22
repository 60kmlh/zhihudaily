import React, { Component } from 'react'
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
                <li className='list_item' key={item.id}>
                  <div className='list_item_left'>
                    <p>{item.title}</p>
                  </div>
                  <div className='list_item_right'>
                    <img src={"https://images.weserv.nl/?url=" + item.images[0].replace('http://', '').replace('https://', '')} alt=""/>
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default List
