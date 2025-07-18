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
    | { type: 'LOADING' }
    | { type: 'LOGIN' }
    | { type: 'REGISTER' }
    | { type: 'BOARD' }

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

export type StockfishaResponse = {
    success: boolean,
    evaluation: number,
    mate: number | null,
    depth: number,
    bestmove: string,
    continuation: string,
}