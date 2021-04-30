import React from 'react';
import { IIconButtonProps, IconType } from './IconButton.props';
import CircularProgress from '@material-ui/core/CircularProgress';
import { IconButton as MaterialIconButton } from '@material-ui/core';
import { AddCircle, Save } from '@material-ui/icons';

export function IconButton({
    label,
    disabled = false,
    onClick,
    testId = 'button-component',
    isLoading = false,
    type = 'button',
    icon = 'create',
}: IIconButtonProps) {
    const hancleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        onClick();
    };

    const ActionIcon = (type: IconType) => {
        switch (type) {
            case 'create':
                return <AddCircle fontSize="large" />;
            case 'save':
            case 'update':
                return <Save fontSize="large" />;
            default:
                return <AddCircle fontSize="large" />;
        }
    };

    return (
        <MaterialIconButton
            onClick={hancleClick}
            size="medium"
            color="secondary"
            disabled={disabled}
            type={type}
            data-testid={testId}
        >
            <div className="flex flex-col items-center content-center text-white">
                {isLoading ? <CircularProgress color="inherit" size="1rem" /> : ActionIcon(icon)}
                <p className="text-sm font-bold">{label}</p>
            </div>
        </MaterialIconButton>
    );
}
