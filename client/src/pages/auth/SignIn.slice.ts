import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../../entities/IUser';
import { signWithEmailAndPassword, SignProtocol, getFirebaseUser } from '../../services';
import { openAlert } from '../alerts/Alert.slice';

export const signIn = createAsyncThunk('auth/signIn', async (user: IUser, { dispatch }) => {
    await signWithEmailAndPassword(user);
    dispatch(openAlert({ message: 'Success to Login', severity: 'info' }));
});

export const getUser = createAsyncThunk('auth/getUser', async () => {
    const response = await getFirebaseUser();
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
    reducers: {
        addUser: (state: IUserState, action: PayloadAction<SignProtocol.result>) => {
            state.user = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(signIn.pending, (state) => {
            state.appState = 'loading';
        });
        builder.addCase(signIn.fulfilled, (state) => {
            state.appState = 'idle';
        });
        builder.addCase(signIn.rejected, (state) => {
            state.appState = 'error';
        });
        builder.addCase(getUser.pending, (state) => {
            state.appState = 'loading';
        });
        builder.addCase(getUser.fulfilled, (state, action) => {
            const { data } = action.payload;
            state.user = data;
            state.appState = 'idle';
        });
        builder.addCase(getUser.rejected, (state) => {
            state.appState = 'error';
        });
    },
});

export const { addUser } = authSlice.actions;

export default authSlice.reducer;
