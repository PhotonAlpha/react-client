import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { TextField, FormControl, FormHelperText, InputLabel, Input } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import purple from '@material-ui/core/colors/purple'
import { unstable_Box as Box } from '@material-ui/core/Box'

import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'

const validate = values => {
  const errors = {}
  const requiredFields = [ 'username', 'comment']
  requiredFields.forEach(field => {
    if (!values[ field ]) {
      errors[ field ] = 'Required'
    }
  })
  if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  return errors
}

// const renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => {
//   console.log(input)
//   console.log(label)
//   console.log(meta)
//   console.log(custom)
//   return (
//     <FormControl className={classes.formControl} error={ touched && error }  >
//       <InputLabel htmlFor="component-error">Name</InputLabel>
//       <Input
//         id="component-error"
//         value={this.state.username}
//         aria-describedby="component-error-text"
//       />
//       <FormHelperText id="component-error-text">Error</FormHelperText>
//     </FormControl>
//   )
// }
const renderTextField = (field) => {
  console.log('field', field)
  const { meta, classes } = field
  return (
    <FormControl className={classes.formControl} error={ meta.touched && meta.error }  >
      <InputLabel htmlFor="component-error">Name</InputLabel>
      <Input {...field.input}
      />
      <FormHelperText id="component-error-text">Error</FormHelperText>
    </FormControl>
  )

}


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
    console.log('this.props', this.props)
    const { classes } = this.props
    return (
      <form >
        {/* <Field name="firstName" component={renderTextField} label="First Name"/> */}
        <Field 
          name="username" 
          classes={classes} 
          component={renderTextField} 
          format={(value, name) => {
            console.log('format', value, name, this.state[name])
            return value || this.state[name]
          }}
          onChange={this.handleChange('username')}
          label="User Name"/>
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

const CommentInputForm = reduxForm({
  form: 'CommentInputForm',
  validate
})(withStyles(styles)(CommentInput))

export default connect((state, props) => {
  console.log('connect', state, props)
  return {
    username: props.username
  }
})(CommentInputForm)
