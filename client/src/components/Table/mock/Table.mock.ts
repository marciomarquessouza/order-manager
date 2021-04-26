import { Column, Row } from '../';
import moment from 'moment';

const columns: Column[] = [
    {
        id: 'title',
        label: 'Title',
        align: 'left',
        minWidth: 170,
    },
    {
        id: 'booking_date',
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

interface Data {
    code: string;
    title: string;
    booking_date: number;
    address: string;
    customer: string;
}

function createData(props: Data): Row {
    const formatedDate = moment(1561172400000).format('DD.MM.YYYY');
    return { ...props, booking_date: formatedDate };
}

const rows: Row[] = [
    createData({
        code: 'hKlIKPoZc2xCKGTUKZK2',
        title: 'Test Order 1',
        booking_date: 1561172400000,
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
