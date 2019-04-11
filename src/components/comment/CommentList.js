import React, { Component } from 'react'
import PropTypes from 'prop-types'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

export class CommentList extends Component {
  static defaultProps = {
    comments: []
  }
  _buildItem(){
    // const comments = [
    //   {name: 'Jerry', comment: 'Hello'},
    //   {name: 'Tom', comment: 'World'},
    //   {name: 'Lili', comment: 'yes'}
    // ]
    // if(this.props.comments) {
      return this.props.comments.map((val, index) => [
        <ListItem button key={index} >
          <ListItemText primary={val.name + ':' + val.comment } />
        </ListItem>
      ])
    // }
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
