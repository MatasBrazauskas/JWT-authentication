import axios from 'axios';
import { PLAYERS_GAMES_API_URL } from '../Utils/constants';
import { Chess } from 'chess.js';
import { JWT } from '../Utils/constants';

async function chessPlayersGameApi(username: string, year: number, month: number): Promise<Chess[] | null>{
    try{
        const pgnArray: Chess[] = [];
        const jwtToken = sessionStorage.getItem(JWT);
        const response = axios.get(PLAYERS_GAMES_API_URL(username, year, month), {
            headers: {
                'Authorization': `Bearer ${jwtToken}`,
            }
        });
        const array: string[] = (await response).data.split(/\n(?=\[Event )/g);

        for(const i of array){
            const game = new Chess();

            try{
                game.loadPgn(i);
                pgnArray.push(game);
            }catch(e){
                console.error(e);
            }
        }

        return pgnArray;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export default chessPlayersGameApi;