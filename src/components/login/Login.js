import React, { Component } from 'react'

import {increment, decrement, reset} from 'act/counter'

import { connect } from 'react-redux'

class Login extends Component {
  constructor(props) {
    super(props)
    console.log('Login', props)
    this.state = {
       count: 0
    }
  }

  handleClick() {
    this.setState({
        count: ++this.state.count
    })
  }

  render() {
    return (
      <div>
        当前计数：{this.props.counter.count}<br/>
        <button onClick={() => this.props.increment()}>自增</button>
        <button onClick={() => this.props.decrement()}>自减</button>
        <button onClick={() => this.props.reset()}>重置</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => {
      dispatch(increment())
    },
    decrement: () => {
      dispatch(decrement())
    },
    reset: () => {
      dispatch(reset())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
