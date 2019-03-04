import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import Commune from "./Commune";
import People from "./People";
import Nav from "./Nav";
import Auth from "./Auth/Auth";
import Callback from "./Callback";
import Projects from "./Projects";
import Startups from "./Startups";
import School from "./School";
import Events from "./Events";
import Admin from "./Admin";

class App extends Component {
  constructor(props) {
    super(props);
    this.auth = new Auth(this.props.history);
  }
  render() {
    return (
      <>
        <Nav auth={this.auth} />
        <div className="body">
          <Route
            path="/"
            exact
            render={props => <Commune auth={this.auth} {...props} />}
          />
          <Route
            path="/callback"
            render={props => <Callback auth={this.auth} {...props} />}
          />
          <Route
            path="/profile"
            render={props =>
              this.auth.isAuthenticated() ? (
                <People auth={this.auth} {...props} />
              ) : (
                <Redirect to="/" />
              )
            }
          />
          <Route path="/public" component={Projects} />
          <Route
            path="/private"
            render={props =>
              this.auth.isAuthenticated() ? (
                <Startups auth={this.auth} {...props} />
              ) : (
                this.auth.login()
              )
            }
          />
          <Route
            path="/pro"
            render={props =>
              this.auth.isAuthenticated() ? (
                <School auth={this.auth} {...props} />
              ) : (
                this.auth.login()
              )
            }
          />
          <Route
            path="/moderator"
            render={props =>
              this.auth.isAuthenticated() ? (
                <Events auth={this.auth} {...props} />
              ) : (
                this.auth.login()
              )
            }
          />
          <Route
            path="/admin"
            render={props =>
              this.auth.isAuthenticated() ? (
                <Admin auth={this.auth} {...props} />
              ) : (
                this.auth.login()
              )
            }
          />
        </div>
      </>
    );
  }
}

export default App;
