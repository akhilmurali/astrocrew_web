import React, { Component } from 'react'
import { Tabs, Button } from 'antd';
import StoryCard from "./StoryCard";
import CompoundButton from "./CompoundButton"

class TabbedView extends React.Component {
    constructor(props) {
        super(props);
    }
    handleSubmission(){
        console.log("Tabbed view component invoked");
        this.props.invokeModal();
    }
    render() {
        const TabPane = Tabs.TabPane;
        const operations = <CompoundButton handleSubmission={this.handleSubmission.bind(this)} />;
        function callback(key) {
            console.log(key);
        }
        return (
            <Tabs defaultActiveKey="1" onChange={callback} tabBarExtraContent={operations}>
                <TabPane tab="Newest" key="2">Content of Tab Pane 2</TabPane>
                <TabPane tab="Ask" key="3">Content of Tab Pane 3</TabPane>
                <TabPane tab="Show" key="4">Content of Tab Pane 1</TabPane>
                <TabPane tab="Drafts" key="5">Content of Tab Pane 2</TabPane>
                <TabPane tab="Evergreen" key="6">Content of Tab Pane 3</TabPane>
            </Tabs>)
    }
}

export default TabbedView;