import { useState, useEffect } from 'react';
import useDebounce from '../Hooks/useDebounce';

import { DEBOUNCE_DELAY } from '../Utils/constants';
import { chessPlayerAPI } from '../API/chessPlayerApi';

import { useDispatch } from 'react-redux';

import { setLoadingPhase } from '../Store/loadingSlice';
import { setState } from '../Store/pageState';
import type { PlayerRating } from '../Utils/types';

function SearchBar(){

    const [username, setUsername] = useState('');
    const debounceSearchTerm = useDebounce(username, DEBOUNCE_DELAY);

    const [playersRating, setPlayersRating] = useState<PlayerRating | null>(null);

    const dispatch = useDispatch();

    useEffect(() => {
        const getRatings = async () => {
            const response = await chessPlayerAPI(username);
            setPlayersRating(response);
        }

        dispatch(setLoadingPhase('LOADING'));
        getRatings();
        dispatch(setLoadingPhase('BOARD'));

    }, [debounceSearchTerm]);

    const switchState = () => {
        dispatch(setState('GAMES'));
    }

    return (
        <div>
            <input placeholder='Enter a Chess.com users name' onChange={(e) => setUsername(e.target.value)}/>
            {playersRating === null ? 
            <div>
                <div>No Players Found</div>
            </div>
            :
            <div>
                <div>Rapid Rating {playersRating.rapid_rating}</div>
                <div>Blitz Rating {playersRating.blitz_rating}</div>
                <div>Bullet Rating {playersRating.bullet_rating}</div>
                <button onClick={() => switchState()}>Find Games</button>
            </div>
            }
        </div>
    );
};

export default SearchBar;