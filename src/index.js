import React from 'react'
import { AppContainer } from "react-hot-loader"
import ReactDOM from 'react-dom'
import './index.css'
// import App from './App'
import * as serviceWorker from './serviceWorker'
// import { Router} from 'react-router-dom'
// import history from './router/history'

import getRouter from './router/router'

renderWithHotReload(getRouter())

/*hot update*/
if (module.hot) {
  console.log('module.hot', module.hot)
  module.hot.accept('./router/router', () => {
    console.log("router111111111111")
    const getRouter = require('./router/router').default;
    renderWithHotReload(getRouter())
  });
}

function renderWithHotReload(RootElement) {
  ReactDOM.render(
    <AppContainer>
      {RootElement}
    </AppContainer>,
    document.getElementById('root')
  )
}

// ReactDOM.render(
//   getRouter()
//   ,document.getElementById('root')
// )

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
