import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';

class Nav extends Component {

  render() {
    return (
      <nav className="container">
          <img className="logo" src="/assets/astro.png" style={{ width: 150, marginLeft: 20 }} />
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
              <img src="/assets/user.svg" style={{ width: 35, height: 35, textAlign: "center", marginTop: 5, marginRight: 5 }} />
            </li>
          </ul>
      </nav>
    );
  }
}

export default Nav;
