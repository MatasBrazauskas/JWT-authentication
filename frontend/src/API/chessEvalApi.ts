import { type StockfishRequest, type StockfishResponse } from "../Utils/types";
import { CHESS_API_URL } from "../Utils/constants";

import axios from 'axios';

export const chessEvalAPI = async (req: StockfishRequest) : Promise<StockfishResponse | null> => {
    try{
        const response = await axios.post(CHESS_API_URL, req);

        if(response.status === 200){
            return response.data;
        }
        return null;
    } catch{
        return null;
    }
} 

