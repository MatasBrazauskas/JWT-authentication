import axios from 'axios';
import { PLAYERS_RATING_URL } from '../Utils/constants';

export const chessPlayerAPI = async (username: string) => {
    const ratingsURL = PLAYERS_RATING_URL(username);
    try{

        const response = await axios.get(ratingsURL);

        if(response.status === 200){
            return response.data;
        }
        return null;

    }catch{
        return null;
    }
}
