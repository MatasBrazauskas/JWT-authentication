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
}

export type appActionState = 
    | 'LOADING'
    | 'LOGIN'
    | 'REGISTER'
    | 'BOARD'

export type appInitState = {
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