import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import purple from '@material-ui/core/colors/purple'
import { unstable_Box as Box } from '@material-ui/core/Box'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 500,
  },
  menu: {
    width: 200,
  },
  button: {
    margin: theme.spacing.unit,
  },
  cssOutlinedInput: {
    '& $notchedOutline': {
      borderColor: purple[500]
    },
  },
  notchedOutline: {}
})

export class CommentInput extends Component {
  /** ptypes */
  static propTypes = {
    username: PropTypes.string,
    onUserNameInputBlur: PropTypes.func,
    onSubmit: PropTypes.func
  }

  static defaultProps = {
    username: ''
  }
  /**rconst */
  constructor(props) {
    super(props)
  
    this.state = {
       username: props.username,
       comment: ''
    }
  }
  componentDidMount() {
    
  }
  
  handleUserNameBlur = event => {
    console.log('handleUserNameBlur', event.target.value)
    if (this.props.onUserNameInputBlur) {
      this.props.onUserNameInputBlur(event.target.value)
    }
  }

  handleChange = name => event => {
    console.log('handleChange', name, event.target.value)
    this.setState({
      [name]: event.target.value,
    })
  }

  handleSubmit = () => {
    console.log('submit', this.props.onSubmit)
    if (this.props.onSubmit) {
      this.props.onSubmit({
        username: this.state.username,
        comment: this.state.comment,
        createTime: +new Date()
      })
    }
    this.setState({comment: ''})
  }

  render() {
    const { classes } = this.props
    return (
      <form >
        {/* <Field name="firstName" component={renderTextField} label="First Name"/> */}
        <TextField
            label="UserName"
            value={this.state.username}
            onChange={this.handleChange('username')}
            onBlur={this.handleUserNameBlur}
            InputProps={{
              classes: {
                root: classes.cssOutlinedInput,
                notchedOutline: classes.notchedOutline,
              },
            }}
            fullWidth
            margin="normal"
            variant="outlined"
          />
        <TextField
          label="comment"
          placeholder="input your comment"
          multiline
          fullWidth
          rows="4"
          margin="normal"
          variant="outlined"
          value = {this.state.comment}
          onChange={this.handleChange('comment')}
          autoFocus={true}
        />
        <Box display="flex" justifycomment="flex-end">
          <Button variant="contained" color="primary" className={classes.button}
          onClick={this.handleSubmit} >
            Commit
          </Button>
        </Box>
      </form>
    )
  }
}

CommentInput.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(CommentInput)
