import React from 'react'
import List from '../list/List'
import ListItem from '../list/ListItem'
import Button from '../button/Button'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { activeUser } from '../../fetures/users/userSlice'
// import { Button } from 'antd'

const Navbar = () => {

    const user = useSelector((state)=>(state.user.value))
    let dispatch = useDispatch()
    let navigate = useNavigate()

    const handleLogout =()=>{
      localStorage.removeItem('user')
      dispatch(activeUser(null))
      navigate("/login")
    }


  return (
    <nav className='flex justify-between items-center py-2 px-5 shadow-md'>
        <div>
            <img src="" alt="Logo" />
        </div>
        <div>
            <input className='py-2 px-4 w-80' type="text" placeholder='Product search' />
        </div>
        <List className="flex">
            <ListItem text="Home"/>
            <ListItem text="Home"/>
            <ListItem text="Home"/>
            <ListItem text="Home"/>
            <ListItem text="Home"/>
            <ListItem text="Home"/>
            <ListItem text="Home"/>
        </List>
        <div >
            <Button onClick={handleLogout} text="Logout"/>
        </div>
    </nav>
  )
}

export default Navbar