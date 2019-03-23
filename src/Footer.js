import React from "react";
import { Popover, Button } from 'antd';

const metacontent = (
    <div>
        <a href="#" style={{textTransform: "uppercase", padding: 15, color: "#1e1e1e", fontFamily: 'Rubik', letterSpacing:2}}>About</a>
        <a href="#" style={{textTransform: "uppercase", padding: 15, color: "#1e1e1e", fontFamily: 'Rubik', letterSpacing:2}}>Guidelines</a>
        <a href="#" style={{textTransform: "uppercase", padding: 15, color: "#1e1e1e", fontFamily: 'Rubik', letterSpacing:2}}>FAQs</a>
        <a href="#" style={{textTransform: "uppercase", padding: 15, color: "#1e1e1e", fontFamily: 'Rubik', letterSpacing:2}}>back to top</a>
        <a href="#" style={{textTransform: "uppercase", padding: 15, color: "#1e1e1e", fontFamily: 'Rubik', letterSpacing:2}}>Legal</a>
        <a href="#" style={{textTransform: "uppercase", padding: 15, color: "#1e1e1e", fontFamily: 'Rubik', letterSpacing:2}}>Security</a>
    </div>
);

const content = (
    <div style={{textTransform: "uppercase"}}>
        <p><a>Discourse</a></p>
        <p><a>people</a></p>
        <p><a>Projects</a></p>
        <p><a>Startups</a></p>
        <p><a>Astro School</a></p>
        <p><a>Events</a></p>
    </div>
);

class Footer extends React.Component {
    render() {
        return (
            <div  style={{marginTop: 100}}>
                <div style={{ textAlign: "center" }}>
                    <div>
                        <Popover content={content} style={{borderColor: "#1e1e1e"}}>
                            <Button type="primary" style={{backgroundColor: "#361450", borderColor: "#361450", borderRadius: 0, width: 100, marginBottom: 20}}>Menu</Button>
                        </Popover>
                    </div>
                    <div className="metaLinks">
                        {metacontent}
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;