import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function TopicsGuide(props) {
    return (
        <Container>
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
    );
}

export default TopicsGuide;