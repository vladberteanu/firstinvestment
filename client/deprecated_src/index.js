import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import SignupPage from './components/SignupPage';
import AppReducers from './reducers'

import './css/index.css';

let store = createStore(AppReducers)

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/signup" component={SignupPage} />
    </Router>
  </Provider>,
  document.getElementById('root')
)
