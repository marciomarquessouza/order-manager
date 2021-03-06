import React from 'react';
import { IButtonProps } from './Button.props';
import MaterialButton from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

export function Button({
    children,
    color = 'primary',
    disabled = false,
    variant = 'contained',
    fullWidth,
    onClick,
    testId = 'button-component',
    isLoading = false,
    type = 'button',
}: IButtonProps) {
    const hancleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        onClick();
    };

    return (
        <MaterialButton
            data-testid={testId}
            color={color}
            disabled={disabled || isLoading}
            variant={variant}
            fullWidth={fullWidth}
            onClick={hancleClick}
            startIcon={isLoading ? <CircularProgress size={12} /> : null}
            type={type}
        >
            <span className="font-bold">{children}</span>
        </MaterialButton>
    );
}
