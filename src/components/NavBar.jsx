import axios from 'axios';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { removeUser } from '../utils/slices/userSlice';
const NavBar = () => {
    const user = useSelector((store) => store.user);
    const navigate = useNavigate();
      const dispatch = useDispatch();  
    const handleLogout =async() =>{
          try{
          const req = await axios.post("http://localhost:7777/logout");
           toast.success(req.message);
            dispatch(removeUser())
           navigate("/home")
          } catch(err){
            console.error(err.message)
          }
        }
    return (
        <div className="navbar bg-base-100 ">
            <div className="flex-1 ">
                {user ? <Link to="/feed" className="btn btn-ghost text-xl">DevTinder</Link> : <Link to="/" className="btn btn-ghost text-xl">DevTinder</Link>}
            </div>
            {!user && <button className="btn btn-warning" onClick={() => navigate('/login')}>login</button>}
            {user && <div className="flex gap-2">

                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><button onClick={handleLogout}>Logout</button></li>
                    </ul>
                </div>
            </div>}
        </div>
    )
}

export default NavBar
