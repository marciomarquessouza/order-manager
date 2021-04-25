import { ITests } from '../../tests/tests.interface';

export interface IAvatarProps extends ITests {
    name: string;
    email: string;
    onClick: () => void;
}
