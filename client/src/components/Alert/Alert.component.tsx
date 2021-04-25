import React from 'react';
import { IAlertProps } from './Alert.props';
import SnackBar from '@material-ui/core/Snackbar';
import MaterialAlert from '@material-ui/lab/Alert';
import { ALERT_AUTO_HIDE } from '../../config';

export function Alert({
    severity,
    children,
    open,
    onClose,
    testId = 'alert-component',
}: IAlertProps) {
    return (
        <SnackBar
            open={open}
            autoHideDuration={ALERT_AUTO_HIDE}
            onClose={onClose}
            data-testid={testId}
        >
            <MaterialAlert onClose={onClose} severity={severity} variant="outlined">
                {children}
            </MaterialAlert>
        </SnackBar>
    );
}
