import React, { useEffect } from 'react'
import UserList from '../components/users-list/UserList'
import ActiveUser from '../components/active-user/ActiveUser'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const user = useSelector((state)=>state.user.value)
  let navigate = useNavigate()

  useEffect(()=>{
    if(!user){
      navigate("/login")
    }else{
      navigate("/home")
    }
  },[])

  return (
    <div>
      <ActiveUser/>

    </div>
  )
}

export default Home