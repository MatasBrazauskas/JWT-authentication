import chessboardReducer from './chessboardSlice'; 
import appReducer from "./appSlice";

import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        chessboardState: chessboardReducer, 
        appState: appReducer,
    }   
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;