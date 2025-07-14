import { useRef, useState } from 'react';
import { Chessboard, type PieceDropHandlerArgs } from "react-chessboard";
import { Chess } from 'chess.js';

import { sendData } from '../API/chessApi';

function Board() {

    const chessGameRef = useRef(new Chess());
    const chessGame = chessGameRef.current;
    const [position, setPosition] = useState(chessGame.fen());

    const onPieceDrop = ({sourceSquare, targetSquare} : PieceDropHandlerArgs) : boolean => {
        if(!targetSquare){
            return false;
        }

        try{

            console.log(`${sourceSquare} and ${targetSquare}`);
            chessGame.move({
                from: sourceSquare,
                to: targetSquare,
                promotion: 'q',
            });

            console.log('Hello');

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
        id: 'idk'
    };

    const idk = async () => {
        const temp = { fen: chessGame.fen(), depth: 8};
        console.log(temp);
        const i = await sendData(temp)
        console.log(i);
    }

    return (
        <div>
            <Chessboard options={chessboardOptions}/>
            <button onClick = {() => idk()}>Data</button>
        </div>
    );
};

export default Board;