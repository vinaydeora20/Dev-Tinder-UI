import React from 'react'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Body from './components/Body'
import Login from './components/Login'
import { Provider } from 'react-redux'
import appStore from './utils/store/appStore'
import Profile from './components/profile'
import Splash from './components/Splash.jsx';
  import { ToastContainer, toast } from 'react-toastify';
import Home from './components/Home.jsx'
import Feed from './components/Feed.jsx'
const App = () => {
  return (
    <div>
      <Provider store={appStore}>
      <Router>
        <Routes>
         {/* Splash page first */}
          <Route path="/" element={<Splash />} />
          <Route path='/' element = {<Body/>}>
            <Route path='/home' element = {<Home/>}/>
              <Route path='/login' element = {<Login/>}/>
               <Route path='/feed' element = {<Feed />}/>
              <Route path='/profile' element = {<Profile/>}/>
          </Route>
        </Routes>
      </Router>
        <ToastContainer position="top-right" autoClose={3000} />
      </Provider>
    </div>
  )
}

export default App
