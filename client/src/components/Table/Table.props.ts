import { ITests } from '../../tests/tests.interface';

export type Column = {
    id: string;
    label: string;
    align: 'center' | 'inherit' | 'justify' | 'left' | 'right';
    minWidth: number;
};

export type Row = {
    [name: string]: string | number | boolean | Date;
};

export interface ITableProps extends ITests {
    columns: Column[];
    rows: Row[];
    onClick: (value: string) => void;
}
