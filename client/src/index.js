import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import auth from './auth';
import rootReducer from './rootReducer'

import './css/index.css';
import './css/progressive-button.css';

let store = createStore(rootReducer)

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/signup" component={auth.components.Signup} />
    </Router>
  </Provider>,
  document.getElementById('root')
)
