import React from 'react';
import { CSSProperties } from 'react';
import { Button, Icon } from 'semantic-ui-react';

const styles: CSSProperties = { position: 'fixed', bottom: 10, right: 5 };
const ScrollToTopButton = () => {
    const handler = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    };

    return <Button style={styles} circular color="blue" onClick={handler} icon={<Icon name="arrow circle up" />} />;
};

export default ScrollToTopButton;
