import { Outlet } from 'react-router-dom'
import SightMenu from '../sightmenu/SightMenu'
import Navbar from '../navbar/Navbar'

const RootDashobard = () => {
  return (
    <div >
      <div className="container mx-auto px-2">
        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-2 shadow-lg pt-20">
            <SightMenu/>
          </div>
          <div className="col-span-10">
            <Navbar/>
            <Outlet/>
          </div>

        </div>
      </div>
    </div>
  )
}

export default RootDashobard