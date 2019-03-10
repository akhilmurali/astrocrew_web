import React, { Component } from "react";
import { Input, Form } from "antd";
import "antd/dist/antd.css";
import {Button} from "antd";
import { from } from "rxjs";

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
      <div style={{maxWidth:800, marginLeft: 100}} >
       <h1>Just a Few more things, mate.</h1>
  <Form.Item
    validateStatus={this.state.status}
    hasFeedback
    style={{ maxWidth: 400 }}
    label="Create a unique username"
  >
    <Input value={this.state.inputValue} id={this.state.status}
      onChange={this.updateInputValue} />
  </Form.Item>
  <a onClick={this.checkUserNameAvailability} style={{ padding: 0, marginTop: -20 }}>Check Availability</a>
  <br />
  <h3 style={{ marginTop: 20 }}><b>optional</b></h3>
  <h2>Become a verified user <i class="far fa-check-circle"></i><br></br>
    and upgrade your posting permissions</h2>
  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
    It has survived not only five centuries, but also the leap into electronic typesetting,
  remaining essentially unchanged.</p>
  <p>It has survived not only five centuries, but also the leap into electronic typesetting,
  remaining essentially unchanged.</p>
  <Form.Item
    validateStatus={this.state.status}
    hasFeedback
    style={{ maxWidth: 400 }}
    label="Enter Verified username"
  >
    <Input value={this.state.inputValue} id={this.state.status}
      onChange={this.updateInputValue} />
  </Form.Item>
  <Form.Item
    validateStatus={this.state.status}
    hasFeedback
    style={{ maxWidth: 400 }}
    label="Enter Your social account link"
  >
    <Input value={this.state.inputValue} id={this.state.status}
      onChange={this.updateInputValue} />
  </Form.Item>
  <Form.Item
    validateStatus={this.state.status}
    hasFeedback
    style={{ maxWidth: 400 }}
    label="Write a personalized note"
  >
    <Input value={this.state.inputValue} id={this.state.status}
      onChange={this.updateInputValue} />
  </Form.Item>
  <Button type="primary" style={{ marginTop: 10, float: "right", width: 200, marginBottom: 40 }} onClick={this.submitUsername}
    disabled={!this.state.userNameAvailable}>
    Submit
</Button>
      </div>
    );
  }
}

export default School;
