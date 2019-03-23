import React, { Component } from "react";
import {Spin} from "antd";

class Callback extends Component {
  componentDidMount = () => {
    // Handle authentication if expected values are in the URL.
    if (/access_token|id_token|error/.test(this.props.location.hash)) {
      this.props.auth.handleAuthentication();
    } else {
      throw new Error("Invalid callback URL.");
    }
  };
  render() {
    return <Spin size="large" style={{display: "block", margin: 'auto', position: "absolute", top: "50%", left: "50%"}}/>;
  }
}

export default Callback;
