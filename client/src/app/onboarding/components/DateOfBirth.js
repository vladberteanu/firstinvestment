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
      <div>
        <div className="row">
          <div className="col-md-4 col-md-offset-4">
            <form onSubmit={this.handleSubmit}>
              <h1>When is your birthday?</h1>
              <br/>
              <div className="input-group">
                <input
                  value={this.state.name}
                  name="day"
                  className="form-control"
                  placeholder="DD"
                  onChange={this.handleChange}
                />
                <span className="input-group-addon">-</span>
                <input
                  value={this.state.username}
                  name="month"
                  className="form-control"
                  placeholder="MM"
                  onChange={this.handleChange}
                />
                <span className="input-group-addon">-</span>
                <input
                  value={this.state.password}
                  name="year"
                  placeholder="YYYY"
                  onChange={this.handleChange}
                  className="form-control"/>
              </div>
              <br/>
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
)(withRouter(DateOfBirth))
