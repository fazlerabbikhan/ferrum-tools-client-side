import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UsersRow from './UsersRow';


const Users = () => {

    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://guarded-basin-69517.herokuapp.com/users', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h1 className="text-2xl">All Users: {users.length}</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <UsersRow
                                key={user._id}
                                index={index}
                                user={user}
                                refetch={refetch}
                            ></UsersRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;