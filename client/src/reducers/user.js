const user = (state = {}, action) => {
  switch (action.type) {
    case 'SIGNUP':
      return { isAuthenticated: 'pending' }
    default:
      return state
  }
}

export default user