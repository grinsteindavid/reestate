import React from 'react';
import { Button, Container, Grid, Input } from 'semantic-ui-react';
import styles from './index.module.scss';

const InputActionButton = () => {
    return <Button size="large" content="SUBSCRIBE" color="black" />;
};

const Subscribe = () => {
    return (
        <>
            <Container fluid textAlign="center" className={styles.container}>
                <Grid padded>
                    <Grid.Row>
                        <Grid.Column>
                            <h3 style={{ color: 'grey', marginBottom: 0, fontWeight: 'lighter' }}>
                                Get the best prices right in your email
                            </h3>
                            <h1 style={{ color: 'black', fontWeight: 'bolder', marginTop: 5 }}>
                                10% OFF IF YOU SUBSCRIBE NOW
                            </h1>
                            <p style={{ color: 'grey' }}>
                                This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
                                Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
                                sem nibh id elit.
                            </p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <Input
                                fluid
                                action={InputActionButton}
                                placeholder="Enter your email here"
                                style={{ border: '1px solid black' }}
                            />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </>
    );
};

export default Subscribe;
