import React, { Component } from 'react'
import './App.css'

import Nav from 'comp/nav/Nav'
import getRouter from './router/router'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Nav/>
        {getRouter()}
      </div>
    );
  }
}

export default App;
