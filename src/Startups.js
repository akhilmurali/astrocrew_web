import React, { Component } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Icon, Form, Input, Button } from "antd";
import TextArea from "antd/lib/input/TextArea";

class Private extends Component {
  state = {
    message: ""
  };

  componentDidMount() {
    fetch("/private", {
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
    return (<div className="row">
      <div className="col-6">
        <h3 style={{ color: "#361450" }}>Account Settings</h3>
        <p style={{ color: "#361450" }}>Username</p>
        <p>@pranjal</p>
        <h6>Connected Accounts</h6>
        <div className="row">
          <div className="col" style={{ maxWidth: 170 }}>
            <Icon type="github" style={{ display: "inline-block", fontSize: 44, position: "absolute", top: "50%" }} />
            <div style={{ display: "inline-block", position: "absolute" }}>
              <p style={{ margin: 0, paddingLeft: 50 }}>Github</p>
              <p style={{ color: "#21D6A5", paddingLeft: 50 }}>Connected</p>
            </div>
          </div>
          <div className="col" style={{ maxWidth: 170 }}>
            <Icon type="google" style={{ display: "inline-block", fontSize: 44, position: "absolute", top: "50%", color: "#D3D3D3" }} />
            <div style={{ display: "inline-block", position: "absolute" }}>
              <p style={{ margin: 0, paddingLeft: 50 }}>Google</p>
              <p style={{ color: "#C2C2C2", paddingLeft: 50 }}>Not Connected</p>
            </div>
          </div>
          <div className="col" style={{ maxWidth: 170 }}>
            <Icon type="mail" style={{ display: "inline-block", fontSize: 44, position: "absolute", top: "50%", color: "#D3D3D3" }} />
            <div style={{ display: "inline-block", position: "absolute" }}>
              <p style={{ margin: 0, paddingLeft: 50 }}>Email</p>
              <p style={{ color: "#C2C2C2", paddingLeft: 50 }}>Not Connected</p>
            </div>
          </div>
        </div>
        <div style={{marginTop: 70, maxWidth: 500}}>
          <h6>Given Name</h6>
          <Form.Item>
            <Input />
          </Form.Item>
          <h6>Write something about yourself</h6>
          <Form.Item>
            <TextArea />
          </Form.Item>
          <h6>Twitter Handle</h6>
          <Form.Item>
            <Input />
          </Form.Item>
          <h6>Website Link</h6>
          <Form.Item>
            <Input />
          </Form.Item>
          <h6>Public Email Address</h6>
          <Form.Item>
            <Input />
          </Form.Item>
          <Button style={{float: "right", background: "#361450", color: "#ffffff", borderRadius: 0, fontSize: 10}}>SAVE CHANGES</Button> 
        </div>
      </div>
      <div className="col-6">
        <h3 style={{ color: "#361450" }}>Crew Invitations</h3>
      </div>
    </div>);
  }
}

export default Private;
