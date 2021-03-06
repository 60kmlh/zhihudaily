import React, { Component } from 'react'
import Head from '@/components/Head/Index'
import { connect } from 'react-redux'
import { newsAPI, extraAPI } from '@/lib/api'
import { proxyImg } from '@/lib/utils'
import './index.styl'
import '../../assets/style/article.css'

class Artical extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {
        images:['']
      },
      extra: {
        comments:'',
        popularity: ''
      }
    }
  }
  componentDidMount() {
    var that = this
    axios.get(newsAPI + '/'+ this.props.match.params.id).then(res => {
      that.setState({
        data:res.data
      })
    })
    axios.get(extraAPI + '/' + this.props.match.params.id).then(res => {
      that.setState({
        extra: res.data
      })
    })
  }
  render() {
    return (
      <div className='artical'>
        <Head
         comments={this.state.extra.comments} 
         popularity={this.state.extra.popularity}
         shareLink={this.state.data.share_url} />
        <div className='artical_banner'>
          {
            this.state.data.images ?
            <img src={proxyImg(this.state.data.images[0])} alt=""/>
            : null
          }
          <div className='artical_title'>
            <h2>{this.state.data.title}</h2>
            <span>{this.state.data.image_source}</span>
          </div>
        </div>
        <div className='artical_main' dangerouslySetInnerHTML={{
          __html: this.state.data.body
        }}>
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
