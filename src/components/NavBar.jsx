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
    const handleLogout = async () => {
        try {
            const req = await axios.post("http://localhost:7777/logout", {}, { withCredentials: true });
            toast.success(req.message);
            dispatch(removeUser())
            navigate("/home")
        } catch (err) {
            console.error(err.message)
        }
    }
    
    console.log('user', user)
    return (
        <div className=" fixed top-0 left-0 w-full flex justify-between items-center  py-4 z-50 bg-gradient-to-b from-[#08080b] to-transparent flex-wrap md:px-8 md:py-4 ">

            <div className="flex-1 ">
                {user ? <Link to="/feed" className="btn btn-ghost text-xl md:text-2xl ">DevTinder</Link> : <Link to="/" className="btn btn-ghost text-4xl md:text-2xl">DevTinder</Link>}
            </div>
            {!user && <button type="button" onClick={() => navigate("/login")} className="md:text-sm  md:px-5 md:py-2.5  cursor-pointer text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-white-800 dark:text-black dark:border-gray-600 dark:hover:bg-gray-200 dark:hover:border-gray-600 dark:focus:ring-gray-700">Login</button>
            }
            {user && <div className="flex gap-2 mx-5">

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
                            <Link to="/profile" className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </Link>
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
