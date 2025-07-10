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