import { USER } from '@/api/dto/auth.dto';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '@/core/axios';
import * as Api from '@/api';

type InitialState = {
    value: {
        friends: USER[];
        loading: boolean;
        error: string | null;
    };
};

const initialState: InitialState = {
    value: {
        friends: [],
        loading: false,
        error: null,
    },
};
export const fetchGetFriends = createAsyncThunk('auth/fetchGetFriends', async () => {
    return await Api.friends.getAll();
});

export const friendsSlice = createSlice({
    name: 'friends',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchGetFriends.pending, (state, action) => {
                state.value.loading = true;
            })
            .addCase(fetchGetFriends.fulfilled, (state, action) => {
                state.value.friends = action.payload;
                state.value.loading = false;
            });
    },
});

export default friendsSlice.reducer;
