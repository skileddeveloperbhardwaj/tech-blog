import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function DSCarouselGrid(props) {
    return (
        <>
            <Carousel variant="dark" indicators="true" pause="hover">
                <Carousel.Item>
                    <Container style={{marginLeft:'7.6%', marginBottom:'2%'}}>
                        <Row>
                            <Col xs>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Body>
                                        <Card.Title>Basic Data Structures</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                        <Card.Text>
                                            Some basic knowledge on arrays, stacks, queues and linked lists.
                                        </Card.Text>
                                        <Card.Link href="#">Explanation</Card.Link>
                                        <Card.Link href="#">Code</Card.Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xs={{ order: 12 }}>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Body>
                                        <Card.Title>Trees</Card.Title>
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
                                        <Card.Title>Graphs</Card.Title>
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
                    <Container style={{marginLeft:'7.5%', marginBottom:'2%'}}>
                        <Row>
                            <Col xs>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Body>
                                        <Card.Title>Trie</Card.Title>
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
                                        <Card.Title>Heaps</Card.Title>
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
                                        <Card.Title>Advanced Data Structures</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                        <Card.Text>
                                            Some basic knowledge on B-Tress, AVL Trees etc.
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

export default DSCarouselGrid;