import React from 'react'

import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'

// import Bundle from './Bundle';
import Home from 'comp/comment/CommentApp'
import Login from 'comp/login/Login'

// const Loading = function () {
//   return <div>Loading...</div>
// }

// const createComponent = (component) => (props) => (
//   <Bundle load={component}>
//     {
//       (Component) => Component ? <Component {...props} /> : <Loading/>
//     }
//   </Bundle>
// )

const getRouter = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">首页</Link></li>
        <li><Link to="/page1">Page1</Link></li>
      </ul>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/page1" component={Login}/>
      </Switch>
    </div>
  </Router>
)

export default getRouter
