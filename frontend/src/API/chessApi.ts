import { type StockfishRequest } from "../Utils/types";
import { STOCKFISH_API_URL } from "../Utils/constants";

import axios from 'axios';

export const sendData = async (req: StockfishRequest) => {
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

