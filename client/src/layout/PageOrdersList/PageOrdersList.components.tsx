import React from 'react';
import { Column, Row, Table } from '../../components/Table';
import { IPageOrdersListProps } from './PageOrdersList.props';
import { createOrderData } from '../../components/Table/helpers';

export function PageOrdersList({ data, onRowClick }: IPageOrdersListProps) {
    const columns: Column[] = [
        {
            id: 'title',
            label: 'Title',
            align: 'center',
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

    const rows: Row[] = data.map(createOrderData);

    return (
        <section className="rounded-t-3xl overflow-hidden">
            <div className="bg-white">
                <Table columns={columns} rows={rows} onClick={onRowClick} />
            </div>
        </section>
    );
}