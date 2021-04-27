import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { firebaseApp } from '../services';
import { Auth } from '../pages/auth/Auth.config';
import { Order } from '../pages/orders/Order.config';
import { getUser } from '../pages/auth/SignIn.slice';
import { useAppDispatch, useAppSelector } from '../hooks';

export function AppRouter() {
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);
    const dispatch = useAppDispatch();
    const { user, appState } = useAppSelector((state) => state.auth);

    firebaseApp.auth().onAuthStateChanged((currentUser) => {
        if (currentUser) {
            if (!user.name && appState === 'idle') {
                dispatch(getUser());
            }
            return setIsLoggedIn(true);
        }
        return setIsLoggedIn(false);
    });

    return <Router>{!isLoggedIn ? <Auth /> : <Order />}</Router>;
}
