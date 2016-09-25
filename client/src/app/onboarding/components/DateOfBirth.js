import React from 'react';
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
            <div></div>
    )}
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(DateOfBirth))
