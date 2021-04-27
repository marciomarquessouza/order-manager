import { ITests } from '../../tests/tests.interface';

export interface IDatePickerProps extends ITests {
    value: number;
    onChange: (date: number) => void;
    label: string;
    required?: boolean;
}
