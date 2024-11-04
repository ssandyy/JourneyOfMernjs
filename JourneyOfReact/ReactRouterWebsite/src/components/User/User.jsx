import React, { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';

const User = () => {
    const [userData, setUserData] = useState([0])
    useEffect( () => {
      fetch('https://api.github.com/users/ssandyy')
      .then(response => response.json())
      .then(userData => {
        console.log(userData);
        setUserData(userData)
      })
    },[]);

    const {userid} = useParams();

  return (
    <>
    <div className='text-center m-4 bg-gray-500 text-white p-4 text-3xl'>
      User Following : {userData.following}
      <img src={userData.avatar_url} alt="profile image " width="300px" height="200px" />
    </div>
   <div>User Id : {userid}</div>       {/* http://localhost:5173/user/sandeep */}
    </>
    
  )
}

export default User