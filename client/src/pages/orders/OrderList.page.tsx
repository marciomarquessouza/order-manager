import React, { useEffect } from 'react';
import { PageHeader } from '../../layout/PageHeader/PageHeader.component';
import { PageOrdersList } from '../../layout/PageOrdersList';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { loadOrders, setSearchText } from './Order.slice';
import { filteredOrders } from './Order.selectors';
import { ListAlt } from '@material-ui/icons';
import { CircularProgress, Typography } from '@material-ui/core';
import { openAlert } from '../alerts/Alert.slice';

export function OrderList() {
    const { appState, searchText } = useAppSelector((state) => state.orders);
    const dispatch = useAppDispatch();
    const orders = useAppSelector(filteredOrders);

    useEffect(() => {
        dispatch(loadOrders());
    }, [dispatch]);

    useEffect(() => {
        if (appState === 'error') {
            dispatch(openAlert({ message: 'Error loading data', severity: 'error' }));
        }
    }, [appState, dispatch]);

    const handleCreateOrder = () => {};

    const handleSearchText = (text: string) => {
        dispatch(setSearchText(text));
    };

    return (
        <main>
            <div>
                <PageHeader
                    searchText={searchText}
                    onClickActionButton={handleCreateOrder}
                    actionButtonLabel="New Order"
                    title="Orders"
                    icon={<ListAlt color="inherit" fontSize="large" />}
                    onSearchChange={handleSearchText}
                    searchPlaceholder="Search by Order Title"
                />
            </div>
            {appState === 'loading' ? (
                <div className="flex items-center justify-center m-20">
                    <div className="m-4">
                        <Typography variant="h5" color="secondary">
                            Loading Data
                        </Typography>
                    </div>
                    <CircularProgress color="secondary" size={28} />
                </div>
            ) : (
                <div className="px-12 z-10 transform -translate-y-14">
                    <PageOrdersList data={orders} onRowClick={() => undefined} />
                </div>
            )}
        </main>
    );
}
