import React, { useEffect, useReducer } from 'react';

import { authReducer } from '../reducers/authReducer';

const initState = {
    checking: true,
    token: null,
    name: null,
    email: null,
}

export const Signin = () => {

    const [ { 
        checking,
        token,
        email,
        name
    }, dispatch] = useReducer(authReducer, initState);

    useEffect(() => {
        setTimeout(() => {
            dispatch({
                type: 'signout',
            });
        }, 1500);
    }, []);

    if( checking ) {
        return (
            <>
                <h3>Sign in</h3>
                <div className="alert alert-info">
                    Checking authentication...
                </div>
            </>
        );
    }

    const signin = () => {
        dispatch({
            type: 'signin',
            payload: {
                name: 'Matias',
                email: 'matisuez@gmail.com',
            }
        });
    }

    const signout = () => {
        dispatch({
            type: 'signout',
        });
    }

    return (
        <>
            <h3>Sign in</h3>

            {
                ( token ) ? 
                    <>
                        <h4>Welcome { name } </h4>
                        <div className="alert alert-info">Authenticated as: { email }</div>
                    </>
                    :
                    <div className="alert alert-danger">No authenticated</div>
            }

            {
                ( token ) ? 
                    (   
                        <button
                            className="btn btn-danger"
                            onClick={ signout }
                        >
                            Sign out
                        </button>         
                    )
                :
                    (            
                        <button
                            className="btn btn-primary"
                            onClick={ signin }
                        >
                            Sign in
                        </button>
                    )
            }



        </>
    )
}
