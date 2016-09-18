import * as actionType from './actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case actionType.SET_AUTH_USER:
      return {user: action.user}
    default:
      return state
  }
}
