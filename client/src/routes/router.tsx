import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { firebaseApp } from '../services';
import { Auth } from '../pages/auth/Auth.config';
import { Order } from '../pages/orders/Order.config';
import { getUser } from '../pages/auth/SignIn.slice';
import { useAppDispatch } from '../hooks';

export function AppRouter() {
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);
    const dispatch = useAppDispatch();

    firebaseApp.auth().onAuthStateChanged((user) => {
        if (user) {
            dispatch(getUser());
            return setIsLoggedIn(true);
        }
        return setIsLoggedIn(false);
    });

    return <Router>{!isLoggedIn ? <Auth /> : <Order />}</Router>;
}
