import Container from 'components/container';
import React from 'react';
import { Button, Grid, Image } from 'semantic-ui-react';
import Slider from 'react-slick';
import { range } from 'lodash';

const WhoAreWe = () => {
    return (
        <Container
            fluid
            textAlign="center"
            backgroundColor="rgb(55, 55, 55)"
            gradientBackground="radial-gradient(circle, rgba(55, 55, 55, 1) 0%, rgba(14, 14, 14, 1) 100%)"
        >
            <Grid stackable>
                <Grid.Row>
                    <Grid.Column width="8">
                        <h3 style={{ color: 'lightGrey', fontWeight: 'lighter' }}>
                            Introductory words about ourselves
                        </h3>
                        <h1 style={{ color: 'white' }}>WHO ARE WE?</h1>
                        <p style={{ color: 'white', textAlign: 'left' }}>
                            This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
                            Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem
                            nibh id elit. Duis sed odio sit amet nibh vulputate cursus.
                        </p>
                        <ol style={{ color: 'white', textAlign: 'left' }}>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                            <li>Proin tempus sapien non iaculis pretium.</li>
                        </ol>
                        <div style={{ textAlign: 'left' }}>
                            <Button color="blue" size="large">
                                Read more about us
                            </Button>
                        </div>
                    </Grid.Column>
                    <Grid.Column width="8">
                        <Slider>
                            {range(0, 10).map((number) => {
                                return (
                                    <Image
                                        key={number}
                                        src="http://event-theme.com/themes/reEstate/realeastate/assets/img/preview/slider/slide-775x500x1.jpg"
                                    />
                                );
                            })}
                        </Slider>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    );
};

export default WhoAreWe;
