import React, { Component } from 'react'
import { connect } from 'react-redux'
import Head from '@/components/Head/Index'
import List from '@/components/List/Index'
import { getThemeContent } from '@/actions/theme'
import { proxyImg } from '@/lib/utils'
import './index.styl'

class Theme extends Component {
  componentDidMount() {
    this.props.dispatch(getThemeContent(this.props.match.params.id))
  }
  componentDidUpdate(preProps) {
    if(preProps.match.params.id !== this.props.match.params.id) {
      this.props.dispatch(getThemeContent(this.props.match.params.id))
    }
  }
  render() {
    return (
      <div>
        <Head type='index' title={this.props.content.name} />
        <div className='theme_banner'>
          <img src={proxyImg(this.props.content.image)} alt=""/>
        </div>
        <List list={this.props.content.stories}>
          <div className="editor">
            <span>主编</span>
            <ul>
              {
                this.props.content.editors.map((item, index) => {
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

  renderEditor(list) {
    var html = ''
    this.props.content.editors.map((item, index) => {
      html += `<li class='editor_item'><a href=${item.url}><img src=${proxyImg(item.avatar)}></a></li>`
    })
    return  '<div class="editor"><span>主编</span><ul>'+ html +'<div></div>'
    
  }
}

const mapStateToProps = function(state) {
  return {
    content: state.theme.theme_content
  }
}

export default connect(mapStateToProps)(Theme)
