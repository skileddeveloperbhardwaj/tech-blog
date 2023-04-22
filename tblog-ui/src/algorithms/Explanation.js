import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import { dijkstra as algo } from "../constants/dijikstra";

class Explanation extends React.Component {
    constructor(props) {
        super(props);
        this.title = props.title;
        this.desc = props.desc;
        this.testcases = props.testcases;
        var url_string = window.location.href;
        var url = new URL(url_string);
        this.fileName = url.searchParams("fileName");
        console.log(this.fileName);
    }

    render() {
        // var fs = require("fs");
        return (
            <>
                return (
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>{this.title}</Accordion.Header>
                        <Accordion.Body>
                            {this.desc}
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Testcases</Accordion.Header>
                        <Accordion.Body>
                            {this.testcases}
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                );
            </>
        );
    }
}

export default Explanation;