import React, { Component } from 'react'
import Head from '@/components/Head/Index'
import List from '@/components/List/Index'
import { proxyImg } from '@/lib/utils'
import { inject, observer } from 'mobx-react'
import './index.styl'

@inject('rootStore')
@observer
class Theme extends Component {
  componentDidMount() {
    this.getContent()
  }
  componentDidUpdate(preProps) {
    if(preProps.match.params.id !== this.props.match.params.id) {
      this.getContent()
    }
  }
  render() {
    var content = this.props.rootStore.themeStore.theme_content
    return (
      <div>
        <Head type='index' title={content.name} />
        <div className='theme_banner'>
          <img src={proxyImg(content.image)} alt=""/>
        </div>
        <List list={content.stories}>
          <div className="editor">
            <span>主编</span>
            <ul>
              {
                content.editors.map((item, index) => {
                  return (
                    <li class='editor_item'>
                      <a href={item.url}>
                        <img src={proxyImg(item.avatar)} />
                      </a>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </List>
      </div>
    )
  }

  getContent() {
    this.props.rootStore.themeStore.get_theme_content(this.props.match.params.id)
  }

  renderEditor(list) {
    var html = ''
    this.props.content.editors.map((item, index) => {
      html += `<li class='editor_item'><a href=${item.url}><img src=${proxyImg(item.avatar)}></a></li>`
    })
    return  '<div class="editor"><span>主编</span><ul>'+ html +'<div></div>'
    
  }
}

export default Theme
