import React from 'react';
import ProgressButton from 'react-progress-button'

const Capital = React.createClass({

  getInitialState() {
    return {
      capital: '',
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

export default Capital