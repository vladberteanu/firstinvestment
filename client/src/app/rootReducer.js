import { combineReducers } from 'redux';
import onboarding from './onboarding';

export default combineReducers({
  [onboarding.constants.NAME]: onboarding.reducer
});