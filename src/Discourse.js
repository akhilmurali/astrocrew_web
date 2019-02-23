import React, { Component } from "react";
import { Link } from "react-router-dom";

class Discourse extends Component {
  render() {
    const { isAuthenticated, login } = this.props.auth;
    return (
      <div>
        <h1>Discourse</h1>
        {isAuthenticated() ? (
          <Link to="/profile">View profile</Link>
        ) : (
          <button onClick={login}>Log In</button>
        )}
      </div>
    );
  }
}

export default Discourse;
