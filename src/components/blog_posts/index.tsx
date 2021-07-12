import Container from 'components/container';
import React from 'react';
import { Button, Card, Grid, Icon, Image } from 'semantic-ui-react';

const BlogPosts = () => {
    return (
        <Container fluid>
            <Grid stackable columns="equal" textAlign="center">
                <Grid.Row>
                    <Grid.Column>
                        <h3 style={{ color: 'grey', fontWeight: 'lighter', marginBottom: 0 }}>
                            Latest property news on our blog
                        </h3>
                        <h1 style={{ color: 'black', marginTop: 0, fontWeight: 'bolder' }}>RECENT BLOG POSTS</h1>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Card fluid>
                            <Image
                                src="http://event-theme.com/themes/reEstate/realeastate/assets/img/preview/blog/post-1200x800x2.jpg"
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
                    </Grid.Column>
                    <Grid.Column>
                        <Card fluid>
                            <Image
                                src="http://event-theme.com/themes/reEstate/realeastate/assets/img/preview/blog/post-1200x800x2.jpg"
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
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Button size="large" content="SEE ALL POSTS" />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    );
};

export default BlogPosts;
