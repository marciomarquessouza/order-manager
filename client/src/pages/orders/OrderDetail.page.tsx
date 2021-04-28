import React, { useCallback, useState, useEffect } from 'react';
import { PageHeader } from '../../layout/PageHeader/PageHeader.component';
import { PageOrderDetail } from '../../layout/PageOrderDetail/PageOrderDetail.component';
import { useParams } from 'react-router-dom';
import { loadOrders, selectOrderById, updateOrder } from './Order.slice';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { ListAlt } from '@material-ui/icons';
import { CircularProgress, Typography } from '@material-ui/core';

export function OrderDetail() {
    const { uid } = useParams<{ uid: string }>();
    const { appState } = useAppSelector((state) => state.orders);
    const order = useAppSelector((state) => selectOrderById(state, uid));
    const [title, setTitle] = useState(order?.title || '');
    const [bookingDate, setBookingDate] = useState(order?.bookingDate || new Date().valueOf());
    const dispatch = useAppDispatch();

    const handleTitleChange = useCallback((text: string) => {
        setTitle(text);
    }, []);

    const handleBookingDateChange = useCallback((date: number) => {
        setBookingDate(date);
    }, []);

    const handleSubmit = useCallback(() => {
        dispatch(updateOrder({ uid, title, bookingDate }));
    }, [dispatch, uid, title, bookingDate]);

    useEffect(() => {
        if (!order) {
            dispatch(loadOrders());
        }
    }, [order, dispatch]);

    return (
        <main>
            <section>
                <PageHeader
                    actionButtonLabel="Update"
                    onClickActionButton={handleSubmit}
                    title="Order"
                    subtitle={title}
                    icon={<ListAlt color="inherit" fontSize="large" />}
                    isLoading={appState === 'loading'}
                />
            </section>
            <section>
                {!order || appState === 'loading' ? (
                    <section className="flex items-center justify-center m-20">
                        <div className="m-4">
                            <Typography variant="h5" color="secondary">
                                Loading Order
                            </Typography>
                        </div>
                        <CircularProgress color="secondary" size={28} />
                    </section>
                ) : (
                    <section className="px-12 z-10 transform -translate-y-14">
                        <PageOrderDetail
                            order={order}
                            title={title}
                            onTitleChange={handleTitleChange}
                            bookingDate={bookingDate}
                            onBookingDateChange={handleBookingDateChange}
                        />
                    </section>
                )}
            </section>
        </main>
    );
}
