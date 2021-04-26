import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Table, ITableProps, Column, Row } from './';
import moment from 'moment';

export default {
    title: 'Order-Manager/Components/Table',
    component: Table,
} as Meta;

const Template: Story<ITableProps> = (props) => <Table {...props} />;

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
        title: 'Test Order 1',
        booking_date: 1561172400000,
        address: 'Wriezener Str. 12',
        customer: 'Emad Alam',
    }),
];

export const Default = Template.bind({});
Default.args = { columns, rows };
