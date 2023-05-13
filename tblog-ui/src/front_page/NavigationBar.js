import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import App from '../App';
import PsychologyBooksMenu from '../psychology/PsychologyBooksMenu';
import PsychologyBookFinder from '../psychology/read/PsychologyBookFinder';
import DijkstraExplanation from '../algorithms/dijkstra/DijkstraExplanation';
import DNFExplanation from '../algorithms/dnf/DNFExplanation';
import ProblemList from '../problem/ProblemList';
import MaxVowelExplanation from '../algorithms/maxvowel/MaxVowelExplanation';

class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <Navbar bg="info" expand="lg">
          <Container fluid>
            <Navbar.Brand href="#">T-Blog</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link href="/tech-blog/">Home</Nav.Link>
                <Nav.Link href="/tech-blog/problem">Problems</Nav.Link>
                <Nav.Link href="#action2">Data Structures</Nav.Link>
                <Nav.Link href="#action2">Hot Topics</Nav.Link>
                <Nav.Link to="/tech-blog/psychology" as={Link}>Psychology</Nav.Link>
                <NavDropdown title="About" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Contact US</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Send Feedback
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Download Problem Lists
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Routes>
          <Route path='/tech-blog/' element={<App/>}/>
          <Route path="/tech-blog/algorithms/dijkstra/" element={<DijkstraExplanation/>}/>
          <Route path="/tech-blog/algorithms/dnf/" element={<DNFExplanation/>}/>
          <Route path="/tech-blog/psychology/" element={<PsychologyBooksMenu/>}/>
          <Route path="/tech-blog/problem/" element={<ProblemList/>}/>
          <Route path="/tech-blog/psychology/read/" element={<PsychologyBookFinder/>}/>
          <Route path="/tech-blog/algorithms/maxvowel/" element={<MaxVowelExplanation/>}/>
        </Routes>
      </Router>
    );
  }
}

export default NavigationBar;