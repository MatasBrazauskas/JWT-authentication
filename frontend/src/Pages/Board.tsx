import { useRef, useState } from 'react';
import { Chessboard, type PieceDropHandlerArgs } from "react-chessboard";
import { Chess } from 'chess.js';

import { chessEvalAPI } from '../API/chessEvalApi';
import { type AppDispatch, type RootState } from '../Store/store';
import { useDispatch, useSelector } from 'react-redux';

import { setFen } from '../Store/chessboardSlice';
import { setPhase } from '../Store/appSlice';

import { BarLoader } from 'react-spinners';

import { SearchBar } from '../Components/SearchBar';

function Board() {

    const dispatch = useDispatch<AppDispatch>();

    const chessGameRef = useRef(new Chess());
    const chessGame = chessGameRef.current;
    const [position, setPosition] = useState<string>(useSelector((state: RootState) => state.chessboardState).fen);
    const isLoading: boolean = useSelector((state: RootState) => state.appState.phase === 'LOADING');

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
        dispatch(setPhase('LOADING'));
        const temp = { fen: chessGame.fen(), depth: 12};
        const responce = await chessEvalAPI(temp);

        if(!responce){
            console.error("Can't send data to backend for API!");
        }else{
            console.log(responce);
            dispatch(setFen(chessGame.fen()));
        }
        dispatch(setPhase('BOARD'));
    }

    return (
        <div>
            <BarLoader loading={isLoading} width='700px'/>
            <Chessboard options={chessboardOptions}/>
            <button onClick={() => idk()}>Data</button>
            <SearchBar/>
        </div>
    );
};

export default Board;
