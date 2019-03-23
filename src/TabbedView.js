import React from 'react'
import { Tabs } from 'antd';
import StoryCard from "./StoryCard";
import CompoundButton from "./CompoundButton"

class TabbedView extends React.Component {
    constructor(props) {
        super(props);
    }
    handleSubmission() {
        this.props.invokeModal();
    }
    render() {
        const TabPane = Tabs.TabPane;
        const operations = <CompoundButton handleSubmission={this.handleSubmission.bind(this)} auth={this.props.auth}/>;
        function callback(key) {
            console.log(key);
        }
        var rows = [];
        for (var i = 0; i < 50; i++) {
            rows.push(<StoryCard key={i} />);
        }
        return (
            <Tabs defaultActiveKey="2" onChange={callback} tabBarExtraContent={operations} size="large" className="tabStyle">
                <TabPane tab="Newest" key="2">{rows}</TabPane> 
                <TabPane tab="Ask" key="3">{rows}</TabPane>
                <TabPane tab="Show" key="4">{rows}</TabPane>
                <TabPane tab="Evergreen" key="5">{rows}</TabPane>
            </Tabs>)
    }
}

export default TabbedView;