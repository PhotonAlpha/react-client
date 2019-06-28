import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { addComment } from '../../redux/reducer/comment'
import CommentInput from 'comp/comment/CommentInput'

class CommentInputContainer extends Component {
  static propTypes = {
    comments: PropTypes.array,
    onSubmit: PropTypes.func
  }

  /**rconst */
  constructor(props) {
    super(props)
  
    this.state = {
     username: ''
    }
  }

  componentWillMount() {
    this._loadUserName()
  }
  
  _loadUserName() {
    const username = localStorage.getItem('username')
    if (username) {
      this.setState({ username })
    }
  }

  _saveUsername = username => {
    // 看看 render 方法的 onUserNameInputBlur
    // 这个方法会在用户名输入框 blur 的时候的被调用，保存用户名
    console.log('_saveUsername', username)
    localStorage.setItem('username', username)
    this.setState({ username })
  }

  handleSubmitComment = comment => {
    console.log('handleSubmitComment', comment)
    // 评论数据的验证
    if (!comment) return
    if (!comment.username) return alert('请输入用户名')
    if (!comment.comment) return alert('请输入评论内容')
    // 新增评论保存到 LocalStorage 中
    const { comments } = this.props
    const newComments = [...comments, comment]
    localStorage.setItem('comments', JSON.stringify(newComments))
    // this.props.onSubmit 是 connect 传进来的
    // 会 dispatch 一个 action 去新增评论
    if (this.props.onSubmit) {
      this.props.onSubmit(comment)
    }
  }

  render() {
    console.log('input render', this.props)
    return (
      <div>
        <CommentInput 
        username={this.state.username}
        onUserNameInputBlur={this._saveUsername}
        onSubmit={this.handleSubmitComment}  />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    comments: state.commentContent.comments
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (comment) => {
      dispatch(addComment(comment))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (CommentInputContainer)