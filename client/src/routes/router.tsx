import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { firebaseApp } from '../services';
import { Auth } from '../pages/auth/Auth.config';

export function AppRouter() {
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);

    firebaseApp.auth().onAuthStateChanged((user) => {
        return user ? setIsLoggedIn(true) : setIsLoggedIn(false);
    });

    const signOut = () => {
        firebaseApp.auth().signOut();
    };

    return (
        <Router>
            {!isLoggedIn ? (
                <Auth />
            ) : (
                <>
                    <button onClick={signOut}>Sign out</button>
                    <Switch>
                        <Route path="/add-number">
                            <div>Create Order</div>
                        </Route>
                        <Route path="/">
                            <div>List Orders</div>
                        </Route>
                    </Switch>
                </>
            )}
        </Router>
    );
}
