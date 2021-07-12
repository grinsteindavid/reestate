import Container from 'components/container';
import React, { useState } from 'react';
import { Accordion, AccordionTitleProps, Grid, Icon } from 'semantic-ui-react';

const Faqs = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, data: AccordionTitleProps) => {
        setActiveIndex(Number(data.index));
    };

    return (
        <Container fluid textAlign="center" border="1px solid lightGrey">
            <Grid stackable>
                <Grid.Row>
                    <Grid.Column width="16">
                        <h3 style={{ color: 'grey', fontWeight: 'lighter', marginBottom: 0 }}>
                            The most frequent asked questions
                        </h3>
                        <h1 style={{ color: 'black', marginTop: 0, fontWeight: 'bolder' }}>FAQS</h1>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width="8">
                        <Accordion fluid styled>
                            <Accordion.Title active={activeIndex === 1} index={1} onClick={handleClick}>
                                <Icon name="dropdown" />
                                What is a dog?
                            </Accordion.Title>
                            <Accordion.Content active={activeIndex === 1}>
                                <p>
                                    A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it
                                    can be found as a welcome guest in many households across the world.
                                </p>
                            </Accordion.Content>

                            <Accordion.Title active={activeIndex === 2} index={2} onClick={handleClick}>
                                <Icon name="dropdown" />
                                What kinds of dogs are there?
                            </Accordion.Title>
                            <Accordion.Content active={activeIndex === 2}>
                                <p>
                                    There are many breeds of dogs. Each breed varies in size and temperament. Owners
                                    often select a breed of dog that they find to be compatible with their own lifestyle
                                    and desires from a companion.
                                </p>
                            </Accordion.Content>
                        </Accordion>
                    </Grid.Column>
                    <Grid.Column width="8">
                        <Accordion fluid styled>
                            <Accordion.Title active={activeIndex === 3} index={3} onClick={handleClick}>
                                <Icon name="dropdown" />
                                What is a dog?
                            </Accordion.Title>
                            <Accordion.Content active={activeIndex === 3}>
                                <p>
                                    A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it
                                    can be found as a welcome guest in many households across the world.
                                </p>
                            </Accordion.Content>

                            <Accordion.Title active={activeIndex === 4} index={4} onClick={handleClick}>
                                <Icon name="dropdown" />
                                What kinds of dogs are there?
                            </Accordion.Title>
                            <Accordion.Content active={activeIndex === 4}>
                                <p>
                                    There are many breeds of dogs. Each breed varies in size and temperament. Owners
                                    often select a breed of dog that they find to be compatible with their own lifestyle
                                    and desires from a companion.
                                </p>
                            </Accordion.Content>
                        </Accordion>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    );
};

export default Faqs;
