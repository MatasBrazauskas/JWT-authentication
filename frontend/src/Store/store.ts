import { setFen } from './chessboardSlice.ts';
import { setPhase } from "./appSlice.ts";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        chessboardState: setFen,
        appState: setPhase,
    }   
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
