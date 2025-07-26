import chessboardReducer from './chessboardSlice'; 
import appReducer from "./loadingSlice";
import pageReducer from './pageState';

import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        chessboardState: chessboardReducer, 
        loadingState: appReducer,
        pageState: pageReducer,
    },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;