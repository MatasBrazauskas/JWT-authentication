import { type StockfishRequest, type StockfishaResponse } from "../Utils/types";
import { STOCKFISH_API_URL } from "../Utils/constants";

import axios from 'axios';

export const chessApi = async (req: StockfishRequest) : Promise<StockfishaResponse | null> => {
    try{
        const response = await axios.post(STOCKFISH_API_URL, req);

        if(response.status === 200){
            return response.data;
        }
        return null;
    } catch{
        return null;
    }
} 

