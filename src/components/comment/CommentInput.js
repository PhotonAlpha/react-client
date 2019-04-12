import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import purple from '@material-ui/core/colors/purple';
import { unstable_Box as Box } from '@material-ui/core/Box';

const required = value => (value == null ? 'Required' : undefined);

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
  notchedOutline: {},
});

const renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => (
  <TextField hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
  />
)

export class CommentInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      comment: ''
    }
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };
  handleSubmit = () => {
    console.log('submit')
    if (this.props.onSubmit) {
      const {name, comment} = this.state;
      this.props.onSubmit({name, comment})
    }
    this.setState({comment: ''});
  }

  render() {
    console.log('render', this.state)
    const { classes } = this.props;
    return (
      <form >
          {/* <Field name="firstName" component={renderTextField} label="First Name"/> */}
          <TextField
              label="UserName"
              value={this.state.name}
              onChange={this.handleChange('name')}
              InputProps={{
                classes: {
                  root: classes.cssOutlinedInput,
                  notchedOutline: classes.notchedOutline,
                },
              }}
              value = {this.state.name}
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
          />
          <Box display="flex" justifyContent="flex-end">
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
  classes: PropTypes.object.isRequired,
};


// export default withStyles(styles)(reduxForm({
//   form: 'testReduxForm',
//   initialValues:{ firstName: 'fn'}
// })(CommentInput));

export default withStyles(styles)(CommentInput);
