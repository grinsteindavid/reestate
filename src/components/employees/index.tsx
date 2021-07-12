import React from 'react';
import { Card, Grid, Icon, Image } from 'semantic-ui-react';
import { range } from 'lodash';
import Container from 'components/container';

const EmployeeCard = () => {
    return (
        <Card>
            <Image
                src="http://event-theme.com/themes/reEstate/realeastate/assets/img/preview/team/team-270x270x1.jpg"
                wrapped
                ui={false}
            />
            <Card.Content>
                <Card.Header>Matthew</Card.Header>
                <Card.Meta>
                    <span className="date">Joined in 2015</span>
                </Card.Meta>
                <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
            </Card.Content>
            <Card.Content extra>
                <a>
                    <Icon name="user" />
                    22 Friends
                </a>
            </Card.Content>
        </Card>
    );
};

const Employees = () => {
    return (
        <Container fluid textAlign="center" border="1px solid lightGrey">
            <Grid stackable columns="equal">
                <Grid.Row>
                    <Grid.Column>
                        <h3 style={{ color: 'grey', fontWeight: 'lighter', marginBottom: 0 }}>
                            Our hand picked agents are to guide & help you
                        </h3>
                        <h1 style={{ color: 'black', marginTop: 0, fontWeight: 'bolder' }}>
                            PROFESSIONAL GUIDANCE FROM TOP AGENTS
                        </h1>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    {range(0, 3).map((number) => {
                        return (
                            <Grid.Column>
                                <EmployeeCard key={number} />
                            </Grid.Column>
                        );
                    })}
                </Grid.Row>
            </Grid>
        </Container>
    );
};

export default Employees;
