const AUTHENTICATE_URL = import.meta.env.VITE_LOGIN_URL;
export const REGISTER_URL = AUTHENTICATE_URL+'/register';
export const LOGIN_URL = `${AUTHENTICATE_URL}/login`
export const JWT = 'jwtToken';

export const CHESS_API_URL:string = import.meta.env.VITE_CHESS_API_URL;
export const PLAYERS_RATING_URL = (username: string):string => {return `${CHESS_API_URL}/player/${username}`;}

export const PLAYERS_GAMES_API_URL = (username: string, year: number, month: number) => {return `https://api.chess.com/pub/player/${username}/games/${year}/0${month}/pgn`};

export const DEBOUNCE_DELAY = 500;
export const MAX_CHESSGAMES = 20;
export const CHESS_DEPTH = 12;