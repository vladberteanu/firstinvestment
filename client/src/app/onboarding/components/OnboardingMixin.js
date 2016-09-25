import { browserHistory } from 'react-router'
import onboarding from 'app/onboarding';
import { nextOnboardingStep } from 'app/onboarding/utils'

var _ = require('underscore')

var OnboardingMixin = {

    handleChange(event) {
        var submitData = _.extend({}, this.state.submitData)
        submitData[event.target.name] = event.target.value
        this.setState({ submitData: submitData });
    },

    handleSubmit(event) {
        event.preventDefault()

        this.setState({submitButtonState: 'loading'})
        // TODO: REST API
        console.log('Submitting: ', this.state.submitData)
        setTimeout( () => {
            this.setState({submitButtonState: 'success'})
            let user = {
                username: 'vladcyb1',
                name: 'Vlad Berteanu',
                password: 'test',
                onboardingSteps: []
            }
            if (!this.state.submitData.capital) {
                user.onboardingSteps = ['capital']
            }
            this.setState({submitButtonState: 'success'})
            this.props.onboardingUpdated(user)
            console.log('next:',nextOnboardingStep(user))
            browserHistory.push(nextOnboardingStep(user))
        }, 1000);
    },
}

const mapStateToProps = (state) => { return {} }

const mapDispatchToProps = (dispatch) => {
  return {
    onboardingUpdated: (user) => {
      dispatch(onboarding.actions.setUser(user))
    }
  }
}


export { OnboardingMixin, mapStateToProps, mapDispatchToProps }