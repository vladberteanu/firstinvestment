import React from 'react'
import { Form, FormControl, FormGroup, Row, Col, Button} from 'react-bootstrap'
import { withRouter, Link } from 'react-router'
import { connect } from 'react-redux'
import onboarding from 'app/onboarding'
import { Header } from 'app/header/components'
import { nextOnboardingStep } from 'app/onboarding/utils'

let _ = require('underscore')

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
        let submitData = _.extend({}, this.state.submitData)
        submitData[e.target.name] = e.target.value
        this.setState({ submitData: submitData })
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
        }, 1000)
    },

    render() {
        return (
          <div>
            <Row>
                <Col sm={4} smOffset={4} className="text-center">
                    <img className="logo" src={require('img/logo.png')}/>
                </Col>
            </Row>
            <Row>
                <Col sm={4} smOffset={4} className="text-center">
                    <h1>Build A Risk Free Investment Portfolio</h1>
                </Col>
            </Row>
            <Row className="bumperTop-lg">
              <Col sm={4} smOffset={4}>
                <Form horizontal onSubmit={this.handleSubmit} className="auth">
                    <FormGroup>
                        <FormControl type="text" placeholder="Full Name" name="name"
                          value={this.state.submitData.name}
                          onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup>
                        <FormControl type="email" placeholder="Email" name="username"
                          value={this.state.submitData.username}
                          onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup>
                        <FormControl type="password" placeholder="Password" name="password"
                          value={this.state.submitData.password}
                          onChange={this.handleChange}/>
                    </FormGroup>
                    <Button type="submit" className="bumperTop-md" bsStyle="success">Sign Up</Button>
                    <p className="swap">
                      Already a member? &nbsp;
                      <Link to="/login">Login</Link>
                    </p>
                </Form>
              </Col>
            </Row>
          </div>
        )
    }
})

const mapStateToProps = (state) => { return {} }

const mapDispatchToProps = (dispatch) => {
    return {
        onUserCreated: (user) => {
            dispatch(onboarding.actions.setUser(user))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(Signup))
