import React, { Component } from 'react'
import PropTypes from 'prop-types'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import pic1 from 'asset/picsum4.jpeg'
import pic from 'asset/picsum1.jpeg'
import Comment from './Comment'

export class CommentList extends Component {
  static propTypes = {
    comments: PropTypes.array,
    onDeleteComment: PropTypes.func
  }
  
  static defaultProps = {
    comments: [],
    pic: pic1
  }

  _buildItem(){
      return this.props.comments.map((val, index) => [
        <Comment key={index} index={index} comment={val} onDeleteComment={this.handleDeleteComment} pic={this.props.pic}/>
        // <ListItem button key={index} >
        //   <ListItemAvatar>
        //     <Avatar alt="Remy Sharp" src={pic1} />
        //   </ListItemAvatar>
        //   <ListItemText primary={val.name} secondary={val.comment} />
        // </ListItem>
      ])
  }

  handleDeleteComment = index => {
    console.log('comment list', index, this.props)
    if(this.props.onDeleteComment) {
      this.props.onDeleteComment(index)
    }
  }

  render() {
    
    return (
      <div>
        <List comments="nav">
          {this._buildItem()}
        </List>
      </div>
    )
  }
}

function ListItemLink(props) {
  console.log(props)
  return <ListItem button component="a" {...props} />;
}
export default CommentList
