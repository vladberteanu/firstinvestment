import * as actionType from './actionTypes';

export const setUser = (user) => ({
  type: actionType.SET_AUTH_USER,
  user: user,
});