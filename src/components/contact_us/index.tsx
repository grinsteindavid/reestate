import React from 'react';
import { Jumbotron, Container, Row, Col, Form, Button } from 'react-bootstrap';

const ContactUs = () => {
    return (
        <Jumbotron>
            <Container style={{ backgroundColor: 'grey' }}>
                <Row>
                    <Col>
                        <h1 style={{ color: 'white' }}>GET IN TOUCH WITH US</h1>

                        <Form>
                            <Form.Group as={Row} controlId="formHorizontalEmail">
                                <Form.Label column sm={2}>
                                    Email
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Control type="email" placeholder="Email" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formHorizontalPassword">
                                <Form.Label column sm={2}>
                                    Password
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Control type="password" placeholder="Password" />
                                </Col>
                            </Form.Group>
                            <fieldset>
                                <Form.Group as={Row}>
                                    <Form.Label as="legend" column sm={2}>
                                        Radios
                                    </Form.Label>
                                    <Col sm={10}>
                                        <Form.Check
                                            type="radio"
                                            label="first radio"
                                            name="formHorizontalRadios"
                                            id="formHorizontalRadios1"
                                        />
                                        <Form.Check
                                            type="radio"
                                            label="second radio"
                                            name="formHorizontalRadios"
                                            id="formHorizontalRadios2"
                                        />
                                        <Form.Check
                                            type="radio"
                                            label="third radio"
                                            name="formHorizontalRadios"
                                            id="formHorizontalRadios3"
                                        />
                                    </Col>
                                </Form.Group>
                            </fieldset>
                            <Form.Group as={Row} controlId="formHorizontalCheck">
                                <Col sm={{ span: 10, offset: 2 }}>
                                    <Form.Check label="Remember me" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row}>
                                <Col sm={{ span: 10, offset: 2 }}>
                                    <Button type="submit">Sign in</Button>
                                </Col>
                            </Form.Group>
                        </Form>
                    </Col>

                    <Col>
                        <h1 style={{ color: 'white' }}>COME VISIT US</h1>
                        <p style={{ color: 'white' }}>
                            We invite you to any of our 5 offices for a chat. Feel free to come, we have great coffee
                            and comfy sofas. Looking forward to have you here.
                        </p>
                        <p style={{ color: 'white' }}>Adress: 1600 Pennsylvania Ave NW, Washington, D.C.</p>
                        <p style={{ color: 'white' }}>Support Phone: 01865 339665</p>
                        <p style={{ color: 'white' }}>Emails: info@example.com</p>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
};

export default ContactUs;
