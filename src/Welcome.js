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
            <h1>
                {this.state.mission}
            </h1>
            <div>
                <Button onClick={login}  type="primary" style={{width: 140, backgroundColor: "red", borderColor: "red", color: "white"}}>JOIN</Button>
                <Button onClick={login} style={{marginLeft: 10, width: 100, borderColor: "red", borderWidth: 2}}>SIGN IN</Button>
            </div>
        </div>);
    }
}

export default Welcome;