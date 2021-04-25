import React from 'react';
import { ITests } from '../../tests/tests.interface';

export interface IButtonProps extends ITests {
    children: string | React.ReactNode;
    color?: 'primary' | 'secondary';
    disabled?: boolean;
    variant?: 'outlined' | 'contained' | 'text';
    fullWidth?: boolean;
    isLoading?: boolean;
    onClick: () => void;
}
