import { ITests } from '../../tests/tests.interface';

export interface IButtonProps extends ITests {
    children: string;
    color?: 'primary' | 'secondary';
    disabled?: boolean;
    variant?: 'outlined' | 'contained' | 'text';
    onClick: () => void;
}
