import * as actionType from './actionTypes';

export const setUser = (user) => ({
    type: actionType.SET_USER,
    user: user,
});