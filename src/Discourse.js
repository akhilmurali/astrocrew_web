import React, { Component } from "react";
import Footer from './Footer';
import Welcome from './Welcome';
import TabbedView from './TabbedView';
import SubmitStoryModal from './SubmitStoryModal';
import {Button} from 'antd';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Discourse extends Component {
  invokeModal(){
    this.refs.child.showModal();
  }
  render() {
    const { isAuthenticated, login, logout } = this.props.auth;   
    return (<div className="container">
      {!isAuthenticated() ? (
        <Welcome auth={this.props.auth} />
      ) : false}
      {/* <p>
        <button onClick={isAuthenticated() ? logout : login} style={{ marginTop: 10 }}>
          {isAuthenticated() ? "Log Out" : "Log In"}
        </button>
      </p> */}
      <div className="container" style={{marginTop: 150}}>
        <TabbedView invokeModal={this.invokeModal.bind(this)} auth={this.props.auth}></TabbedView>
        <SubmitStoryModal ref="child"></SubmitStoryModal> 
        <Button style={{borderRadius: 0, display: "block", margin: "auto", color: "#ffffff", backgroundColor: "#361450", fontFamily: "Rubik", letterSpacing: 1}}>Load More Stories</Button>
        <Footer></Footer>
      </div>
    </div>
    );
  }
}

export default Discourse;
