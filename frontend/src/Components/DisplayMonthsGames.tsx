import { useEffect, useState, useContext } from "react";
import chessPlayersGameApi from "../API/chessPlayersGameApi";
import { Chess } from "chess.js";

import { MAX_CHESSGAMES } from "../Utils/constants";
import { useDispatch } from "react-redux";

import { setState } from '../Store/pageState';
import chessboardContext from "../Utils/chessboardContext";

function DisplayMonthsGames({username} : {username: string}){

    const [playersGames, setPlayersGames] = useState<Chess[] | null>(null);
    const dispatch = useDispatch();

    const singleChessGame = useContext(chessboardContext);

    useEffect(() => {
        const temp = async () => {
            const chessArray = await chessPlayersGameApi(username,2025,5);
            
            if(chessArray === null){
                console.error("Can't get games!")
                return;
            }
            setPlayersGames(chessArray.slice(0, MAX_CHESSGAMES));
        }
        temp();
    },[]);

    const handleClick = (chess: Chess) => {
        if(singleChessGame === null){
            return;
        }
        singleChessGame.current = chess;
        dispatch(setState("ANALYZE"));
    }

    return (
        <div>
            {playersGames?.map((chessGame, i) => {
                const temp = chessGame.getHeaders();
                return <div key={i} onClick={() => handleClick(chessGame)}>
                    <div>{temp.TimeControl}</div>
                    <div>{temp.White}</div>
                    <div>{temp.WhiteElo}</div>
                    <div>{temp.Black}</div>
                    <div>{temp.BlackElo}</div>
                    <div>{temp.Result}</div>

                </div>
            })}
        </div>
    );
}

export default DisplayMonthsGames;