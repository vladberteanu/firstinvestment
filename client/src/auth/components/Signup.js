import React from 'react';
import { connect } from 'react-redux'
import auth from '../';

const Signup = React.createClass({

  getInitialState() {
    return {
      name: '',
      username: '',
      password: '',
    }
  },

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  },

  handleSubmit(event) {
    event.preventDefault()

    // TODO: REST API
    setTimeout( () => {
      let user = {
        username: this.state.username,
        name: this.state.name,
        password: this.state.password
      }
      this.props.onUserCreated(user)
    }, 1000);
  },

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-4 col-md-offset-4">
            <form onSubmit={this.handleSubmit}>
              <h1>Join our community!</h1>
              <div className="form-group">
              <input
                  value={this.state.name}
                  name="name"
                  className="form-control"
                  placeholder="Your name..."
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  value={this.state.username}
                  name="username"
                  className="form-control"
                  placeholder="Your email..."
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  value={this.state.password}
                  name="password"
                  type="password"
                  placeholder="Your password..."
                  onChange={this.handleChange}
                  className="form-control"/>
              </div>
              <div className="form-group">
                <button className="btn btn-primary btn-lg">
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>



    );
  }
})

const mapStateToProps = (state) => { return {} }

const mapDispatchToProps = (dispatch) => {
  return {
    onUserCreated: (user) => {
      dispatch(auth.actions.setUser(user))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup)
