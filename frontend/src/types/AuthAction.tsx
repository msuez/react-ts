
type AuthPayload = {
    email: string;
    name: string;
}

export type AuthAction =
    | { type: 'signout' }
    | { type: 'signin', payload: AuthPayload };
    

