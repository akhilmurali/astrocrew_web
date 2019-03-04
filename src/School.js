import React, { Component } from "react";
import { Input, Form } from "antd";
import { Button } from "antd";
import { Icon } from 'antd';
import "antd/dist/antd.css";
import { browserHistory } from 'react-router';
import { timingSafeEqual } from "crypto";

const Search = Input.Search;

class School extends Component {
  state = {
    message: "",
    userNameAvailable: false
  };

  addTokenAsHeader = () => {
    return {
      headers: {
        Authorization: `Bearer ${this.props.auth.getAccessToken()}`,
        id_token: `${this.props.auth.getIdToken()}`
      }
    }
  }

  componentDidMount() {
    fetch("/pro", this.addTokenAsHeader())
      .then(response => {
        if (response.ok) return response.json();
        throw new Error("Network response was not ok.");
      })
      .then(response => this.setState({ message: response.message }))
      .catch(error => this.setState({ message: error.message }));
  }

  checkUserNameAvailability = () => {
    //this.setState({ username: value, userNameAvailable: false, status: "validating"});
    fetch(`users/check/username?value=${this.state.inputValue}`, this.addTokenAsHeader())
      .then((response) => {
        response.clone().json().then((body) => {
          if (body.available) {
            this.setState({ userNameAvailable: true, status: "success" });
          } else {
            this.setState({ userNameAvailable: false, status: "error" });
          }
        });
      }).catch((error) => {
        console.log(error);
        this.setState({ userNameAvailable: false });
      });
  };

  updateInputValue = (evt) => {
    this.setState({
      inputValue: evt.target.value
    });
  }

  submitUsername = () => {
    if (this.state.username && this.state.userNameAvailable) {
      //Commit the user to auth0 database:
      fetch(`users/add/username?value=${this.state.inputValue}`, this.addTokenAsHeader())
        .then((response) => {
          response.json().then((body) => {
            if (body.status == 'OK') {
              // Do some respose eval and redirect the user if successful
              //browserHistory.push("/");
              console.log("Username Created Successfully for this user.")
            } else {
              //Keep the user on the page and flag that something went wrong:
              this.setState({ userNameAvailable: false });
              this.setState({ status: "close-circle" });
            }
          });
        }).catch((error) => {
          console.log(error);
          this.setState({ userNameAvailable: false });
        });
    } else {
      //Flag the user asking him/her to choose an appropriate username:
      this.setState({ userNameAvailable: false });
    }
  };

  render() {
    return (
      <div>
        <h1>Just a Few more things, mate.</h1>
        <Form.Item
          validateStatus={this.state.status}
          hasFeedback
          style={{maxWidth:400}}
          >
          <Input value={this.state.inputValue} id={this.state.status}
            onChange={this.updateInputValue} />
        </Form.Item>
        <a onClick={this.checkUserNameAvailability} style={{ padding: 0, marginTop: -20 }}>Check Availability</a>
        <br />
        <Button type="primary" style={{ marginTop: 10 }} onClick={this.submitUsername}
          disabled={!this.state.userNameAvailable}>
          Submit
        </Button>
      </div>
    );
  }
}

export default School;
