import React from 'react'
import { Tabs, Button } from 'antd';
import StoryCard from "./StoryCard";
import CompoundButton from "./CompoundButton";
import axios from "axios";

class TabbedView extends React.Component {
    state = {rows: [], skip: 0, currentTab: 2};
    constructor(props) {
        super(props);
    }
    handleSubmission() {
        this.props.invokeModal();
    }

    componentDidMount() {
        axios.post("https://stark-stream-61438.herokuapp.com/posts/", {}).then((res) => {
            let posts = res.data.posts;
            this.setState({rows: posts});
            const list = this.state.rows.map((post)=>{
                return <StoryCard postData={post} key={post._id}/>
            });
            this.setState({result: list, skip: this.state.skip+5});
        }).catch((err) => {
            //err response:
        });
    }

    loadMore(){
        console.log("Load more invoked");
        axios.post("https://stark-stream-61438.herokuapp.com/posts/", {"skip": this.state.skip}).then((res) => {
            let posts = res.data.posts;
            console.log(posts);
            const list = posts.map((post)=>{
                return <StoryCard postData={post} key={post._id}/>
            });
            console.log("list", list);
            this.setState((prevState)=>{
                return {
                    skip: prevState.skip + 5,
                    result: prevState.result.concat(list)
                }
            });
            console.log("state", this.state.result);
        }).catch((err) => {
            //err response:
        });
    }
    render() {
        const TabPane = Tabs.TabPane;
        const operations = <CompoundButton handleSubmission={this.handleSubmission.bind(this)} auth={this.props.auth} />;
        function callback(key) {
            console.log(key);
            this.setState({currentTab: key});
        }
        return (
            <div>
                <Tabs defaultActiveKey="2" onChange={callback.bind(this)} tabBarExtraContent={operations} size="large" className="tabStyle">
                    <TabPane tab="Newest" key="2">{this.state.result}</TabPane>
                    <TabPane tab="Ask" key="3">{this.state.result}</TabPane>
                    <TabPane tab="Show" key="4">{this.state.result}</TabPane>
                    <TabPane tab="Evergreen" key="5">{this.state.result}</TabPane>
                </Tabs>
                <Button onClick={this.loadMore.bind(this)} style={{borderRadius: 0, display: "block", margin: "auto", color: "#ffffff", backgroundColor: "#361450", fontFamily: "Rubik", letterSpacing: 1}}>Load More Stories</Button>
            </div>
            )
    }
}

export default TabbedView;