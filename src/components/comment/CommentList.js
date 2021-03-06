import React, { Component } from 'react'
import PropTypes from 'prop-types'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import ListItemAvatar from '@material-ui/core/ListItemAvatar';
// import Avatar from '@material-ui/core/Avatar';
import pic1 from '../../assets/imgs/picsum1.jpeg'
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
        <Comment key={index} index={index+1} comment={val} onDeleteComment={this.handleDeleteComment} pic={this.props.pic}/>
        // <ListItem button key={index} >
        //   <ListItemAvatar>
        //     <Avatar alt="Remy Sharp" src={pic1} />
        //   </ListItemAvatar>
        //   <ListItemText primary={val.name} secondary={val.comment} />
        // </ListItem>
      ])
  }

  handleDeleteComment = index => {
    console.log('comment list', index)
    if(this.props.handleDeleteComment) {
      this.props.handleDeleteComment(index)
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
