import React, { Component } from 'react'
import { connect } from 'react-redux'
import Head from '@/components/Head/Index'
import List from '@/components/List/Index'
import { getThemeContent } from '@/actions/theme'

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
        <List list={this.props.content.stories} />
      </div>
    )
  }
}

const mapStateToProps = function(state) {
  return {
    content: state.theme.theme_content
  }
}

export default connect(mapStateToProps)(Theme)
