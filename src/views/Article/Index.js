import React, { Component } from 'react'
import Head from '@/components/Head'
import { connect } from 'react-redux'
import { newsAPI } from '@/lib/api'
import './index.styl'
import '../../assets/style/article.css'

class Artical extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {
        image:''
      }
    }
  }
  componentDidMount() {
    console.log(this.props.match.params.id);
    var that = this
    axios.get(newsAPI + '/'+ this.props.match.params.id).then(res => {
      that.setState({
        data:res.data
      })
    })
  }
  render() {
    return (
      <div className='artical'>
        <Head />
        <div className='artical_banner'>
          <img src={"https://images.weserv.nl/?url=" + this.state.data.image.replace('http://', '').replace('https://', '')} alt=""/>
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
