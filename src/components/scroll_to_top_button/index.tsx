import React from 'react';
import { CSSProperties } from 'react';
import { Button, Icon } from 'semantic-ui-react';

const styles: CSSProperties = { position: 'fixed', bottom: 15, right: 10, zIndex: 1000 };
const ScrollToTopButton = () => {
    const handler = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    };

    return (
        <Button
            style={styles}
            size="large"
            circular
            color="blue"
            onClick={handler}
            icon={<Icon name="arrow circle up" />}
        />
    );
};

export default ScrollToTopButton;
