import { type pageActionState, type pageInitState } from "../Utils/types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState: pageInitState = {
    state: 'SEARCH',
}

const pageSlice = createSlice({
    name: 'pageState',
    initialState,
    reducers: {
        setState: (state: pageInitState, action: PayloadAction<pageActionState> ) => {
            state.state = action.payload;
        },
    }
});

export const { setState } = pageSlice.actions;

export default pageSlice.reducer;
