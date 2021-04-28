import {
    createSlice,
    createAsyncThunk,
    createEntityAdapter,
    PayloadAction,
} from '@reduxjs/toolkit';
import request from '../../api/request';
import { IOrder } from '../../entities/IOrder';
import { IOrderProps } from '../../layout/PageOrderForm';
import { RootState } from '../../store';
import { openAlert } from '../alerts/Alert.slice';

export const loadOrders = createAsyncThunk('orders/load-orders', async () => {
    const response = await request.get<IOrder[]>({ url: '/api/orders' });
    return { data: response };
});

export const createOrder = createAsyncThunk(
    'orders/create-order',
    async (order: IOrderProps, { dispatch }) => {
        try {
            await request.post({ url: '/api/orders', data: order });
            dispatch(openAlert({ message: 'Order created with success', severity: 'success' }));
        } catch (error) {
            dispatch(openAlert({ message: error.message, severity: 'error' }));
            throw new Error(error);
        }
    },
);

export interface IOrderState {
    appState: 'idle' | 'loading' | 'created' | 'updated' | 'error';
    searchText: string;
    message?: string;
}

const ordersAdapter = createEntityAdapter<IOrder>({
    selectId: (order: IOrder) => order.uid,
});

export const {
    selectAll: selectOrders,
    selectById: selectOrderById,
} = ordersAdapter.getSelectors<RootState>((state) => state.orders);

const ordersSlice = createSlice({
    name: 'orders',
    initialState: ordersAdapter.getInitialState<IOrderState>({
        appState: 'idle',
        searchText: '',
    }),
    reducers: {
        setSearchText: (state: IOrderState, action: PayloadAction<string>) => {
            state.searchText = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(loadOrders.pending, (state) => {
            state.appState = 'loading';
        });
        builder.addCase(loadOrders.fulfilled, (state, action) => {
            const { data } = action.payload;
            ordersAdapter.setAll(state, data);
            state.searchText = '';
            state.appState = 'idle';
        });
        builder.addCase(loadOrders.rejected, (state) => {
            state.appState = 'error';
        });
        builder.addCase(createOrder.pending, (state) => {
            state.appState = 'loading';
        });
        builder.addCase(createOrder.fulfilled, (state) => {
            state.appState = 'created';
        });
        builder.addCase(createOrder.rejected, (state) => {
            state.appState = 'error';
        });
    },
});

export const { setSearchText } = ordersSlice.actions;

export default ordersSlice.reducer;
