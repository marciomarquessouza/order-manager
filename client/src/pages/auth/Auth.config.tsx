import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { SignIn } from './SignIn.page';

export function Auth() {
    return (
        <Switch>
            <Route path="/">
                <SignIn />
            </Route>
        </Switch>
    );
}
