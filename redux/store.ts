import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import deedsReducer from './slices/deedsSlice';
import friendsReducer from './slices/friendsSlice';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

export const store = configureStore({
    reducer: {
        userReducer,
        deedsReducer,
        friendsReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
