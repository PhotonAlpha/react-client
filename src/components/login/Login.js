import React, { Component } from 'react'

import { increment, decrement, reset } from 'act/counter'
import { getUserInfo } from 'act/userInfo'

import { connect } from 'react-redux'

import './Login.scss'

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
    const {userInfo, isLoading, errorMsg} = this.props.userInfo
    return (
      <div className="page-box" >
        {
          isLoading ? '请求信息中......' :
            (
              errorMsg ? errorMsg :
                <div>
                  <p>用户信息：</p>
                  <p>用户名：{userInfo.name}</p>
                  <p>介绍：{userInfo.intro}</p>
                </div>
            )
        }
        <button onClick={() => this.props.getUserInfo()}>请求用户信息</button>

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
    counter: state.counter,
    userInfo: state.userInfo
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
    },
    getUserInfo: () => {
      dispatch(getUserInfo())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
