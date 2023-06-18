import { USER } from '@/api/dto/auth.dto';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '@/core/axios';
import * as Api from '@/api';
import { DeedDto } from '@/api/dto/deed.dto';

type InitialState = {
    value: {
        deeds: DeedDto[];
        loading: boolean;
        error: string | undefined;
    };
};

const initialState: InitialState = {
    value: {
        deeds: [],
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
export const fetchDeletetDeed = createAsyncThunk(
    'auth/fetchDeletetDeed',
    async (id: string) => {
        return await Api.deeds.deleteDeed(id);
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
    },
});

export default deedsSlice.reducer;
