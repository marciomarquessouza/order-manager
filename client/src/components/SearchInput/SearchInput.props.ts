import { ITests } from '../../tests/tests.interface';

export interface ISearchInputProps extends ITests {
    value: string;
    onChange: (text: string) => void;
}
