import React, { Component } from 'react';

const Signup = React.createClass({

  getInitialState() {
    return {
      username: '',
      password: '',
    }
  },

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  },

  handleSubmit(event) {
    event.preventDefault()
    console.log('Sending', this.state.username, this.state.password)
    let user = {username: this.state.username}
    this.props.onUserCreated(user)
  },

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Join our community!</h1>
        <div className="form-group">
          <input
            value={this.state.username}
            name="username"
            className="form-control"
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <input
            value={this.state.password}
            name="password"
            type="password"
            onChange={this.handleChange}
            className="form-control"/>
        </div>
        <div className="form-group">
          <button className="btn btn-primary btn-lg">
            Sign up
          </button>
        </div>
      </form>
    );
  }
})

export default Signup;
