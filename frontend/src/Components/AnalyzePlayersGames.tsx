import { useContext, useRef } from 'react'; 
import chessboardContext from '../Utils/chessboardContext';
import { useDispatch } from 'react-redux';

import { setChessboard } from '../Store/chessboardSlice';

function AnalyzePlayersGames(){

    const singleChessGame = useContext(chessboardContext);
    const dispatch = useDispatch();
    const count = useRef(0);

    const moveForward = () => {
        count.current++;
        dispatch(setChessboard({ history: singleChessGame.current.history() ,length: count.current }));
    }

    return (
        <div>
            {singleChessGame?.current.history()}
            <button onClick={() => moveForward()}>{'>'}</button>
        </div>
    )
};
export default AnalyzePlayersGames;