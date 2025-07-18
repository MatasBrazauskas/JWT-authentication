import { useRef, useState } from 'react';
import { Chessboard, type PieceDropHandlerArgs } from "react-chessboard";
import { Chess } from 'chess.js';

import { chessApi } from '../API/chessApi';
import { type AppDispatch, type RootState } from '../Store/store';
import { useDispatch, useSelector } from 'react-redux';

import { setFen } from '../Store/chessboardSlice';
import { setPhase } from '../Store/appSlice';

function Board() {

    const dispatch = useDispatch<AppDispatch>();

    const chessGameRef = useRef(new Chess());
    const chessGame = chessGameRef.current;
    const [position, setPosition] = useState<string>(useSelector((state: RootState) => state.chessboardState).fen);

    const onPieceDrop = ({sourceSquare, targetSquare} : PieceDropHandlerArgs) : boolean => {
        if(!targetSquare){
            return false;
        }

        try{

            chessGame.move({
                from: sourceSquare,
                to: targetSquare,
                promotion: 'q',
            });

            setPosition(chessGame.fen());
            return true;
        }catch(e){
            return false
        }
    }

    const chessboardOptions = {
        position: position,
        onPieceDrop,
        allowDragOffBoard: false,
        id: 'idk',
        boardStyle: {
            width: 700,
        },
    };

    const idk = async () => {
        const temp = { fen: chessGame.fen(), depth: 12};
        const responce = await chessApi(temp);

        if(!responce){
            console.error("Can't send data to backend for API!");
        }else{
            dispatch(setFen(temp);
        }
    }

    return (
        <div>
            <Chessboard options={chessboardOptions}/>
            <div></div>
            <button onClick = {() => idk()}>Data</button>
        </div>
    );
};

export default Board;
