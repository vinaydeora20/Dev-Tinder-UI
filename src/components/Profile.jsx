import React, { useEffect, useState } from 'react'
import EditUser from './EditUser'
import axios from 'axios';

const Profile = () => {
const [userDetails , setUserDetails]= useState({}) 
  const ProfileView =async()=>{
    const data = await axios.get("http://localhost:7777/profile/view",{withCredentials:true});
    console.log(data.data)
    setUserDetails(data.data)
  };
  useEffect(()=>{
    ProfileView();
  }, [])
  return (
    <div className='mt-16'>

      <EditUser user={userDetails}/>
    </div>
  )
}

export default Profile
