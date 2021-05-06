import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { selectOrders } from './Order.slice';
import moment from 'moment';

export const filteredOrders = createSelector(
    (state: RootState) => state,
    (state) => {
        const searchText = state.orders.searchText.trim();
        if (!searchText) {
            return selectOrders(state);
        }
        return selectOrders(state).filter((order) => {
            const { title, bookingDate, address, customer } = order;
            const columns = [
                title,
                customer.name,
                address.street,
                moment(bookingDate).format('DD.MM.YYYY'),
            ];
            return columns.some((text) => text.toLowerCase().includes(searchText.toLowerCase()));
        });
    },
);
