const AUTHENTICATE_URL = import.meta.env.VITE_LOGIN_URL;
export const REGISTER_URL = AUTHENTICATE_URL+'/register';
export const LOGIN_URL = AUTHENTICATE_URL+'/login'
export const JWT = 'jwtToken';