import React from 'react'
import { AppContainer } from "react-hot-loader"
import ReactDOM from 'react-dom'
import './index.css'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker'

import getRouter from './router/router'
import store from './redux/store/store'

renderWithHotReload(getRouter())

/*hot update*/
if (module.hot) {
  module.hot.accept('./router/router', () => {
    const getRouter = require('./router/router').default;
    renderWithHotReload(getRouter())
  });
}

function renderWithHotReload(RootElement) {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store} >
        {RootElement}
      </Provider>
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
