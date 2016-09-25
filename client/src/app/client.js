import style from '../styles/base.scss';

import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import onboarding from './onboarding';
import rootReducer from './rootReducer'

let store = createStore(rootReducer)

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/signup" component={onboarding.components.Signup} />
      <Route component={onboarding.components.Authorizer}>
        <Route path="/onboarding/dob" component={onboarding.components.DateOfBirth} />
        <Route path="/onboarding/capital" component={onboarding.components.Capital} />
        <Route path="/portfolio"/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
