import { combineReducers } from 'redux';
import onboarding from 'app/onboarding';

export default combineReducers({
    [onboarding.constants.NAME]: onboarding.reducer
});