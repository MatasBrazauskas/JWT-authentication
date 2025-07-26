import { Chessboard/*, type PieceDropHandlerArgs*/ } from "react-chessboard";
import { useState, useEffect } from 'react';
import { Line } from 'rc-progress';

import type { RootState } from '../Store/store';
import { chessEvalAPI } from "../API/chessEvalApi";
import { CHESS_DEPTH } from "../Utils/constants";
import { setLoadingPhase } from "../Store/loadingSlice";

import { useDispatch, useSelector } from 'react-redux';
import type { loadingActionState, StockfishResponse } from "../Utils/types";

function Board() {

    const chessFen = useSelector((state: RootState) => state.chessboardState.fen);
    const [chessAnalysis, setChessAnalysis] = useState<StockfishResponse | null>(null);
    const evaluation = chessAnalysis === null ? 50 : chessAnalysis.evaluation*10 + 50;

    const dispatch = useDispatch();
    const state = useSelector((state: RootState) => state.loadingState);

    useEffect(() => {
        const apiCall = async () => {
            const requestData = { fen : chessFen, depth: CHESS_DEPTH};
            const response = await chessEvalAPI(requestData);

            console.log(response);
            setChessAnalysis(response);
        }
        apiCall();
        console.log(`This is evaluation ${evaluation}`);
    }, []);

    const chessboardOptions = {
        position: chessFen,
        allowDragOffBoard: false,
        id: 'idk',
        boardStyle: {
            width: 700,
        },
    };

    return (
        <div>
            <div
            style={{
                transform: 'rotate(-90deg)',
            }}
            >
            <Line
                percent={evaluation}
                strokeLinecap="butt"
                style={{
                    width: '700px',
            }}/>
            </div> 
           {chessAnalysis?.evaluation}
            <Chessboard options={chessboardOptions}/>
        </div>
    );
};

export default Board;
