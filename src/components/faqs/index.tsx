import React from 'react';
import { Jumbotron, Container, Row, Col, Accordion, Card } from 'react-bootstrap';

const Faqs = () => {
    return (
        <Jumbotron>
            <Container>
                <Row>
                    <Col>
                        <h2 style={{ color: 'grey' }}>The most frequent asked questions</h2>
                        <h1 style={{ color: 'black' }}>FAQS</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Accordion defaultActiveKey="">
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="0">
                                    What are the other charges I will have to pay?
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                        Duis bibendum diam non erat facilaisis tincidunt. Fusce leo neque, lacinia at
                                        tempor vitae, porta at arcu. Vestibulum varius non dui at pulvinar. Ut egestas
                                        orci in quam sollicitudin aliquet.
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </Col>
                    <Col>
                        <Accordion defaultActiveKey="">
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="0">
                                    Where can I contact your agent?
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                        Duis bibendum diam non erat facilaisis tincidunt. Fusce leo neque, lacinia at
                                        tempor vitae, porta at arcu. Vestibulum varius non dui at pulvinar. Ut egestas
                                        orci in quam sollicitudin aliquet.
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
};

export default Faqs;
