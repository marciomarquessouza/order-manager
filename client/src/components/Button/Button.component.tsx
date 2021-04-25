import React from 'react';
import { IButtonProps } from './Button.props';
import MaterialButton from '@material-ui/core/Button';

export function Button({
    children,
    color = 'primary',
    disabled = false,
    variant = 'contained',
    onClick,
    testId = 'button-component',
}: IButtonProps) {
    return (
        <MaterialButton
            data-testid={testId}
            color={color}
            disabled={disabled}
            variant={variant}
            onClick={onClick}
        >
            {children}
        </MaterialButton>
    );
}
