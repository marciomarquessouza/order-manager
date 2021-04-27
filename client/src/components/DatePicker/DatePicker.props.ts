import { ITests } from '../../tests/tests.interface';

export interface IDatePickerProps extends ITests {
    name?: string;
    value: number;
    onChange: (date: number, name?: string) => void;
    label: string;
    required?: boolean;
}
