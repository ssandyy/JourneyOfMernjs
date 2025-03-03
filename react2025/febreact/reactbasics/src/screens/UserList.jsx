import React from 'react';

const UserList = () => {

    let data = [
        {id:1, username:'sandy', email:'ssandyy@developer.com'},
        {id:2, username:'andy', email:'andy@developer.com'},
        {id:3, username:'nady', email:'nady@developer.com'},
        {id:4, username:'mady', email:'mady@developer.com'}
    ]

    let data2 = [
        {id:11, username:'Pax', email:'Pax@developer.com'},
        {id:12, username:'Max', email:'Max@developer.com'},
        {id:13, username:'Jax', email:'jax@developer.com'},
        {id:14, username:'Lax', email:'Lax@developer.com'}
    ]
    
    return (
        <div>
            <h1>User List</h1>
            {data.map((user) => {  
                return (
                    <div key={user.id}>
                        <h2>{user.username}</h2>
                        <h3>{user.email}</h3>
                    </div>
                )
            })}

            {/* OR  */}

            {data2.map(({id, username, email}) => (
                    <div key={id}>
                        <h2>{username}</h2>
                        <h3>{email}</h3>
                    </div>
                ))}
        </div>
    );
};

export default UserList;