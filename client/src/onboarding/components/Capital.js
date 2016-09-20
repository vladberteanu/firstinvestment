import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import ProgressButton from 'react-progress-button'
import { OnboardingMixin, mapStateToProps, mapDispatchToProps } from './OnboardingMixin'


const Capital = React.createClass({

   mixins: [OnboardingMixin],

  getInitialState() {
    return {
      submitData: {
        capital: '',
      },
      submitButtonState: '',
    }
  },

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-4 col-md-offset-4">
            <form onSubmit={this.handleSubmit}>
              <h1>How much money do you want to invest?</h1>
              <br/>
              <div className="input-group">
                <input
                  value={this.state.name}
                  name="capital"
                  className="form-control"
                  placeholder="$ 0"
                  onChange={this.handleChange}
                />
              </div>
              <br/>
              <ProgressButton state={this.state.submitButtonState}>
                Start portfolio
              </ProgressButton>
            </form>
          </div>
        </div>
      </div>
    );
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Capital))
