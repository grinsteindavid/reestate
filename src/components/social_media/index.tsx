import Container from 'components/container';
import React from 'react';
import { Button, Grid, Icon } from 'semantic-ui-react';

const SocialMedia = () => {
    return (
        <Container fluid>
            <Grid stackable columns="equal" textAlign="center">
                <Grid.Row>
                    <Grid.Column>
                        <Button
                            fluid
                            content="FACEBOOK"
                            size="large"
                            color="facebook"
                            icon={<Icon name="facebook" />}
                        />
                    </Grid.Column>
                    <Grid.Column>
                        <Button fluid content="TWITTER" size="large" color="twitter" icon={<Icon name="twitter" />} />
                    </Grid.Column>
                    <Grid.Column>
                        <Button
                            fluid
                            content="PINTEREST"
                            size="large"
                            color="youtube"
                            icon={<Icon name="pinterest" />}
                        />
                    </Grid.Column>
                    <Grid.Column>
                        <Button fluid content="GOOGLE" size="large" color="google plus" icon={<Icon name="google" />} />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <h2 style={{ color: 'lightGrey' }}>
                            © 2015 ReEstate — Real Estate Theme made with passion by jThemes Studio
                        </h2>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    );
};

export default SocialMedia;
