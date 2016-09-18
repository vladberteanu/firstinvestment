import React from 'react';
import ProgressButton from 'react-progress-button'
import { Header } from '../../header/components'

const DateOfBirth = React.createClass({

  getInitialState() {
    return {
      day: '',
      month: '',
      year: '',
      submitButtonState: '',
    }
  },

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  },

  handleSubmit(event) {
    event.preventDefault()

    this.setState({submitButtonState: 'loading'})
    // TODO: REST API
    setTimeout( () => {
      this.setState({submitButtonState: 'success'})
    }, 1000);
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
              <ProgressButton state={this.state.submitButtonState}>
                Next
              </ProgressButton>
            </form>
          </div>
        </div>
      </div>
    );
  }
})

export default DateOfBirth