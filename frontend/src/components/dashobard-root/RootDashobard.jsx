import { Outlet } from 'react-router-dom'
import SightMenu from '../sightmenu/SightMenu'

const RootDashobard = () => {
  return (
    <div>
        <SightMenu/>
        <Outlet/>
    </div>
  )
}

export default RootDashobard