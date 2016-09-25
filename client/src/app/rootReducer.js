import { combineReducers } from 'redux';
import onboarding from 'app/onboarding';
import { routerReducer } from 'react-router-redux'

export default combineReducers({
    [onboarding.constants.NAME]: onboarding.reducer,
    routing: routerReducer,
});