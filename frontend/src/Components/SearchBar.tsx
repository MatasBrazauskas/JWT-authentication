import { useRef, useEffect } from 'react';
import useDebounce from '../Hooks/useDebounce';

import { DEBOUNCE_DELAY } from '../Utils/constants';
import { chessPlayerAPI } from '../API/chessPlayerApi';

export const SearchBar = () => {

    const input = useRef<HTMLInputElement | null>(null);
    const debounceSearchTerm = useDebounce(input, DEBOUNCE_DELAY);

    useEffect(() => {
        console.log(input.current?.value);
        const getRatings = async () => {
            const username = input.current?.value;
            if(username){
                const response = await chessPlayerAPI(username);
                console.log(response);
            }
        }
        getRatings();
    }, [debounceSearchTerm]);

    return (
        <div>
            <form>
                <input placeholder='Enter a Chess.com users name' ref = {input}/>
            </form>
        </div>
    );
};