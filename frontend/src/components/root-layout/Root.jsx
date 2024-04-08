import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../navbar/Navbar'
import SightMenu from '../sightmenu/SightMenu'

const Root = () => {
  return (
    <>
      <div className='grid grid-cols-12 '>
        <div className="col-span-2">
          <SightMenu/>
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