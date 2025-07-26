export type FormObj = {
    username: string,
    password: string,
    email: string
}

export type FormError = {
    username?: string,
    password?: string,
    email?: string,
}

export type AuthenticationProps = {
    URL: string,
    stage: "LOGIN" | "REGISTER";
}

export type loadingActionState = 
    | 'LOADING'
    | 'LOGIN'
    | 'REGISTER'
    | 'BOARD'

export type loadingInitState = {
    phase: string,
}

export type chessboardInitState = {
    fen: string,
}

export type StockfishRequest = {
    fen: string,
    depth: number,
}

export type StockfishResponse = {
    success: boolean,
    evaluation: number,
    mate: number | null,
    depth: number,
    bestmove: string,
    continuation: string,
}

export type PlayerRating = {
    rapid_rating: number,
    blitz_rating: number,
    bullet_rating: number,
}

export type pageActionState = 
    | "SEARCH"
    | "GAMES"
    | "ANALYZE"

export type pageInitState = {
    state: string,
}