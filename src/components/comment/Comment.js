import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import moment from 'moment'
import Avatar from '@material-ui/core/Avatar'
import { IconButton, ListItem, ListItemSecondaryAction, ListItemText, ListItemAvatar } from '@material-ui/core'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  }
})

export class Comment extends Component {
  static propTypes = {
    comment: PropTypes.object.isRequired,
    onDeleteComment: PropTypes.func,
    index: PropTypes.number
  }
  constructor(props) {
    super(props)
    console.log('Comment', props)
    this.state = {
      username: '',
      comment: '',
      createTimeStr: '',
      pic: props.pic
    }
  }
  componentWillMount() {
    this._updateTimeString()
    this._timer = setInterval(() =>
      this._updateTimeString(),
      60000
    )
  }
  componentWillUnmount() {
    // console.log('componentWillUnmount')
    clearInterval(this._timer)
  }
  
  _updateTimeString () {
    console.log('update time')
    const { username, comment, createTime } = this.props.comment
    const createTimeStr = moment(createTime).fromNow()
    this.setState({username, comment, createTimeStr})
  }

  handleDeleteComment = () => {
    console.log('comment', this.props.onDeleteComment, this.props.index)
    if(this.props.onDeleteComment) {
      this.props.onDeleteComment(this.props.index)
    }
  }

  render() {
    const { username, comment, createTimeStr } = this.state
    return (
      <div>
        <ListItem button >
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src={this.state.pic} />
          </ListItemAvatar>
          <ListItemText primary={username}
            secondary={
              // <React.Fragment>
              //   <Typography
              //     component="span"
              //     variant="body2"
              //     classusername={styles.inline}
              //     color="textPrimary"
              //   >
                comment
              //   </Typography>
              // </React.Fragment>
            } />
          <ListItemSecondaryAction>
            {createTimeStr}
            <IconButton edge="end" aria-label="Delete" onClick={ this.handleDeleteComment } >
              <FontAwesomeIcon icon={faTrashAlt} />
            </IconButton>
          </ListItemSecondaryAction>
      </ListItem>
      </div>
    )
  }
}

export default withStyles(styles)(Comment)
