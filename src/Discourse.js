import React, { Component } from "react";
import { Link } from "react-router-dom";
import Footer from './Footer';
import Welcome from './Welcome';
import TabbedView from './TabbedView';
import SubmitStoryModal from './SubmitStoryModal';

class Commune extends Component {
  invokeModal(){
    this.refs.child.showModal();
  }
  render() {
    const { isAuthenticated, login, logout } = this.props.auth;   
    return (<div >
      {!isAuthenticated() ? (
        <Welcome auth={this.props.auth} />
      ) : false}
      <p>
        <button onClick={isAuthenticated() ? logout : login} style={{ marginTop: 10 }}>
          {isAuthenticated() ? "Log Out" : "Log In"}
        </button>
      </p>
      <div style={{maxWidth: 900, margin: "auto"}}>
        <TabbedView invokeModal={this.invokeModal.bind(this)}></TabbedView>
        <SubmitStoryModal ref="child"></SubmitStoryModal>
        <Footer></Footer>
      </div>
    </div>
    );
  }
}

export default Commune;
