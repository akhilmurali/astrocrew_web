import React, { Component } from "react";
import { Link } from "react-router-dom";

class Discourse extends Component {
  render() {
    const { isAuthenticated, login, logout } = this.props.auth;
    return (
      <div>
        <h1>Discourse</h1>
        {isAuthenticated() ? (
          <Link to="/profile">View profile</Link>
        ) : false}
        <p>
          <button onClick={isAuthenticated() ? logout : login} style={{marginTop: 10}}>
            {isAuthenticated() ? "Log Out" : "Log In"}
          </button>
        </p>

      </div>
    );
  }
}

export default Discourse;
