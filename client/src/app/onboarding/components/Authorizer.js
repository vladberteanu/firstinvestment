import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

const Authorizer = withRouter(

  React.createClass({

    componentDidMount() {
        // if (!this.props.user.name) {
        //   this.props.router.replace('/signup')
        // }
    },

    render() {
        return (
            <div>{this.props.children}</div>
        )
    }
  })
)

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(
  mapStateToProps,
)(Authorizer)


