
import { useForm } from '../hooks/useForm';

export const Forms = () => {

    const { 
        email, 
        password, 
        handleInputChange 
    } = useForm({
        email: 'matisuez@gmail.com',
        password: '1234',
    });

    return (
        <>
            <h3>Forms</h3>
            
            <input
                type="text"
                className="form-control"
                placeholder="Email"
                value={ email }
                onChange={ 
                    ( { target } ) => handleInputChange( target.value, 'email') 
                }
            />

            <input
                type="password"
                className="form-control"
                placeholder="Password"
                value={ password }
                onChange={
                    ( { target } ) => handleInputChange( target.value, 'password')
                }
            />

        </>
    )
}
