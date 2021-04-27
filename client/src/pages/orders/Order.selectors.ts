import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { selectOrders } from './Order.slice';

export const filteredOrders = createSelector(
    (state: RootState) => state,
    (state) => {
        const { searchText } = state.orders;
        if (!searchText) {
            return selectOrders(state);
        }
        return selectOrders(state).filter((order) =>
            order.title.toUpperCase().includes(searchText.toUpperCase()),
        );
    },
);
