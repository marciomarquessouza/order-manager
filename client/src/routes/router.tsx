import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { firebaseApp } from '../services';
import { Auth } from '../pages/auth/Auth.config';
import { Order } from '../pages/orders/Order.config';
import { addUser } from '../pages/auth/SignIn.slice';
import { useAppDispatch } from '../hooks';
import { CircularProgress, Typography } from '@material-ui/core';
import { PageLoading } from '../layout/PageLoading/PageLoading.component';

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
        return <PageLoading />;
    }

    return <Router>{loginStatus === 'signin' ? <Order /> : <Auth />}</Router>;
}
