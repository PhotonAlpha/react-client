import React from 'react'

import {Route, Switch} from 'react-router-dom'

import Bundle from './Bundle';
import Home from 'bundle-loader?lazy&name=Home!container/comment/CommentApp'
import Login from 'bundle-loader?lazy&name=Login!comp/login/Login'
import NotFound from 'bundle-loader?lazy&name=NotFound!comp/not-found/NotFound'
import Loading from 'comp/loading/Loading'

const createComponent = (component) => (props) => (
  <Bundle load={component}>
    {
      (Component) => Component ? <Component {...props} /> : <Loading/>
    }
  </Bundle>
)

const getRouter = () => (
  <Switch>
    <Route exact path="/" component={createComponent(Home)}/>
    <Route exact path="/page1" component={createComponent(Login)}/>
    <Route component={createComponent(NotFound)}/>
  </Switch>
)

export default getRouter
