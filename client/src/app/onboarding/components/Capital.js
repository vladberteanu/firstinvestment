import React from 'react';
import { Form, FormControl, FormGroup, Row, Col, Button, InputGroup} from 'react-bootstrap'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import { OnboardingMixin, mapStateToProps, mapDispatchToProps } from './OnboardingMixin'

const DateOfBirth = React.createClass({

    mixins: [OnboardingMixin],

    getInitialState() {
        return {
            submitData: {
                capital: ''
            },
            submitButtonState: '',
        }
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
                        <h1>How much money do you want to invest?</h1>
                    </Col>
                </Row>
                <Row className="bumperTop-lg">
                    <Col sm={4} smOffset={4} className="text-center">
                        <Form inline className="onboarding" onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <InputGroup>
                                    <InputGroup.Addon className="dollar">$</InputGroup.Addon>
                                    <FormControl type="number" name="capital" placeholder="0" maxLength={7}
                                        className="sevenDigit capital"
                                        onChange={this.handleChange}
                                        value={this.state.submitData.capital}/>
                                </InputGroup>
                            </FormGroup>
                            <div className="text-center">
                                <Button type="submit" className="bumperTop-lg" bsStyle="success">
                                    Start Investing
                                </Button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </div>
    )}
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(DateOfBirth))
