import axios from 'axios';
import React, { useState } from 'react';
import { BASE_URL } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/slices/userSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
const Login = () => {
    const [emailId, setEmailId] = useState("komal@gmail.com");
    const [password , setPassword]= useState("Komal@1234");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogin = async ()=>{
      try{
          const data = await axios.post("http://localhost:7777/login", {
            emailId,
            password,
        },{
            withCredentials:true    
        });
      
        dispatch(addUser(data.data));
        navigate("/feed");
         toast.success("Login succesfull");
      }catch(err){
        console.log(err.message)
        toast.error("Login failed: " + err.message);
      }
    }
  return (
     <div
            className="h-[100vh] flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: "url('https://tinder.com/static/build/8ad4e4299ef5e377d2ef00ba5c94c44c.webp')" }}
        >
      <div 
    className=" flex items-center justify-center bg-cover bg-center" 
   
  >
    <div className="w-auto  p-6 bg-gray-900  rounded-lg shadow-md" >
      <h2 className="text-2xl font-bold text-center mb-6 text-white">Login</h2>
      {/* Email Field */}
      <div className="mb-4">
        <label className="input-validator flex items-center border-b border-gray-300 pb-2 focus-within:border-blue-500 transition-colors">
          <svg className="h-[1em] w-5 opacity-50 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <path d="M22 6l-10 7L2 6"></path>
            </g>
          </svg>
          <input
            type="email"
            className="flex-grow outline-none bg-transparent"
            required
            value={emailId}
            onChange={(e)=>setEmailId(e.target.value)}
            placeholder="Email address"
          
            title="Please enter a valid email address"
          />
        </label>
        <p className="validator-hint text-xs text-gray-500 mt-1">
          Enter your registered email address
        </p>
      </div>

      {/* Password Field */}
      <div className="mb-6">
        <label className="input-validator flex items-center border-b border-gray-300 pb-2 focus-within:border-blue-500 transition-colors">
          <svg className="h-[1em] w-5 opacity-50 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </g>
          </svg>
          <input
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className="flex-grow outline-none bg-transparent"
            required
            placeholder="Password"
            minLength="8"
            title="Password must be at least 8 characters"
          />
        </label>
        <p className="validator-hint text-xs text-gray-500 mt-1">
          Must be at least 8 characters
        </p>
      </div>

      {/* Login Button */}
      <button
        onClick={handleLogin}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Login
      </button>

      {/* Additional Links */}
      <div className="mt-4 text-center text-sm">
        <a href="#" className="text-blue-600 hover:underline">Forgot password?</a>
        <span className="mx-2 text-gray-400">|</span>
        <a href="#" className="text-blue-600 hover:underline">Create account</a>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Login;