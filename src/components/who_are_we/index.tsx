import React from 'react';
import { Button, Container, Grid, Image } from 'semantic-ui-react';
// import ControlledCarousel from 'components/carousel';
import styles from './index.module.scss';

const WhoAreWe = () => {
    return (
        <Container fluid textAlign="center" className={styles.container}>
            <Grid>
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
                        <Image src="http://event-theme.com/themes/reEstate/realeastate/assets/img/preview/slider/slide-775x500x1.jpg" />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    );
};

export default WhoAreWe;
