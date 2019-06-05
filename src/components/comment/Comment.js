import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

export class Comment extends Component {
  static propTypes = {

  }
  constructor(props) {
    super(props)
    console.log('Comment', props)
    this.state = {
      key: 0,
      name: '',
      comment: '',
      createTime: null,
      pic1: null
    }
  }
  

  render() {
    console.log('render', this.state)
    const {key, name, comment, createTime, pic1} = console.log('render', this.state)
    return (
      <div>
        <ListItem button key={key} >
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src={pic1} />
          </ListItemAvatar>
          <ListItemText primary={name} secondary={comment} />
      </ListItem>
      </div>
    )
  }
}

export default Comment
