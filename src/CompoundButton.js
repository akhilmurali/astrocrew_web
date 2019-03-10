import React from "react";
import { Button } from "antd";

class CompoundButton extends React.Component {
    constructor(props) {
        super(props);
    }
    submitStory = () => {
        //Initiate Showing the modal:
        this.props.handleSubmission();
    }
    render() {
        return (<div>
            <Button shape="circle" icon="search" style={{ display: "inline-block", border: 0 }} />
            <Button onClick={this.submitStory} style={{
                display: "inline-block",
                backgroundColor: "#361450", color: "#ffffff"
            }}>Submit Story</Button>
        </div>);
    }
}

export default CompoundButton;
