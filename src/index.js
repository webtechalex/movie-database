import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import movies from './redux/reducers'

import App from './containers/App/App'
import './styles/index.css'

ReactDOM.render(
  <Provider store={createStore(movies)}>
    <App />
  </Provider>,
  document.getElementById('app')
)