import React from 'react';
import { Button, Grid, Input, TextArea } from 'semantic-ui-react';

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
                    <TextArea placeholder="Write your message here..." style={{ width: '100%' }}></TextArea>
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

export default ContactForm;
