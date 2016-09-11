import React, { Component } from 'react';

class Signup extends Component {
  render() {
    return (
      <form>
        <h1>Join our community!</h1>
        <div className="form-group">
          <input value="" type="text" name="username" className="form-control"/>
        </div>
        <div className="form-group">
          <input value="" type="password" name="password" className="form-control"/>
        </div>
        <div className="form-group">
          <button className="btn btn-primary btn-lg">
            Sign up
          </button>
        </div>
      </form>
    );
  }
}

export default Signup;
