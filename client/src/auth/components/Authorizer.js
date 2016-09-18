import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { Header } from '../../header/components'

const Authorizer = withRouter(

  React.createClass({

    componentDidMount() {
      if (!this.props.user) {
        this.props.router.replace('/signup')
      }
    },

    render() {
        return (
            <div>
                <Header/>
                {this.props.children}
            </div>
        );
    }
  })
)

const mapStateToProps = (state) => {
  return {
    user: state.auth.user
  }
}

export default connect(
  mapStateToProps,
)(Authorizer)


