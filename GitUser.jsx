import React from 'react';
import { useLoaderData } from 'react-router-dom';

// Using "Loader" (will do same as user.jsx but more optimize way )
const GitUser = () => {
    const userData = useLoaderData();

  return (
    <>
        <div>User Name: {userData.name}</div> 
        <div>User Login: {userData.avatar_url}</div> 
        <div>User Login: {userData.location}</div> 
        <div>User Created at: {userData.created_at}</div> 
    </>
  )
}

export default GitUser;

export const gitUserInfo = async () => {    // call this function in Route loader
    const response = await fetch("https://api.github.com/users/ssandyy")
    return response.json();
}