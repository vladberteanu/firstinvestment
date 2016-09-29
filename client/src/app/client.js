import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import onboarding from 'app/onboarding';
import { Portfolio, Feedback, Sector } from 'app/main/components'
import rootReducer from 'app/rootReducer'
import style from 'styles/base.scss';
import sidebar from 'styles/sidebar.css';

let store = createStore(rootReducer)
const history = syncHistoryWithStore(browserHistory, store)

render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/signup" component={onboarding.components.Signup} />
            <Route path="/login" component={onboarding.components.Login} />
            <Route component={onboarding.components.Authorizer}>
                <Route path="/onboarding/dob" component={onboarding.components.DateOfBirth} />
                <Route path="/onboarding/capital" component={onboarding.components.Capital} />
                <Route path="/portfolio" component={Portfolio}/>
                <Route path="/portfolio/:sector" component={Sector}/>
                <Route path="/feedback" component={Feedback}/>
            </Route>
        </Router>
    </Provider>,
  document.getElementById('root')
)
