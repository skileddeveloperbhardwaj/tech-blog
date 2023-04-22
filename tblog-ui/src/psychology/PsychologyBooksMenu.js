import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import how_to_enjoy_life_job from '../img/how_to_enjoy_your_life_your_job.JPG'
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";

class PsychologyBooksMenu extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>#1 How To Enjoy Your Life And Your Job</Accordion.Header>
                    <Accordion.Body>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <Card style={{ width: '22rem', marginLeft: '2%' }}>
                                <Card.Img variant="top" src={how_to_enjoy_life_job} style={{ height: '400px' }} />
                                <Card.Body>
                                    <Card.Title>Description</Card.Title>
                                    <Card.Text>
                                        <strong>Author</strong>: Dale Carnegie
                                    </Card.Text>
                                    <Card.Text>
                                        <strong>Impacts</strong>: Life, Job
                                    </Card.Text>
                                    <Nav defaultActiveKey="/home" variant="pills">
                                        <Nav.Item>
                                            <Nav.Link to="/tech-blog/psychology/read/" as={Link} href="/home">Read</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Card.Body>
                            </Card>
                            &nbsp;&nbsp;&nbsp;
                            <Card style={{ width: '60rem' }}>
                                <Card.Body>
                                    <Card.Title>Summary</Card.Title>
                                    <Card.Text>
                                        Uncover your hidden assets—you can fill each day with excitement and a sense of satisfaction!

                                        Even if you love your work, you probably have days when almost nothing goes right. Bestselling author Dale Carnegie shows you how to make every day more exciting and rewarding—how you can get more done, and have more fun doing it. Dale Carnegie's time-tested advice will help you to:
                                        <br></br>
                                        <strong>-Make other people feel important—and do it sincerely</strong><br></br>
                                        <strong>-Avoid unnecessary tension—save your energy for important duties</strong><br></br>
                                        <strong>-Get people to say yes—immediately</strong><br></br>
                                        <strong>-Turn routine tasks into stimulating opportunities</strong><br></br>
                                        <strong>-Spot a sure-fire way of making enemies—and avoid it</strong><br></br>
                                        <strong>-Smile in the face of criticism—you've done your very best!</strong><br></br><br></br>

                                        How to Enjoy Your Life and Your Job will help you create a new approach to life and people and discover talents you never knew you had. Dale Carnegie can help you get the most out of yourself—all the time. Start developing your innate strengths and abilities—start enriching your life today!
                                        <br></br>
                                        <strong style={{ color: 'red', fontSize: '1.5rem' }}>"Count your blessings - not your troubles"</strong>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>#2 Think And Grow Rich</Accordion.Header>
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

export default PsychologyBooksMenu;