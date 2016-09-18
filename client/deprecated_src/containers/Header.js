import { connect } from 'react-redux'
import Header from '../components/Header'

const mapStateToProps = (state) => {
  return {
    username: state.user.username
  }
}

const HeaderContainer = connect(
  mapStateToProps,
)(Header)

export default HeaderContainer