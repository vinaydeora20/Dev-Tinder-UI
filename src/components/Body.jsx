import React from 'react'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (

    <div className='body-comp '>
      <NavBar />
      <Outlet />
    </div>
  )
}

export default Body
