import { ReactNode } from 'react';
import { ITests } from '../../tests/tests.interface';

export interface IDialogProps extends ITests {
    title: string;
    open: boolean;
    onClose?: () => void;
    children?: ReactNode;
}
