import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'
import PropTypes from 'prop-types'

export class CommentApp extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       comments: []
    }
  }
  
  handleSubmitComponent(comment) {
    this.state.comments.push(comment)
    console.log('CommentApp', comment)
    this.setState({comments: this.state.comments})
  }
  render() {
    return (
      <div className="wrapper" >
        <CommentInput onSubmit={this.handleSubmitComponent.bind(this)} />
        <CommentList comments={this.state.comments} />
      </div>
    )
  }
}

export default CommentApp
