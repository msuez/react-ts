import { useEffect, useRef, useState } from 'react';
import { axiosHttp } from '../api/axiosHttp';

import { AxiosHttp, User } from '../interfaces/AxiosHttp';

export const useUsers = () => {
    
    const [users, setUsers] = useState<User[]>([]);
    const pageRef = useRef(1);

    useEffect( () => {
        loadUsers();
    }, []);
    
    const loadUsers = async() => {
        
        // Call to the api
        const res = await axiosHttp.get<AxiosHttp>(`/users`, {
            params: {
                page: pageRef.current
            }
        });

        if( res.data.data.length > 0 ) {
            setUsers(res.data.data);
        } else {
            pageRef.current--;
            alert(`Records not found.`);
        }
        
    }
    
    const nextPage = () => {
        pageRef.current++;
        loadUsers();
    }

    const backPage = () => {
        if( pageRef.current > 1 ) {
            pageRef.current--;
            loadUsers();
        }
    }

    return { users, nextPage, backPage }

}
