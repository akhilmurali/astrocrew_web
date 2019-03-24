import React from "react";
import { Icon, Button, Comment, Avatar } from "antd";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import TextArea from "antd/lib/input/TextArea";

class StoryFullView extends React.Component {
    render() {
        //Remove this once wired with backend database:
        var nested =
            [{ id: 1, msg: "Comment content1", comments: [{ id: 21, msg: "nested 1 c 1", parentId: 1, comments: [{id: 1, msg: "Sub Sub commenr", parentId: 21}] }, { id: 31, msg: "nested 1 c 2", parentId: 1 }] },
            { id: 2, msg: "Comment content 2", comments: [{ id: 23, msg: "nested 2 c 1", parentId: 2 }, { id: 45, msg: "nested 2 c 2", parentId: 2 }] },
            { id: 3, msg: "Comment Content 3", comments: [{ id: 8, msg: "nested 3 c 1", parentId: 3 }, { id: 11, msg: "nested 3 c 2", parentId: 3 }] },
            { id: 4, msg: "Comment Content 4", comments: [{ id: 9, msg: "nested 4 c 1", parentId: 4 }, { id: 10, msg: "nested 4 c 2", parentId: 4 }] }];
        function UnitComment({ comment }) {
            const nestedComments = (comment.comments || []).map(comment => {
                return <UnitComment comment={comment} />;
            });
            return (<Comment
                actions={[<span>Reply to</span>]}
                author={<a>Han Solo</a>}
                avatar={(
                  <Avatar
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                    alt="Han Solo"
                  />
                )}
                content={comment.msg}
              >
                {nestedComments}
              </Comment>
                )
            }
    
        return (<div>
                    <div id="goBackBtn">
                        <Icon type="left-circle" style={{ fontSize: 20 }}></Icon>
                        <p style={{ display: "inline-block", marginLeft: 5, marginBottom: 0 }}>Go Back</p>
                    </div>

                    <div id="mainContent" className="container" style={{ marginTop: 30 }}>
                        <div className="row">
                            <div className="col-1">
                                <Icon type="up-circle" theme="filled" style={{ fontSize: 64, color: "#361450" }}></Icon>
                                <p style={{ marginTop: 5 }}>238 Ups</p>
                                <div style={{ marginTop: 15 }}>
                                    <Icon style={{ display: "inline" }} type="twitter"></Icon>
                                    <Icon style={{ display: "inline", marginLeft: 5 }} type="link"></Icon>
                                    <Icon style={{ display: "inline", marginLeft: 5, color: "#ED4255" }} type="down-square" theme="filled"></Icon>
                                </div>
                            </div>
                            <div className="col">
                                <p style={{ fontSize: 12 }}>oscarwilde</p>
                                <h4 style={{ marginTop: -15 }}>Eque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..</h4>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                    The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                                    Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.
                    </p>
                                <h6>Link <a href="https://lipsum.com/">https://lipsum.com/</a></h6>
                                <h6>Alternate Link <a href="https://lipsum.com/">https://lipsum.com/</a></h6>
                                <TextArea style={{ height: 200 }}></TextArea>
                                <Button type="primary" style={{
                                    marginTop: 10, borderRadius: 0, width: 150,
                                    backgroundColor: "#361450", borderColor: "#361450", float: "right", marginBottom: 40
                                }}>Add Comment</Button>
                                {nested.map(comment =>{
                                    return <UnitComment comment={comment} />
                                })}
                                
                            </div>
                        </div>
                        {/* This is where the main section ends: */}
                        {/* Comments' list section will be linked below: */}

                    </div>
                </div>);
            }
        }
        
export default StoryFullView;