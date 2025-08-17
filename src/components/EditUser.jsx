import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import UserCard from './UserCard';
const EditUser = ({user}) => {
    console.log(user.user)
const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [age, setAge] = useState("");
const [gender, setGender] = useState("");
const [photoUrl, setPhotoUrl] = useState("");
const [about, setAbout] = useState("");

useEffect(() => {
  if (user) {
    setFirstName(user.firstName || "");
    setLastName(user.lastName || "");
    setAge(user.age || "");
    setGender(user.gender || "");
    setPhotoUrl(user.photoUrl || "");
    setAbout(user.about || "");
  }
}, [user]);
   const handleEdit = async () => {
        try {
            const req = await axios.patch("http://localhost:7777/profile/edit", {firstName,lastName ,about ,age ,gender ,photoUrl}, { withCredentials: true });
           toast.success(req.data.message || "Profile updated");
        } catch (err) {
            console.error(err.message)
        }
    }
    
    return (
        <div>
            EditUser
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 mx-auto">
                <legend className="fieldset-legend">profile</legend>

                <label className="label">First Name </label>
                <input type="text" className="input" value={firstName} onChange={(e)=>setFirstName(e.target.value)} />

                <label className="label">Last Name</label>
                <input type="text" className="input" value={lastName} onChange={(e)=>setLastName(e.target.value)}/>


                <label className="label">Photo Url</label>
                <input type="text" className="input" value={photoUrl} onChange={(e)=>setPhotoUrl(e.target.value)} />

                <label className="label">Age</label>
                <input type="text" className="input" value={age} onChange={(e)=>setAge(e.target.value)}/>

                <label className="label">Gender</label>
                <input type="text" className="input" value={gender} onChange={(e)=>setGender(e.target.value)} />

                <label className="label">About</label>
                <input type="text" className="input" value={about} onChange={(e)=>setAbout(e.target.value)} />

                <button className="btn btn-neutral mt-4" onClick={handleEdit}>Update Profile</button>
            </fieldset>
            <UserCard user={{firstName, lastName , about , age , gender ,photoUrl}}/>
        </div>
    )
}

export default EditUser;
