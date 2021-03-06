import React from 'react';
import { Column, Row, Table } from '../../components/Table';
import { IPageOrdersListProps } from './PageOrdersList.props';
import { createOrderList } from '../../components/Table/helpers';
import { Paper } from '@material-ui/core';

export function PageOrdersList({ data, onRowClick, isLoading = false }: IPageOrdersListProps) {
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

    const rows: Row[] = data.map(createOrderList);

    return (
        <Paper elevation={2}>
            <div className="bg-white">
                <Table columns={columns} rows={rows} onClick={onRowClick} isLoading={isLoading} />
            </div>
        </Paper>
    );
}
