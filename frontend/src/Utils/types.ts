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
    | { type: 'LOGIN' }
    | { type: 'REGISTER' }
    | { type: 'SEND-EMAIL' }