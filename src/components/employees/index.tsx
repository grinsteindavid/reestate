import React from 'react';
import { Container, Row, Col, Card, ListGroup, ListGroupItem, Jumbotron } from 'react-bootstrap';

const Employees = () => {
    return (
        <Jumbotron>
            <Container>
                <Row>
                    <Col>
                        <h2 style={{ color: 'grey' }}>Our hand picked agents are to guide & help you</h2>
                        <h1 style={{ color: 'black' }}>PROFESSIONAL GUIDANCE FROM TOP AGENTS</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img
                                variant="top"
                                src="http://event-theme.com/themes/reEstate/realeastate/assets/img/preview/team/team-270x270x1.jpg"
                            />
                            <Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroupItem>Cras justo odio</ListGroupItem>
                                    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                                    <ListGroupItem>Vestibulum at eros</ListGroupItem>
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img
                                variant="top"
                                src="http://event-theme.com/themes/reEstate/realeastate/assets/img/preview/team/team-270x270x1.jpg"
                            />
                            <Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroupItem>Cras justo odio</ListGroupItem>
                                    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                                    <ListGroupItem>Vestibulum at eros</ListGroupItem>
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img
                                variant="top"
                                src="http://event-theme.com/themes/reEstate/realeastate/assets/img/preview/team/team-270x270x1.jpg"
                            />
                            <Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroupItem>Cras justo odio</ListGroupItem>
                                    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                                    <ListGroupItem>Vestibulum at eros</ListGroupItem>
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
};

export default Employees;
