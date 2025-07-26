import { type loadingActionState, type loadingInitState } from "../Utils/types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState: loadingInitState = {
    phase: 'LOGIN',
}

const loadingSlice = createSlice({
    name: 'appState',
    initialState,
    reducers: {
        setLoadingPhase: (state: loadingInitState, action: PayloadAction<loadingActionState> ) => {
            state.phase = action.payload;
        },
    }
});

export const { setLoadingPhase } = loadingSlice.actions;

export default loadingSlice.reducer;