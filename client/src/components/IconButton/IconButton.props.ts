import React from 'react';
import { ITests } from '../../tests/tests.interface';

export type IconType = 'save' | 'create' | 'update';

export interface IIconButtonProps extends ITests {
    label: string;
    disabled?: boolean;
    isLoading?: boolean;
    onClick: () => void;
    type?: 'button' | 'submit';
    icon: IconType;
}
