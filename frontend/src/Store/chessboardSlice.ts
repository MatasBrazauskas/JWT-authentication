import { type chessboardInitState } from "../Utils/types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { Chess } from 'chess.js';

const initialState: chessboardInitState = {
    fen: new Chess().fen(),
}

const chessboardSlice = createSlice({
    name: 'chessboardState',
    initialState,
    reducers: {
        setFen: (state, action: PayloadAction<string> ) => {
            state.fen = action.payload;
        },
    }
});

export const setFen  = chessboardSlice.reducer;