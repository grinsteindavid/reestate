import { Switch, Route } from 'react-router-dom';
import Homepage from 'pages/homepage';
import React from 'react';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Homepage />
            </Route>
        </Switch>
    );
};

export default Routes;
