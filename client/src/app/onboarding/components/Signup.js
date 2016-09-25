import React from 'react';
import { Form, FormControl, FormGroup, Row, Col, ControlLabel, Checkbox, Button} from 'react-bootstrap';
import { withRouter } from 'react-router'
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

  handleChange(e) {
    var submitData = _.extend({}, this.state.submitData)
    submitData[e.target.name] = e.target.value
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
        <Row>
            <Col className="text-center vlad">
                <h3>Build A Risk Free Investment Portfolio</h3>
            </Col>
        </Row>
        <Row>
          <Col sm={4} smOffset={4}>
            <Form horizontal onSubmit={this.handleSubmit}>
              <FormGroup>
                <FormControl type="text" placeholder="Full Name" name="name"
                  value={this.state.submitData.name}
                  onChange={this.handleChange}/>
              </FormGroup>

              <FormGroup>
                <FormControl type="email" placeholder="Email" name="email"
                  value={this.state.submitData.email}
                  onChange={this.handleChange}/>
              </FormGroup>

              <FormGroup>
                <FormControl type="password" placeholder="Password" name="password"
                  value={this.state.submitData.password}
                  onChange={this.handleChange}/>
              </FormGroup>

              <Button type="submit">
                Sign up
              </Button>

            </Form>
          </Col>
        </Row>
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
