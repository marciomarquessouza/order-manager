import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import auth from './pages/auth/SignIn.slice';
import alert from './pages/alerts/Alert.slice';
import orders from './pages/orders/Order.slice';
import { DEV_TOOLS_ENABLED } from './config';

const rootReducer = combineReducers({
    auth,
    alert,
    orders,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
    reducer: rootReducer,
    devTools: DEV_TOOLS_ENABLED,
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
