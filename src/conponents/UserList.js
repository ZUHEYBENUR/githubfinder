import React from 'react';
import User from "./User";
import { useContext } from 'react';
import { UsersContext } from './context/usersContext';

const UserList = () => {
  const{users}=useContext(UsersContext);

  return (
    <div>
        {
          users.map((user)=>(
            <User user={user} key={user.id}/>
          ))
        }
    </div>
  )
}

export default UserList