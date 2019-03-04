import React, { Component } from "react";
import { Link } from "react-router-dom";
import Footer from './Footer';
import Welcome from './Welcome';

class Commune extends Component {
  render() {
    const { isAuthenticated, login, logout } = this.props.auth;
    return (
      <div>
        {!isAuthenticated() ? (
          <Welcome auth={this.props.auth}/>
        ) : false}
        <p>
          <button onClick={isAuthenticated() ? logout : login} style={{marginTop: 10}}>
            {isAuthenticated() ? "Log Out" : "Log In"}
          </button>
        </p>
        <Footer></Footer>
      </div>
    );
  }
}

export default Commune;
