import React from 'react'
import List from '../list/List'
import ListItem from '../list/ListItem'
import Button from '../button/Button'
// import { Button } from 'antd'

const Navbar = () => {
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
            <Button text="Logout"/>
        </div>
    </nav>
  )
}

export default Navbar