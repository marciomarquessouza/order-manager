import { Column, Row } from '../';
import { createOrderData } from '../helpers';

const columns: Column[] = [
    {
        id: 'title',
        label: 'Title',
        align: 'left',
        minWidth: 170,
    },
    {
        id: 'bookingDate',
        label: 'Booking Date',
        align: 'left',
        minWidth: 170,
    },
    {
        id: 'address',
        label: 'Address',
        align: 'left',
        minWidth: 170,
    },
    {
        id: 'customer',
        label: 'Customer',
        align: 'left',
        minWidth: 170,
    },
];

const rows: Row[] = [
    createOrderData({
        code: 'hKlIKPoZc2xCKGTUKZK2',
        title: 'Test Order 1',
        bookingDate: 1561172400000,
        address: 'Wriezener Str. 12',
        customer: 'Emad Alam',
    }),
];

type ITableMock = {
    rows: Row[];
    columns: Column[];
};

export const createTableProps = (): ITableMock => ({
    columns,
    rows,
});

export class TableSpy {
    public id: string = '';

    onClick(id: string): void {
        this.id = id;
    }
}
