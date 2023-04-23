import React from "react";
import Accordion from 'react-bootstrap/Accordion';

class HowToEnjoyLifeJobView extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header><strong>Part One: Seven Ways To Peace And Happiness</strong></Accordion.Header>
                    <Accordion.Body>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header><strong>#1 Find Yourself and Be Yourself: Remember, There Is No One Else on Earth Like You</strong></Accordion.Header>
                                <Accordion.Body>
                                    <ol>When we are negative about ourselves, we tends to develop below traits:</ol>
                                    <li>asocial</li>
                                    <li>nervous</li>
                                    <li>irritable</li>
                                    <li>lack of confidence</li>
                                    <li>started thinking about ourselves as failure</li>
                                    <li>try to fit in where we donot belong</li>
                                    <br></br>
                                    To cultivate a mental attitude that will bring us peace and freedom, remember.....<br></br><br></br>
                                    <strong style={{color:'red', marginLeft:'13.5%'}}> Let's not imitate others.</strong><br></br>
                                    <strong style={{color:'red', marginLeft:'10%'}}> Let's find ourselves and be ourselves.</strong><br></br>
                                    Short Video on <a href="https://www.youtube.com/watch?v=0OIZMGEQ298" target="_blank">How to find yourself?</a>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header><strong>#2 Four Good Working Habits That Will Help Prevent Fatigue and Worry</strong></Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Accordion Item #2</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        );
    }
}

export default HowToEnjoyLifeJobView;