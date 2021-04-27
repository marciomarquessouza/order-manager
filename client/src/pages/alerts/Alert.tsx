import React from 'react';
import { Alert } from '../../components/Alert';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { close } from './Alert.slice';

export function AppAlert() {
    const alert = useAppSelector((state) => state.alert);
    const dispatch = useAppDispatch();

    const handleCloseAlert = () => {
        dispatch(close());
    };

    return (
        <Alert severity={alert.severity} open={alert.isOpen} onClose={handleCloseAlert}>
            {alert.message}
        </Alert>
    );
}
