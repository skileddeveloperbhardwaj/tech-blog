import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';

function AlgoCarouselGrid(props) {
    return (
        <>
            <Carousel variant="dark" indicators="true" pause="hover">
                <Carousel.Item>
                    <Container style={{ marginLeft: '7.6%', marginBottom: '2%' }}>
                        <Row>
                            <Col xs>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Body>
                                        <Card.Title>Dijskta Algorithm</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                        <Nav defaultActiveKey="/home">
                                            <Nav.Item>
                                                <Nav.Link to="/tech-blog/algorithms/dijkstra/" as={Link} href="/home">Explanation</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link to="/tech-blog/algorithms/dijkstra/" as={Link} href="/home">Code</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xs={{ order: 12 }}>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Body>
                                        <Card.Title>DNF Algorithm</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                        <Nav defaultActiveKey="/home">
                                            <Nav.Item>
                                                <Nav.Link to="/tech-blog/algorithms/dnf/" as={Link} href="/home">Explanation</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link to="/tech-blog/algorithms/dnf/" as={Link} href="/home">Code</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xs={{ order: 1 }}>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Body>
                                        <Card.Title>KNP Algorithm</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                        <Card.Link href="#">Explanation</Card.Link>
                                        <Card.Link href="#">Code</Card.Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </Carousel.Item>
                <Carousel.Item>
                    <Container style={{ marginLeft: '7.5%', marginBottom: '2%' }}>
                        <Row>
                            <Col xs>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Body>
                                        <Card.Title>Dijskta Algorithm</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                        <Card.Link href="#">Explanation</Card.Link>
                                        <Card.Link href="#">Code</Card.Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xs={{ order: 12 }}>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Body>
                                        <Card.Title>DNF Algorithm</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                        <Card.Link href="#">Explanation</Card.Link>
                                        <Card.Link href="#">Code</Card.Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xs={{ order: 1 }}>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Body>
                                        <Card.Title>KNP Algorithm</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                        <Card.Link href="#">Explanation</Card.Link>
                                        <Card.Link href="#">Code</Card.Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </Carousel.Item>
            </Carousel>
        </>
    );
}

export default AlgoCarouselGrid;