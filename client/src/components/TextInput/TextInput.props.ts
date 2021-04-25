import { ITests } from '../../tests/tests.interface';

export interface ITextInputProps extends ITests {
    variant?: 'standard' | 'outlined';
    onChange: (text: string) => void;
    value: string;
    type?: 'email' | 'password' | 'text';
    label?: string;
}
