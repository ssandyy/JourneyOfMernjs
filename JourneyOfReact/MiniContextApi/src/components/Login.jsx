
import React, { createElement, useContext, useState } from 'react'
import UserContext from '../context/UserContext';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const  {setUser} = useContext(UserContext);

    const handleLogin = (e) => {
        e.preventDefault()
        setUser({username, password})
    }

  return (
    <>
    <div>Login</div>
    <input type='text' placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)}  />
    <input type='password' placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)}  />
    <button onClick={handleLogin}>Submit</button>
    </>
    
  )
}

export default Login