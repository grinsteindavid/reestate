import React from 'react';
import Container from 'components/container';
import { Grid, Icon } from 'semantic-ui-react';
import ContactForm from './form';

const ContactUs = () => {
    return (
        <Container
            fluid
            backgroundColor="rgb(136, 138, 175)"
            gradientBackground="linear-gradient(0deg, rgba(136, 138, 175, 1) 0%, rgba(118, 112, 131, 1) 100%)"
        >
            <Grid stackable padded>
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
