import React from 'react'
import { Outlet } from 'react-router-dom'
import ActiveUser from '../active-user/ActiveUser'
import Navbar from '../navbar/Navbar'

const Root = () => {
  return (
    <>
      <div className='grid grid-cols-12 '>
        <div className="col-span-2">
          <ActiveUser/>
        </div>
        <div className='col-span-10'>
          <Navbar/>
          <Outlet/>
        </div>
      </div>
    </>
  )
}

export default Root