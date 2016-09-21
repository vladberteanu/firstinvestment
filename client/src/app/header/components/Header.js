import React from 'react';
import { connect } from 'react-redux'
import { AppBar } from 'react-toolbox/lib/app_bar';
import { Button } from 'react-toolbox/lib/button';

const Header = React.createClass({
  render() {
    const { name } = this.props

    return (
      <AppBar fixed flat>
        <div className="row">
          <div className="col-md-4 col-sm-offset-8">
            <Button label="Hello World!" />
            Logged in as {name}.
          </div>
        </div>
      </AppBar>
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
