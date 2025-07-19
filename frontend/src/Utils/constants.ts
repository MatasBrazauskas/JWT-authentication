const AUTHENTICATE_URL = import.meta.env.VITE_LOGIN_URL;
export const REGISTER_URL = AUTHENTICATE_URL+'/register';
export const LOGIN_URL = `${AUTHENTICATE_URL}/login`
export const JWT = 'jwtToken';

export const CHESS_API_URL:string = import.meta.env.VITE_CHESS_API_URL;
export const PLAYERS_RATING_URL = (username: string):string => {return `${CHESS_API_URL}/player/${username}`;}

export const DEBOUNCE_DELAY = 500;