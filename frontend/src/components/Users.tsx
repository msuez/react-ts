import { User } from '../interfaces/AxiosHttp';
import { useUsers } from '../hooks/useUsers';

export const Users = () => {

    const { users, nextPage, backPage } = useUsers()

    const renderItem = ( user: User ) => {
        return (
            <tr key={ user.id.toString() }>
                <td>
                    <img 
                        src={ user.avatar } 
                        alt={ `${user.last_name}-${user.first_name}` } 
                        style={{
                            width: 35,
                            borderRadius: 100,
                        }}
                    />
                </td>
                <td>{ user.first_name } { user.last_name }</td>
                <td>{ user.email }</td>
            </tr>
        )
    }

    return (
        <>
            <h3>Users:</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Icon</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map( user => renderItem(user) )
                        //users.map( renderItem )
                    }
                </tbody>
            </table>
    
            <button
                className="btn btn-secondary"
                onClick={ backPage }
                >
                Back
            </button>
            &nbsp;
            <button
                className="btn btn-secondary"
                onClick={ nextPage }
            >
                Next
            </button>
        </>   
    )
}
