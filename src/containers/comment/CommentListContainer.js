import React, { Component } from 'react'
import PropTypes from 'prop-types'

import CommentList from 'comp/comment/CommentList'

export default class CommentListContainer extends Component {
  /**ptypes */
  static propTypes = {
    comments: PropTypes.string,
    initComments: PropTypes.func,
    onDeleteComment: PropTypes.func
  }
  /**cwm */
  componentWillMount() {
    this._loadComments()
  }
  
  _loadComments() {
    let comments = localStorage.getItem('comments')
    comments = comments ? JSON.parse(comments) : []
    // this.props.initComments 是 connect 传进来的
    // 可以帮我们把数据初始化到 state 里面去
    this.props.initComments(comments)
  }

  handleDeleteComment = index => {
    const { comments } = this.props
    console.log('comment list', index, this.props)
    const newComments = [
      ...comments.slice(0, index),
      ...comments.slice(index + 1)
    ]
    localStorage.setItem('comments', JSON.stringify(newComments))
    if (this.props.onDeleteComment) {
      // this.props.onDeleteComment 是 connect 传进来的
      // 会 dispatch 一个 action 去删除评论
      this.props.onDeleteComment(index)
    }
  }

  render() {
    return (
      <div>
        <CommentList comments={this.props.comments} onDeleteComment={this.handleDeleteComment} />
      </div>
    )
  }
}
