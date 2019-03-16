import React, { Component } from "react";
import { Button, Icon } from "antd";

class Projects extends Component {
  state = {
    message: ""
  };

  componentDidMount() {
    fetch("/public")
      .then(response => {
        if (response.ok) return response.json();
        throw new Error("Network response was not ok.");
      })
      .then(response => this.setState({ message: response.message }))
      .catch(error => this.setState({ message: error.message }));
  }

  render() {
    return (<div className="container" style={{ padding: 50 }}>
      <div>
        <Button type="default" style={{ display: "inline-block", margin: 5, float: "right", borderRadius: 0 }}>Joined April 2019</Button>
        <Button type="default" style={{ display: "inline-block", margin: 5, float: "right", borderRadius: 0, borderColor: "#21D6A5", color: "#21D6A5" }}>Crew Member</Button>
      </div>
      <p style={{ marginTop: 50, color: "#21D6A5" }}>125678 CREDS</p>
      <h2 style={{ marginTop: -20, color: "#361450" }}>Patrick Mackinzie</h2>
      <p style={{ marginTop: -20 }}>@patio11</p>
      <p>
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
        </p>
      <div style={{ marginTop: 15 }}>
        <Icon style={{ display: "inline" }} type="twitter"></Icon>
        <Icon style={{ display: "inline", marginLeft: 5 }} type="link"></Icon>
        <Icon style={{ display: "inline", marginLeft: 5, color: "#ED4255" }} type="down-square" theme="filled"></Icon>
      </div>
      <p style={{marginTop: 10}}>52 Post Submissions</p>
      <p style={{marginTop: -15}}>182 Comments</p>
    </div>);
  }
}

export default Projects;
