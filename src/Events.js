import React, { Component } from "react";
import StoryFullView from "./StoryFullView";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Events extends Component {
  state = {
    message: ""
  };

  componentDidMount() {
    fetch(`/moderator?id_token=${this.props.auth.getIdToken()}`, {
      headers: {
        Authorization: `Bearer ${this.props.auth.getAccessToken()}`,
        id_token: `${this.props.auth.getIdToken()}`
      }
    })
      .then(response => {
        if (response.ok) return response.json();
        throw new Error("Network response was not ok.");
      })
      .then(response => this.setState({ message: response.message }))
      .catch(error => this.setState({ message: error.message }));
  }

  render() {
    return (<div>
      <p>{this.state.message}</p>
      <StoryFullView/>
    </div>);
  }
}

export default Events;
