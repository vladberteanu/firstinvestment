import React from 'react';
import { withRouter } from 'react-router'
import ProgressButton from 'react-progress-button'
import { connect } from 'react-redux'
import auth from '../';
import { Header } from '../../header/components'
import { nextOnboardingStep } from '../../onboarding/utils'

var _ = require('underscore')

const Signup = React.createClass({

  getInitialState() {
    return {
      submitData: {
        name: '',
        username: '',
        password: '',
      },
      submitButtonState: '',
    }
  },

  handleChange(event) {
    var submitData = _.extend({}, this.state.submitData)
    submitData[event.target.name] = event.target.value
    this.setState({ submitData: submitData });
  },

  handleSubmit(event) {
    event.preventDefault()

    this.setState({submitButtonState: 'loading'})
    // TODO: REST API
    setTimeout( () => {
      let user = {
        username: this.state.submitData.username,
        name: this.state.submitData.name,
        password: this.state.submitData.password,
        onboardingSteps: ['dob', 'capital']
      }
      console.log(user)
      this.setState({submitButtonState: 'success'})
      this.props.onUserCreated(user)
      this.props.router.replace(nextOnboardingStep(user))
    }, 1000);
  },

  render() {
    return (
      <div>
        <Header/>
        <div className="row">
          <div className="col-md-4 col-md-offset-4">
            <form onSubmit={this.handleSubmit}>
              <h1>Join our community!</h1>
              <div className="form-group">
              <input
                  value={this.state.name}
                  name="name"
                  className="form-control"
                  placeholder="Your name..."
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  value={this.state.username}
                  name="username"
                  className="form-control"
                  placeholder="Your email..."
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  value={this.state.password}
                  name="password"
                  type="password"
                  placeholder="Your password..."
                  onChange={this.handleChange}
                  className="form-control"/>
              </div>
              <div className="form-group">
              <ProgressButton state={this.state.submitButtonState}>
                Sign Up
              </ProgressButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
})

const mapStateToProps = (state) => { return {} }

const mapDispatchToProps = (dispatch) => {
  return {
    onUserCreated: (user) => {
      dispatch(auth.actions.setUser(user))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Signup))
