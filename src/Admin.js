import React, { Component } from "react";

class Admin extends Component {
  state = {
    message: ""
  };

  componentDidMount() {
      console.log('Entered admin route');
    fetch("/admin", {
        headers: { Authorization: `Bearer ${this.props.auth.getAccessToken()}` }
      })
      .then(response => {
        if (response.ok) return response.json();
        throw new Error("Network response was not ok.");
      })
      .then(response => this.setState({ message: response.message }))
      .catch(error => this.setState({ message: error.message }));
  }

  render() {
    return <p>{this.state.message}</p>;
  }
}

export default Admin;
