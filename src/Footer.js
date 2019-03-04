import React from "react";
import { Popover, Button } from 'antd';

const content = (
    <div>
        <p>Discourse</p>
        <p>people</p>
        <p>Projects</p>
        <p>Startups</p>
        <p>Astro School</p>
        <p>Events</p>
    </div>
);

class Footer extends React.Component {
    render() {
        return (
            <div style={{margin:"auto"}}>
                <div style={{ position: "absolute", bottom: 10, textAlign: "center" }}>
                    <div>
                        <Popover content={content}>
                            <Button type="primary">Menu</Button>
                        </Popover>
                    </div>
                    <div className="metaLinks" >
                        <ul>
                            <li style={{ margin: 5 }}>About</li>
                            <li style={{ margin: 5 }}>Guidelines</li>
                            <li style={{ margin: 5 }}>FAQs</li>
                            <li style={{ margin: 5 }}>Back To Top</li>
                            <li style={{ margin: 5 }}>Legal</li>
                            <li style={{ margin: 5 }}>Support</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;