import React from 'react';
import { connect } from 'react-redux'


const Header = React.createClass({
  render() {
    const { name } = this.props

    return (
      <div>

      </div>
    );
  }
})

const mapStateToProps = (state) => {
  return {
    name: state.user ? state.user.name : null,
  }
}

export default connect(
  mapStateToProps,
)(Header)
