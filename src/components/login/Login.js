import React, { Component } from 'react'

import { increment, decrement, reset } from 'act/counter'
import { getUserInfo } from 'act/userInfo'

import { Formik } from 'formik'

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

        <Formik
          initialValues={{
            name: "",
            gender: "",
            age: ""
          }}
          validate={values => {
            let errors = {};
            if (values.name.length === 0) {
              errors.name = "Name can not be empty"
            }
            if (values.gender.length === 0) {
              errors.gender = "You must choose a gender"
            }

            if (values.age <= 0 || values.age % 1 !== 0) {
              errors.age = "Age must be a Positive Integer"
            }
            return errors;
          }}
          onSubmit={(values) => {
            console.log(values)
          }}
          render={props =>{
            console.log('render.props', props)
            return (
              <form onSubmit={props.handleSubmit}>
                <div className="content">
                  <div>
                    <label>姓名： </label><input type="text" id="name" name="name" value={props.values.name}
                                              onChange={props.handleChange} onBlur={props.handleBlur}/>
  {props.touched.name && props.errors.name && <div>{props.errors.name}</div>}
                  </div>
                  <div>
                    <label>性别： </label>
                    <input type="radio" id="male" value="male" name="gender" onChange={props.handleChange}
                          onBlur={props.handleBlur}/> <label htmlFor="male">男</label>
                    <input type="radio" id="female" value="female" name="gender" onChange={props.handleChange}
                          onBlur={props.handleBlur}/> <label htmlFor="female">女</label>
  {props.touched.gender && props.errors.gender && <div>{props.errors.gender}</div>}
                  </div>
                  <div>
                    <label>年龄： </label><input type="number" id="age" name="age" value={props.values.age}
                                              onChange={props.handleChange} onBlur={props.handleBlur}/>
  {props.touched.age && props.errors.age && <div>{props.errors.age}</div>}
                  </div>
                  <div className="submit-area">
                    <button type="submit">提交</button>
                  </div>
                </div>
              </form>
            )
          }
          }
        />
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
