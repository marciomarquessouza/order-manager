import React, { useCallback, useState, useEffect } from 'react';
import { ListAlt } from '@material-ui/icons';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { PageHeader } from '../../layout/PageHeader/PageHeader.component';
import { createOrder } from './Order.slice';
import { PageOrderForm, IOrderProps } from '../../layout/PageOrderForm';
import { createOrderProps } from '../../entities/mocks/mock-order';
import { useHistory } from 'react-router-dom';
import { ORDER_LIST } from '../../routes';
import { openAlert } from '../alerts/Alert.slice';

export function OrderForm() {
    const dispatch = useAppDispatch();
    const [order, setOrder] = useState<IOrderProps>(createOrderProps());
    const [title, setTitle] = useState('');
    const { appState, message } = useAppSelector((state) => state.orders);
    const history = useHistory();

    const handleSubmit = useCallback(() => {
        if (!order.title || !order.bookingDate) {
            return dispatch(
                openAlert({ message: 'Fill in all required fields', severity: 'error' }),
            );
        }
        dispatch(createOrder(order));
    }, [dispatch, order]);
    const handleOrderChange = useCallback((order: IOrderProps) => setOrder(order), [setOrder]);
    const handleTitleChange = useCallback((title: string) => setTitle(title), [setTitle]);

    useEffect(() => {
        if (appState === 'created') {
            history.push(ORDER_LIST);
        }
    }, [appState, dispatch, history, message]);

    return (
        <main>
            <section>
                <PageHeader
                    actionButtonLabel="Save"
                    onClickActionButton={handleSubmit}
                    title="Order"
                    subtitle={title}
                    icon={<ListAlt color="inherit" fontSize="large" />}
                    isLoading={appState === 'loading'}
                />
            </section>
            <section className="px-12 z-10 transform -translate-y-14">
                <PageOrderForm
                    onOrderChange={handleOrderChange}
                    onOrderTitleChange={handleTitleChange}
                    onSubmit={handleSubmit}
                    order={order}
                />
            </section>
        </main>
    );
}
