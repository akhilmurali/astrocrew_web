import React, { Component } from "react";
import { Button } from "antd";
class StoryCard extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        const postData = this.props.postData;
        return (<div>
            <div style={{ display: "inline-block", margin: 0 }}>
                <p style={{ display: "inline-block", margin:0  }}><b>{postData.tag}</b></p><p style={{ marginLeft: 5, marginBottom: 0, display: "inline-block" }}>Mars mission by SpaceX successfully launched.</p>
                <div style={{display: "inline-block", position: "absolute", right: "0"}}>
                    <Button icon="up" >{postData.upvotes}</Button>
                    <Button icon="file" style={{marginLeft: 5}}>{postData.commentCount}</Button>
                </div>
                <p>by + {postData.submitted_by} * 10 hrs ago</p>
            </div>
        </div>)
    }
}

export default StoryCard;