import { AuthState } from '../interfaces/AuthState';
import { AuthAction } from '../types/AuthAction';

export const authReducer = ( 
    state: AuthState, 
    action: AuthAction
    ): AuthState  => {
    switch ( action.type ) {

        case 'signout':
            return {
                checking: false,
                token: null,
                name: null,
                email: null,
            }

        case 'signin':
            
            const { 
                name, 
                email 
            } = action.payload;

            return {
                checking: false,
                token: 'asdasd',
                name: name,
                email: email,
            }
    
        default:
            return state;
    }
}