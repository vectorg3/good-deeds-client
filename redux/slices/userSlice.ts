import { USER } from '@/api/dto/auth.dto';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '@/core/axios';
import * as Api from '@/api';

type InitialState = {
    value: {
        user: USER;
        loading: boolean;
        error: string | null;
    };
};

const initialState: InitialState = {
    value: {
        user: {
            _id: '',
            email: '',
            userName: '',
            friends: [''],
        },
        loading: false,
        error: null,
    },
};
export const fetchGetMe = createAsyncThunk('auth/fetchGetMe', async () => {
    return await Api.auth.getMe();
});
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchGetMe.pending, (state, action) => {
                state.value.loading = true;
            })
            .addCase(fetchGetMe.fulfilled, (state, action) => {
                state.value.user = action.payload;
                state.value.loading = false;
            });
    },
});

export default userSlice.reducer;
