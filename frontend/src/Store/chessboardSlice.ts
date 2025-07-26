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
        setChessboard: (state, action: PayloadAction<{ history: string[], length: number }>) => {
            if (!state.fen || action.payload.length <= 0) return;

            const { history, length } = action.payload;

            const subsetChessGame = new Chess();

            for (let i = 0; i < length && i < history.length; i++) {
                subsetChessGame.move(history[i]);
            }

            state.fen = subsetChessGame.fen();
        }
    }
});

export const { setChessboard } = chessboardSlice.actions;

export default chessboardSlice.reducer;