import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

const EXAMPLE_IMAGE_URL =
    'http://event-theme.com/themes/reEstate/realeastate/assets/img/preview/property/featured-1200x800x3.jpg';

const ControlledCarousel = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (eventKey: number, event: Record<string, unknown> | null) => {
        setIndex(eventKey);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img className="d-block w-100" src={EXAMPLE_IMAGE_URL} alt="First slide" />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={EXAMPLE_IMAGE_URL} alt="Second slide" />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={EXAMPLE_IMAGE_URL} alt="Third slide" />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default ControlledCarousel;
