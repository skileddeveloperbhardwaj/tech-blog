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
                                    <strong style={{ color: 'red', marginLeft: '13.5%' }}> Let's not imitate others.</strong><br></br>
                                    <strong style={{ color: 'red', marginLeft: '10%' }}> Let's find ourselves and be ourselves.</strong><br></br>
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
                            <Accordion.Item eventKey="2">
                                <Accordion.Header><strong>#3 What Makes You Tired-and What You Can Do About it</strong></Accordion.Header>
                                <Accordion.Body>
                                    <ul>
                                        <li>Most of our fatigue derives from our mental and emotional attitudes
                                        </li>
                                        <li>What kinds of emotional factors tire the sedentary worker?
                                            <ol>
                                                <li> Boredom</li>
                                                <li>Resentment</li>
                                                <li>Feeling of not being appreciated</li>
                                                <li>Feeling of futility</li>
                                                <li>Hurry</li>
                                                <li>Anxiety</li>
                                                <li>Worry</li>
                                            </ol>
                                        </li>
                                        <li>A tense muscle is a working muscle. Ease up! Save energy for important duties</li>
                                        <li>Four suggestions that will help you learn to relax
                                            <ol>
                                                <li>Relax in odd moments</li>
                                                <li>Work, as much as possible, in a comfortable position</li>
                                                <li>Check yourself 4-5 times a day</li>
                                                <li>Test yourself again at the end</li>
                                            </ol>
                                        </li>
                                    </ul><br></br>
                                    <strong style={{ color: 'red', marginLeft: '13.5%' }}> Let Go...Let Go...Relax!</strong>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header><strong>#4 How to Banish the Boredom That Produces Fatigue, Worry, and Resentment</strong></Accordion.Header>
                                <Accordion.Body>
                                    <ul>
                                        <li>One of the chief causes of fatigue is boredom</li>
                                        <li>Tests showed that the blood pressure of the body and the consumption of oxygen decreases when people are bored</li>
                                        <li></li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header><strong>#5 Would You Take a Million Dollars for What You Have?</strong></Accordion.Header>
                                <Accordion.Body>
                                    <ul>
                                        <li><strong>Think and Thank: </strong>Think of all we have to be grateful for, and thank God for all our boons and bounties.</li>
                                        <li>We seldom think of what we have but always of what we lack</li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        );
    }
}

export default HowToEnjoyLifeJobView;