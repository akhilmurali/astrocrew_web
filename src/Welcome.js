import React, { Component } from "react";
import { Button } from 'antd';

class Welcome extends Component {

    constructor(props){
        super(props);
    }
    state = { mission: "We are an open Community on a mission to make humans, \n an interplanetary species."};
    render() {
        const {login} = this.props.auth;
        return (<div style={{marginTop: 100, marginLeft: 50}}>
            <h2 className="welcome-header">
            We are an open Community on a mission<br></br> to make humans, an interplanetary species.
            </h2>
            <div style={{marginTop: 30}}>
                <Button onClick={login}  type="primary" style={{width: 180, fontFamily: 'Rubik', backgroundColor: "#361450", borderColor: "#361450", color: "white"}}>JOIN</Button>
                <Button onClick={login} style={{marginLeft: 10, width: 140, fontFamily: 'Rubik',borderColor: "#361450", borderWidth: 2}}>SIGN IN</Button>
            </div>
        </div>);
    }
}

export default Welcome;