import { Outlet } from 'react-router-dom'
import SightMenu from '../sightmenu/SightMenu'

const RootDashobard = () => {
  return (
    <div >
      <div className="container mx-auto px-2">
        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-2 shadow-lg">
            <SightMenu/>
          </div>
          <div className="col-span-10">
            <Outlet/>
          </div>

        </div>
      </div>
    </div>
  )
}

export default RootDashobard