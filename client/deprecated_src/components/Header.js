import React, { Component } from 'react';

const Header = ({ username }) => (
   <div className="row">
        <div className="col-md-4 col-md-offset-4">
          Loggedin as {username}.
        </div>
      </div>
);

export default Header;
