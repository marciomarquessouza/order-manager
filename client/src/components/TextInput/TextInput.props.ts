import { ITests } from '../../tests/tests.interface';

export interface ITextInputProps extends ITests {
    name?: string;
    variant?: 'standard' | 'outlined';
    value: string;
    type?: 'email' | 'password' | 'text';
    label?: string;
    placeholder?: string;
    onChange: (text: string, id?: string) => void;
    required?: boolean;
    disabled?: boolean;
    fullWidth?: boolean;
    autoFocus?: boolean;
    error?: boolean;
}
