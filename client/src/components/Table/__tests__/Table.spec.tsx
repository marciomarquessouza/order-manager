import React from 'react';
import { Table, ITableProps } from '..';
import { render } from '@testing-library/react';
import { createTableProps, TableSpy } from '../mock/Table.mock';

const defaultProps: ITableProps = {
    rows: createTableProps().rows,
    columns: createTableProps().columns,
    onClick: jest.fn(),
};

const setup = (props: ITableProps = defaultProps) => {
    const utils = render(<Table {...props} />);
    const table = utils.getByTestId(/table-component/);
    return {
        table,
        ...utils,
    };
};

describe('#Table', () => {
    it('renders component properly', () => {
        const { table } = setup();
        expect(table).toBeInTheDocument();
    });
});
