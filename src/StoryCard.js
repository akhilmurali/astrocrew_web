import React, { Component } from "react";
import { Button } from "antd";
class StoryCard extends React.Component {
    render() {
        return (<div>
            <div style={{ display: "inline-block", margin: 0 }}>
                <p style={{ display: "inline-block", margin:0  }}><b>Show Crew</b></p><p style={{ marginLeft: 5, marginBottom: 0, display: "inline-block" }}>Mars mission by SpaceX successfully launched.</p>
                <div style={{display: "inline-block", position: "absolute", right: "0"}}>
                    <Button icon="up" >278</Button>
                    <Button icon="file" style={{marginLeft: 5}}>998</Button>
                </div>
                <p>by akhilmurali * 10 hrs ago</p>
            </div>
        </div>)
    }
}

export default StoryCard;