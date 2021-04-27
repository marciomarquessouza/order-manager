import {
    createSlice,
    createAsyncThunk,
    createEntityAdapter,
    PayloadAction,
} from '@reduxjs/toolkit';
import request from '../../api/request';
import { IOrder } from '../../entities/IOrder';
import { RootState } from '../../store';

export const loadOrders = createAsyncThunk('orders/load-orders', async (_, { dispatch }) => {
    const response = await request.get<IOrder[]>({ url: '/api/orders' });
    return { data: response };
});

export interface IOrderState {
    appState: 'idle' | 'loading' | 'error';
    searchText: string;
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
    },
});

export const { setSearchText } = ordersSlice.actions;

export default ordersSlice.reducer;
