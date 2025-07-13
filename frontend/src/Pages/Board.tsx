import { useRef, useState } from 'react';

import { Chessboard, type PieceDropHandlerArgs } from "react-chessboard";
import { Chess } from 'chess.js';

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

    return (
        <div>
            <Chessboard options={chessboardOptions}/>
        </div>
    );
};

export default Board;