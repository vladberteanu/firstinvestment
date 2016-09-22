import Input from 'react-toolbox/lib/input';
import {Button} from 'react-toolbox/lib/button';
import React from 'react';
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import auth from '../';
import { Header } from '../../header/components'
import { nextOnboardingStep } from '../../onboarding/utils'
const {Grid, Row, Col} = require('react-flexbox-grid');


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

  handleChange(name, value) {
    var submitData = _.extend({}, this.state.submitData)
    submitData[name] = value
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
      <Grid>
        <Header/>
        <Row center="xs">
          <Col md={5}>
            <form onSubmit={this.handleSubmit}>
              <Input type='text' label='Name' name='name'
                value={this.state.submitData.name}
                onChange={this.handleChange.bind(this, 'name')}/>

              <Input type='email' label='Email address'
                value={this.state.submitData.email}
                onChange={this.handleChange.bind(this, 'email')} />

              <Input type='email' label='Password'
                value={this.state.submitData.password}
                onChange={this.handleChange.bind(this, 'password')} />

                <Button type="submit" icon='bookmark' label='Sign Up' raised primary />
            </form>
          </Col>
        </Row>
      </Grid>
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
