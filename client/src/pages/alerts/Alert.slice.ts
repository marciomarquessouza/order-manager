import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store';

type TypeSeverity = 'error' | 'warning' | 'info' | 'success';

interface IAlertState {
    severity: TypeSeverity;
    isOpen: boolean;
    message: string;
}

const initialState: IAlertState = {
    severity: 'info',
    isOpen: false,
    message: '',
};

export const alertSlice = createSlice({
    name: 'alert',
    initialState,
    reducers: {
        openAlert: (state, action: PayloadAction<{ message: string; severity: TypeSeverity }>) => {
            const { message, severity } = action.payload;
            state.isOpen = true;
            state.message = message;
            state.severity = severity;
        },
        closeAlert: (state) => {
            state.isOpen = false;
        },
    },
});

export const { openAlert, closeAlert } = alertSlice.actions;

export const selectAlert = (state: RootState) => state.alert;

export default alertSlice.reducer;
