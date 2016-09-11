import { connect } from 'react-redux'
import { setUser } from '../actions/auth'
import SignupForm from '../components/SignupForm'


const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onUserCreated: (user) => {
      dispatch(setUser(user))
    }
  }
}

const SignupFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm)

export default SignupFormContainer