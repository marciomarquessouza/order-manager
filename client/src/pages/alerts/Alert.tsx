import React from 'react';
import { Alert } from '../../components/Alert';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { closeAlert } from './Alert.slice';

export function AppAlert() {
    const alert = useAppSelector((state) => state.alert);
    const dispatch = useAppDispatch();

    const handleCloseAlert = () => {
        dispatch(closeAlert());
    };

    return (
        <Alert severity={alert.severity} open={alert.isOpen} onClose={handleCloseAlert}>
            {alert.message}
        </Alert>
    );
}
