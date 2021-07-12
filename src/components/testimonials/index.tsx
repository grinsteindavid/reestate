import Container from 'components/container';
import React from 'react';
import Slider from 'react-slick';
import { Grid, Image } from 'semantic-ui-react';
import { range } from 'lodash';

const Testimonials = () => {
    return (
        <Container fluid border="1px solid lightGrey" paddingBottom="6%">
            <Slider arrows={false} autoplay={true} dots={true}>
                {range(0, 10).map((number) => {
                    return (
                        <Grid>
                            <Grid.Row>
                                <Grid.Column width="4">
                                    <Image
                                        key={number}
                                        circular
                                        src="http://event-theme.com/themes/reEstate/realeastate/assets/img/preview/avatars/avatar-3.png"
                                    />
                                </Grid.Column>
                                <Grid.Column width="12">
                                    <h3 style={{ color: 'grey' }}>
                                        &quot;Vivamus eget nibh. Etiam cursus leo vel metus. Nulla facilisi. Aenean nec
                                        eros. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
                                        cubilia.&quot;
                                    </h3>
                                    <h4 style={{ color: 'black' }}>Jhon Anthony Gibson</h4>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    );
                })}
            </Slider>
        </Container>
    );
};

export default Testimonials;
