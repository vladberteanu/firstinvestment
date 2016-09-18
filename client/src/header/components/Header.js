import React from 'react';
import { connect } from 'react-redux'

const Header = React.createClass({
  render() {
    const { name } = this.props

    return (
       <div className="row">
          <div className="col-md-4 col-sm-offset-8">
            Loggedin as {name}.
          </div>
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
