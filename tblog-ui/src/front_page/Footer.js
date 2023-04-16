import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <Navbar bg="light" variant="secondary">
                    <Container style={{ marginLeft: '30%' }}>
                        <Nav className="me-auto">
                            <Navbar.Text>
                                Copyright © 2023 T-Blog {' '}&nbsp;&nbsp;
                            </Navbar.Text>
                            <Navbar.Text>
                                {"  "}
                            </Navbar.Text>
                            <Nav.Link href="#home">{' '}Help Center</Nav.Link>
                            <Navbar.Text>
                                |&nbsp;
                            </Navbar.Text>
                            <Nav.Link href="#features">{' '}Jobs</Nav.Link>
                            <Navbar.Text>
                                |
                            </Navbar.Text>
                            <Nav.Link href="#pricing">{' '}Terms</Nav.Link>
                            <Navbar.Text>
                                |
                            </Navbar.Text>
                            <Nav.Link href="#pricing">{' '}Privacy Policy</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </>)
    }
}

export default Footer;