import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import { IUser } from '../../entities/IUser';
import { signWithEmailAndPassword, SignProtocol } from '../../services';
import { open } from '../alerts/Alert.slice';

export const signIn = createAsyncThunk('auth/signIn', async (user: IUser, { dispatch }) => {
    const response = await signWithEmailAndPassword(user);
    dispatch(open({ message: 'Success to Login', severity: 'info' }));
    return { data: response };
});

export interface IUserState {
    appState: 'idle' | 'loading' | 'error';
    user: SignProtocol.result;
}

const initialState: IUserState = {
    appState: 'idle',
    user: {
        email: '',
        name: '',
        token: '',
    },
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(signIn.pending, (state) => {
            state.appState = 'loading';
        });
        builder.addCase(signIn.fulfilled, (state, action) => {
            const { data } = action.payload;
            state.user = data;
            state.appState = 'idle';
        });
        builder.addCase(signIn.rejected, (state) => {
            state.appState = 'error';
        });
    },
});

export default authSlice.reducer;
