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

export type ActionState = 
    | { type: 'LOADING' }
    | { type: 'LOGIN' }
    | { type: 'REGISTER' }
    | { type: 'BOARD' }

export type ReduxInitState = {
    phase: string,
}