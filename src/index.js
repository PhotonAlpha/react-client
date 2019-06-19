import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { BrowserRouter as Router } from 'react-router-dom'

import 'core-js/stable'
import 'regenerator-runtime/runtime'

import './index.css'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker'
import App from './App'
import store from './redux/store/store'

renderWithHotReload(App)

/*hot update*/
if (module.hot) {
  module.hot.accept('./App', () => {
    const nextApp = require('./App').default;
    renderWithHotReload(nextApp)
  });
}

function renderWithHotReload(RootElement) {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store} >
        <Router>
          <RootElement/>
        </Router>  
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  )
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
