import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import { IUser } from '../../entities/IUser';
import { signWithEmailAndPassword, SignProtocol } from '../../services';

export const signIn = createAsyncThunk('auth/signIn', async (user: IUser) => {
    const response = await signWithEmailAndPassword(user);
    return { data: response };
});

const authAdapter = createEntityAdapter<IUser>({});

export interface IUserState {
    appState: 'idle' | 'loading' | 'error';
    user: SignProtocol.result;
}

const authSlice = createSlice({
    name: 'auth',
    initialState: authAdapter.getInitialState<IUserState>({
        appState: 'idle',
        user: {
            email: '',
            name: '',
            token: '',
        },
    }),
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
