// src/components/AuthGate.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/slices/userSlice.jsx";

// Optional: yahi pe defaults set kar lo
axios.defaults.withCredentials = true;

const AuthGate = ({ splash: Splash, children }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get("http://localhost:7777/me", { withCredentials: true });
        dispatch(addUser(res.data)); // user store mein daal do
      } catch (err) {
        console.error("User not logged in");
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [dispatch]);

  if (loading) return <Splash />;  // Jab tak pata nahi ki login hai ya nahi, loader dikhate raho
  return children;                 // Jab check ho gaya tabhi routes dikhao
};


export default AuthGate;
