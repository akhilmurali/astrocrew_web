import React, { Component } from "react";
import { Input } from "antd";
import { Button } from "antd";
import { Icon } from 'antd';
import "antd/dist/antd.css";
import {browserHistory} from 'react-router';

const Search = Input.Search;

class School extends Component {
  state = {
    message: "",
    userNameAvailable: false
  };

  addTokenAsHeader = () => {
    return {
      headers: { Authorization: `Bearer ${this.props.auth.getAccessToken()}`,
      id_token: `${this.props.auth.getIdToken()}` }
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

  checkUserNameAvailability = value => {
    this.setState({ username: value, userNameAvailable: false, status: "sync", workingWithBackend: true  });
    console.log(this.state);
    fetch(`/check/username?value=${value}`, this.addTokenAsHeader())
      .then((response) => {
       response.json().then((body)=>{
        if (body.available) {
          this.setState({ userNameAvailable: true, status: "check-circle", workingWithBackend: false  });
        } else {
          this.setState({ userNameAvailable: false, status: "close-circle", workingWithBackend: false });
        }
       });
      }).catch((error) => {
        console.log(error);
        this.setState({ userNameAvailable: false });
      });
  };

  submitUsername = () => {
    if (this.state.username && this.state.userNameAvailable) {
      //Commit the user to auth0 database:
      
      fetch(`/add/username?value=${this.state.username}`, this.addTokenAsHeader())
      .then((response) => {
       response.json().then((body)=>{
        console.log(body);
        if (body.status == 'OK') {
          // Do some respose eval and redirect the user if successful
          browserHistory.push("/");
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
        <Search
          placeholder="Enter a username"
          onSearch={this.checkUserNameAvailability}
          style={{ width: 200 }}
        /> <Icon style={{ marginLeft: 5 }} type={this.state.status}
          spin={this.state.workingWithBackend} theme="twoTone"
          twoToneColor={this.state.userNameAvailable ? "#00ff00" : "#ff0000"} />
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
