import * as actionType from './actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case actionType.SET_USER:
      return action.user
    default:
      return state
  }
}
