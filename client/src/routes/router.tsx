import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { firebaseApp } from '../services';
import { Auth } from '../pages/auth/Auth.config';
import { Order } from '../pages/orders/Order.config';
import { addUser } from '../pages/auth/SignIn.slice';
import { useAppDispatch } from '../hooks';
import { CircularProgress, Typography } from '@material-ui/core';

export function AppRouter() {
    const [loginStatus, setLoginStatus] = React.useState<'idle' | 'signin' | 'signout'>('idle');
    const dispatch = useAppDispatch();

    useEffect(() => {
        firebaseApp.auth().onAuthStateChanged((currentUser) => {
            if (currentUser) {
                dispatch(
                    addUser({
                        name: currentUser.displayName || 'User',
                        email: currentUser.email || '',
                    }),
                );
            }
            setLoginStatus(currentUser ? 'signin' : 'signout');
        });
    }, [setLoginStatus, dispatch]);

    if (loginStatus === 'idle') {
        return (
            <section className="flex items-center justify-center m-20">
                <div className="m-4">
                    <Typography variant="h5" color="secondary">
                        Loading Data
                    </Typography>
                </div>
                <CircularProgress color="secondary" size={28} />
            </section>
        );
    }

    return <Router>{loginStatus === 'signin' ? <Order /> : <Auth />}</Router>;
}
