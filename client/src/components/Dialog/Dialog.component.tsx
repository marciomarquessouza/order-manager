import React from 'react';
import { IDialogProps } from './Dialog.props';
import MaterialDialog from '@material-ui/core/Dialog';
import MaterialDialogTitle from '@material-ui/core/DialogTitle';
import MaterialDialogContent from '@material-ui/core/DialogContent';

export function Dialog({
    title,
    onClose,
    children,
    open,
    testId = 'dialog-component',
}: IDialogProps) {
    return (
        <MaterialDialog onClose={onClose} open={open} data-testid={testId}>
            <MaterialDialogTitle>{title}</MaterialDialogTitle>
            <MaterialDialogContent>{children}</MaterialDialogContent>
        </MaterialDialog>
    );
}
