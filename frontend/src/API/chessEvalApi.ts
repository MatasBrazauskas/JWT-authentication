import { type StockfishRequest, type StockfishResponse } from "../Utils/types";
import { CHESS_API_URL } from "../Utils/constants";
import { JWT } from "../Utils/constants";
import axios from 'axios';

export const chessEvalAPI = async (req: StockfishRequest) : Promise<StockfishResponse | null> => {
    try{
        const jwtToken = sessionStorage.getItem(JWT);
        const response = await axios.post(CHESS_API_URL, req, {
            headers: {
                'Authorization': `Bearer ${jwtToken}`,
                'Content-Type': 'application/json'
            }
        });

        if(response.status === 200){
            return response.data;
        }
        console.error(response);
        return null;
    } catch(e){
        console.error(e);
        return null;
    }
} 

