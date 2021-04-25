import { ITests } from '../../tests/tests.interface';

export interface IAlertProps extends ITests {
    severity: 'error' | 'warning' | 'info' | 'success';
    children: string;
    open: boolean;
    onClose: () => void;
}
