import { useState, useEffect } from 'react';
import useDebounce from '../Hooks/useDebounce';

import { DEBOUNCE_DELAY } from '../Utils/constants';
import { chessPlayerAPI } from '../API/chessPlayerApi';

import { useDispatch } from 'react-redux';
import { setPhase } from '../Store/appSlice';

export const SearchBar = () => {

    const [username, setUsername] = useState('');
    const debounceSearchTerm = useDebounce(username, DEBOUNCE_DELAY);

    const dispatch = useDispatch();

    useEffect(() => {
        const getRatings = async () => {
            const response = await chessPlayerAPI(username);
            console.log(response);
            
        }
        dispatch(setPhase('LOADING'));
        getRatings();
        dispatch(setPhase('BOARD'));
    }, [debounceSearchTerm]);

    return (
        <div>
            <form>
                <input placeholder='Enter a Chess.com users name' onChange={(e) => setUsername(e.target.value)}/>
            </form>
        </div>
    );
};