import { USER } from '@/api/dto/auth.dto';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '@/core/axios';
import * as Api from '@/api';
import { DeedDto } from '@/api/dto/deed.dto';

type InitialState = {
    value: {
        deeds: DeedDto[];
        friendDeeds: DeedDto[];
        loading: boolean;
        error: string | undefined;
    };
};

const initialState: InitialState = {
    value: {
        deeds: [],
        friendDeeds: [],
        loading: false,
        error: undefined,
    },
};
export const fetchGetDeeds = createAsyncThunk(
    'auth/fetchGetDeeds',
    async () => {
        return await Api.deeds.getDeeds();
    }
);
export const fetchGetFriendDeeds = createAsyncThunk(
    'auth/fetchGetFriendDeeds',
    async (id: string) => {
        return await Api.deeds.getFriendsDeeds(id);
    }
);
export const deedsSlice = createSlice({
    name: 'deeds',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchGetDeeds.pending, (state) => {
                state.value.loading = true;
            })
            .addCase(fetchGetDeeds.fulfilled, (state, action) => {
                state.value.deeds = action.payload;
                state.value.loading = false;
            })
            .addCase(fetchGetDeeds.rejected, (state, action) => {
                state.value.loading = false;
                state.value.error = action.error.message;
            })
            .addCase(fetchGetFriendDeeds.pending, (state) => {
                state.value.loading = true;
            })
            .addCase(fetchGetFriendDeeds.fulfilled, (state, action) => {
                state.value.friendDeeds = action.payload;
                state.value.loading = false;
            })
            .addCase(fetchGetFriendDeeds.rejected, (state, action) => {
                state.value.loading = false;
                state.value.error = action.error.message;
            });
    },
});

export default deedsSlice.reducer;
