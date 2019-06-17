import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'
import PropTypes from 'prop-types'

export class CommentApp extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       comments: [],
       count: 0
    }
  }
  
  componentWillMount() {
    this._loadComments()
  }

  handleSubmitComponent = comment => {
    const comments = this.state.comments
    comments.push(comment)
    console.log('CommentApp', comment)
    this.setState({comments})
    this._saveComments(comments)
  }
  handleDeleteComment = index => {
    console.log('comment app', index)
    const comments = this.state.comments
    comments.splice(index, 1)
    this.setState({comments})
    this._saveComments(comments)
  }
  handleClick() {
    this.setState({
        count: ++this.state.count
    })
  }

  _loadComments() {
    let comments = localStorage.getItem('comments')
    if(comments) {
      comments = JSON.parse(comments)
      this.setState({comments})
    }
  }
  _saveComments(comments) {
    localStorage.setItem('comments', JSON.stringify(comments))
  }
  render() {
    return (
      <div className="wrapper" >
        <CommentInput onSubmit={this.handleSubmitComponent} />
        <CommentList onDeleteComment={this.handleDeleteComment} comments={this.state.comments} />
        当前计数：{this.state.count}<br/>
        <button onClick={this.handleClick.bind(this)}>自增</button>
      </div>
    )
  }
}

export default CommentApp
