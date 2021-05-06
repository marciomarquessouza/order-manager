import React, { useEffect, useCallback } from 'react';
import { PageHeader } from '../../layout/PageHeader/PageHeader.component';
import { PageOrdersList } from '../../layout/PageOrdersList';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { loadOrders, setSearchText } from './Order.slice';
import { filteredOrders } from './Order.selectors';
import { ListAlt } from '@material-ui/icons';
import { CircularProgress, Typography } from '@material-ui/core';
import { openAlert } from '../alerts/Alert.slice';
import { useHistory } from 'react-router-dom';
import { ORDER_CREATE, ORDER_DETAIL } from '../../routes';

export function OrderList() {
    const { appState, searchText } = useAppSelector((state) => state.orders);
    const dispatch = useAppDispatch();
    const orders = useAppSelector(filteredOrders);
    const history = useHistory();

    useEffect(() => {
        dispatch(loadOrders());
    }, [dispatch]);

    useEffect(() => {
        if (appState === 'error') {
            dispatch(openAlert({ message: 'Error loading data', severity: 'error' }));
        }
    }, [appState, dispatch]);

    const handleCreateOrder = useCallback(() => {
        history.push(ORDER_CREATE);
    }, [history]);

    const handleSearch = useCallback((text: string) => dispatch(setSearchText(text)), [dispatch]);

    const handleOrderDetail = useCallback(
        (uid: string) => history.push(ORDER_DETAIL.replace(':uid', uid)),
        [history],
    );

    return (
        <main>
            <section>
                <PageHeader
                    searchText={searchText}
                    onClickActionButton={handleCreateOrder}
                    actionButtonLabel="New Order"
                    title="Orders"
                    icon={<ListAlt color="inherit" fontSize="large" />}
                    onSearchChange={handleSearch}
                    searchPlaceholder="Search"
                    actionButtonIcon="create"
                />
            </section>
            {appState === 'loading' ? (
                <section className="flex items-center justify-center m-20">
                    <div className="m-4">
                        <Typography variant="h5" color="secondary">
                            Loading Data
                        </Typography>
                    </div>
                    <CircularProgress color="secondary" size={28} />
                </section>
            ) : (
                <section className="px-12 z-10 transform -translate-y-14">
                    <PageOrdersList data={orders} onRowClick={handleOrderDetail} />
                </section>
            )}
        </main>
    );
}
