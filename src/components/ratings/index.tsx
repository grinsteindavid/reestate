import Container from 'components/container';
import React from 'react';
import { Grid, Icon, Statistic } from 'semantic-ui-react';

const PageStatistics = () => {
    return (
        <Container fluid>
            <Grid stackable columns="equal" textAlign="center">
                <Grid.Row>
                    <Grid.Column>
                        <Statistic color="grey">
                            <Statistic.Value>
                                <Icon name="heart" />
                            </Statistic.Value>
                            <Statistic.Label text>10 MILLION</Statistic.Label>
                            <Statistic.Label>HAPPY CUSTOMERS</Statistic.Label>
                        </Statistic>
                    </Grid.Column>

                    <Grid.Column>
                        <Statistic color="grey">
                            <Statistic.Value>
                                <Icon name="hand point up" />
                            </Statistic.Value>
                            <Statistic.Label text>50 MILLION</Statistic.Label>
                            <Statistic.Label>SELLERS PREFER US</Statistic.Label>
                        </Statistic>
                    </Grid.Column>

                    <Grid.Column>
                        <Statistic color="grey">
                            <Statistic.Value>
                                <Icon name="group" />
                            </Statistic.Value>
                            <Statistic.Label text>12 MILLION</Statistic.Label>
                            <Statistic.Label>BUYERS TRUST US</Statistic.Label>
                        </Statistic>
                    </Grid.Column>

                    <Grid.Column>
                        <Statistic color="grey">
                            <Statistic.Value>
                                <Icon name="chat" />
                            </Statistic.Value>
                            <Statistic.Label text>1255</Statistic.Label>
                            <Statistic.Label>EXPERT GUIDANCE</Statistic.Label>
                        </Statistic>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    );
};

export default PageStatistics;
