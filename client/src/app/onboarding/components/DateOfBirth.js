import React from 'react';
import { Form, FormControl, FormGroup, Row, Col, Button} from 'react-bootstrap'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import { OnboardingMixin, mapStateToProps, mapDispatchToProps } from './OnboardingMixin'

const DateOfBirth = React.createClass({

    mixins: [OnboardingMixin],

    getInitialState() {
        return {
            submitData: {
                day: '',
                month: '',
                year: '',
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
                        <h1>When is your birthday?</h1>
                    </Col>
                </Row>
                <Row className="bumperTop-lg">
                    <Col sm={4} smOffset={4} className="text-center">
                        <Form inline className="onboarding" onSubmit={this.handleSubmit}>
                            <FormGroup maxLength="2">
                                <FormControl type="number" name="month" placeholder="MM" maxLength={2}
                                    className="twoDigit" onChange={this.handleChange}/>
                            </FormGroup>
                            <FormGroup>
                                <FormControl type="number" name="day" placeholder="DD" maxLength={2}
                                    className="twoDigit" onChange={this.handleChange}/>
                                </FormGroup>
                            <FormGroup>
                                <FormControl type="number" name="year" placeholder="YYYY" maxLength={4}
                                    className="fourDigit" onChange={this.handleChange}/>
                            </FormGroup>
                            <div className="text-center bumperTop-lg">
                                <Button type="submit" className="bumperTop-md" bsStyle="success">Next</Button>
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
