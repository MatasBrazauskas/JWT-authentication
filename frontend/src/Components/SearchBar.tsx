import { useState, useEffect } from 'react';
import useDebounce from '../Hooks/useDebounce';

import { DEBOUNCE_DELAY } from '../Utils/constants';
import { chessPlayerAPI } from '../API/chessPlayerApi';

export const SearchBar = () => {

    const [username, setUsername] = useState('');
    const debounceSearchTerm = useDebounce(username, DEBOUNCE_DELAY);

    useEffect(() => {
        console.log();
        const getRatings = async () => {
            const response = await chessPlayerAPI(username);
            console.log(response);
            
        }
        getRatings();
    }, [debounceSearchTerm]);

    return (
        <div>
            <form>
                <input placeholder='Enter a Chess.com users name' onChange={(e) => setUsername(e.target.value)}/>
            </form>
        </div>
    );
};