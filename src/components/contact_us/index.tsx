import React from 'react';
import { Button, Container, Grid, Icon, Input, TextArea } from 'semantic-ui-react';
import styles from './index.module.scss';

const ContactForm = () => {
    return (
        <Grid>
            <Grid.Row>
                <Grid.Column width="8">
                    <Input fluid placeholder="Name" />
                </Grid.Column>
                <Grid.Column width="8">
                    <Input fluid placeholder="Email" />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column width="16">
                    <Input fluid placeholder="Subject" />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column width="16">
                    <TextArea style={{ width: '100%' }}></TextArea>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column width="16">
                    <Button content="SEND MESSAGE" fluid />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
};

const ContactUs = () => {
    return (
        <Container fluid className={styles.container}>
            <Grid padded>
                <Grid.Row>
                    <Grid.Column width="8">
                        <h1 style={{ color: 'white' }}>GET IN TOUCH WITH US</h1>

                        <ContactForm />
                    </Grid.Column>
                    <Grid.Column width="8">
                        <h1 style={{ color: 'white' }}>COME VISIT US</h1>
                        <p style={{ color: 'white' }}>
                            We invite you to any of our 5 offices for a chat. Feel free to come, we have great coffee
                            and comfy sofas. Looking forward to have you here.
                        </p>
                        <p style={{ color: 'white' }}>
                            <Icon name="home" />
                            Adress: 1600 Pennsylvania Ave NW, Washington, D.C.
                        </p>
                        <p style={{ color: 'white' }}>
                            <Icon name="phone" />
                            Support Phone: 01865 339665
                        </p>
                        <p style={{ color: 'white' }}>
                            <Icon name="mail" />
                            Emails: info@example.com
                        </p>
                        <p style={{ color: 'white' }}>
                            <Icon name="clock" />
                            Working Hours: 09:30-21:00 except on Sundays
                        </p>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    );
};

export default ContactUs;
