import React from 'react';
import { connect } from 'react-redux'
import { AppBar } from 'react-toolbox/lib/app_bar';
const { Row, Col } = require('react-flexbox-grid');

const Header = React.createClass({
  render() {
    const { name } = this.props

    return (
      <Row>
        <Col xs>
          <AppBar flat/>
        </Col>
      </Row>
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
