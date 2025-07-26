import axios from 'axios';
import { type PlayerRating } from '../Utils/types';
import { PLAYERS_RATING_URL } from '../Utils/constants';
import { JWT } from '../Utils/constants';

export const chessPlayerAPI = async (username: string) : Promise<PlayerRating | null> => {
    const ratingsURL = PLAYERS_RATING_URL(username);
    try{
        const jwtToken = sessionStorage.getItem(JWT);
        console.log(jwtToken);
        const response = await axios.get(ratingsURL, {
            headers: {
                'Authorization' : `Bearer ${jwtToken}`,
                'Content-Type': 'application/json'
            }
        });

        if(response.status === 200){
            return response.data;
        }
        console.error(response);
        return null;

    }catch (e){
        console.error(e);
        return null;
    }
}
