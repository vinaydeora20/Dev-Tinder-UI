import React, { useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Body from './components/Body'
import Login from './components/Login'
import { useDispatch, useSelector } from 'react-redux'
import Profile from './components/profile'
import Splash from './components/Splash.jsx';
import { ToastContainer, toast } from 'react-toastify';
import Home from './components/Home.jsx'
import Feed from './components/Feed.jsx'
import PrivateRoute from './components/PrivateRoute.jsx';
import AuthGate from "./components/AuthGate.jsx";
import ConnectionRequests from './components/ConnectionRequests.jsx'
import NavBar from './components/NavBar.jsx'
import Connections from './components/Connections.jsx'
const App = () => {
  const user = useSelector((store) => store.user);
  return (
    <AuthGate splash={Splash}>
  <NavBar />
      <Routes>

        <Route path="/" element={user ? <Navigate to="/feed" replace /> : <Navigate to="/login" replace />} />
        <Route path="/login" element={user ? <Navigate to="/feed" replace /> : <Login />} />

        <Route element={<Body />}>
          <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
          <Route path="/feed" element={<PrivateRoute><Feed /></PrivateRoute>} />
          <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
                <Route path="/connections" element={<PrivateRoute><Connections /></PrivateRoute>} />
           <Route path="/connectionRequests" element={<PrivateRoute><ConnectionRequests /></PrivateRoute>} />
        </Route>
      </Routes>

      <ToastContainer position="top-right" autoClose={3000} />

    </AuthGate>
  )
}

export default App
