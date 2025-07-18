import { type appActionState, type appInitState } from "../Utils/types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState: appInitState = {
    phase: 'LOGIN',
}

const appSlice = createSlice({
    name: 'appState',
    initialState,
    reducers: {
        setPhase: (state: appInitState, action: PayloadAction<appActionState> ) => {
            state.phase = action.payload;
        },
    }
});

export const { setPhase } = appSlice.actions;

export default appSlice.reducer;