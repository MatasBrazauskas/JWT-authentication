import { type ActionState, type ReduxInitState } from "../Utils/types";
import { configureStore, createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState: ReduxInitState = {
    phase: 'LOGIN',
}

const slice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setPhase: (state: ReduxInitState, action: PayloadAction<ActionState> ) => {
            state.phase = action.type;
        },
    }
});


const store = configureStore({
    reducer: {
        app: slice.reducer,
    }
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;