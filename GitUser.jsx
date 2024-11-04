import React from 'react'
import { useLoaderData } from 'react-router-dom'

// Using "Loader" (will do same as user.jsx but more optimize way )
const GitUser = () => {
    const userData = useLoaderData();

  return (
    <>
        <div>User Login: {userData.login}</div>
    </>
  )
}

export default GitUser;

export const gitUserInfo = async () => {    // call this function in Route loader
    const response = await fetch("https://api.github.com/users/ssandyy")
    return response.json();
}