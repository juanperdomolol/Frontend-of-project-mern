import React from 'react'
import UsersList from './../components/UsersList';

export const Users = () => {
    const users = [
        {
            id: 1,
            name: 'John Doe',
            image: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg',
            places: 3
        }
    ]
  return (
    <UsersList items={users} />
    )
}
