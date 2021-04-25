import { ITests } from '../../tests/tests.interface';

export interface ILogoProps extends ITests {
    variant: 'standard' | 'row';
    onClick: () => void;
}
