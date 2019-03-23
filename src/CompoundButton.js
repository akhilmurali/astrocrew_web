import React from "react";
import { Button, Spin } from "antd";

class CompoundButton extends React.Component {
    constructor(props) {
        super(props);
    }
    submitStory = () => {
        this.props.handleSubmission();
    }
    render() {
        const {isAuthenticated} = this.props.auth;
        console.log(isAuthenticated);
        return (<div>
            <Button shape="circle" icon="search" style={{ display: "inline-block", border: 0 }} />
            {isAuthenticated() ? (<Button onClick={this.submitStory} style={{
                display: "inline-block",
                backgroundColor: "#361450", color: "#ffffff"
            }}>Submit Story</Button>):false}
        </div>);
    }
}

export default CompoundButton;
