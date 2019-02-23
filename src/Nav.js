import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    const { isAuthenticated, login, logout } = this.props.auth;
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Discourse</Link>
          </li>
          <li>
            <Link to="/profile">People</Link>
          </li>
          <li>
            <Link to="/public">Projects</Link>
          </li>
          <li>
            <Link to="/private">Startups</Link>
          </li>
            <li>
              <Link to="/pro">Astro School</Link>
            </li>
            <li>
              <Link to="/moderator">Events</Link>
            </li>
            <li>
              <Link to="/admin">Admin</Link>
            </li>
          <li>
            <button onClick={isAuthenticated() ? logout : login}>
              {isAuthenticated() ? "Log Out" : "Log In"}
            </button>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
