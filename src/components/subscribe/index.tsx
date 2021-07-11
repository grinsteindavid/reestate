import React from 'react';
import { Jumbotron, Container, Row, Col, Form, Button } from 'react-bootstrap';

const Subscribe = () => {
    return (
        <Jumbotron>
            <Container>
                <Row>
                    <Col>
                        <h2 style={{ color: 'grey' }}>Get the best prices right in your email</h2>
                        <h1 style={{ color: 'black' }}>10% OFF IF YOU SUBSCRIBE NOW</h1>
                        <p style={{ color: 'grey' }}>
                            This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
                            Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem
                            nibh id elit.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form>
                            <Form.Control type="text" />
                            <Button>Subscribe</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
};

export default Subscribe;
